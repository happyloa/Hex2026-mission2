import assert from 'node:assert/strict'
import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve('.output/public')
const articles = (await readdir('content/blog')).filter((file) => file.endsWith('.md'))
const slugs = articles.map((file) => file.slice(0, -3))
const pages = ['/', '/service', '/project', '/blog', ...slugs.map((slug) => `/blog/${slug}/`)]

test('static JSON supports every article and contains a compact index', async () => {
  const index = JSON.parse(await readFile(path.join(root, 'api/blog/index.json'), 'utf8'))
  assert.deepEqual(
    index.map((post) => post.path).sort(),
    slugs.map((slug) => `/blog/${slug}`).sort()
  )
  assert.ok(
    index.every((post) => !('body' in post)),
    'The index must not download article bodies'
  )
  for (const slug of slugs) {
    const post = JSON.parse(await readFile(path.join(root, `api/blog/${slug}.json`), 'utf8'))
    assert.equal(post.path, `/blog/${slug}`)
    assert.ok(post.title && post.body && post.description)
    const summary = index.find((item) => item.path === post.path)
    for (const key of Object.keys(summary))
      assert.deepEqual(summary[key], post[key], `${slug}: ${key}`)
  }
})

test('prerendered pages reserve local image sizes and link directly to canonical article paths', async () => {
  for (const route of pages) {
    const html = await readFile(path.join(root, route, 'index.html'), 'utf8')
    assert.equal((html.match(/<main[\s>]/g) || []).length, 1, `${route}: one main landmark`)
    assert.doesNotMatch(
      html,
      /https:\/\/fonts\.(?:googleapis|gstatic)\.com/,
      `${route}: fonts must be local`
    )
    assert.ok(
      (html.match(/as="font"/g) || []).length <= 1,
      `${route}: only preload the single subset font`
    )
    for (const [, href] of html.matchAll(/href="(\/blog\/[^"?#]+)"/g)) {
      assert.ok(href.endsWith('/'), `${route}: ${href} would redirect`)
    }
    for (const [tag] of html.matchAll(/<img\s[^>]+>/g)) {
      if (!/src="\/(?:img|_images)\//.test(tag)) continue
      assert.match(tag, /\bwidth="[1-9]\d*"/, `${route}: image width`)
      assert.match(tag, /\bheight="[1-9]\d*"/, `${route}: image height`)
    }
    for (const [, asset] of html.matchAll(/(?:src|srcset)="(\/(?:img|_images)\/[^" ,]+)/g)) {
      assert.ok((await stat(path.join(root, asset))).size > 0, `${route}: ${asset}`)
    }
  }
})
