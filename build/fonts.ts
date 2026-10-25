import { createHash } from 'node:crypto'
import { access, mkdir, readFile, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const require = createRequire(import.meta.url)
const subsetFont = require('subset-font') as (
  font: Buffer,
  text: string,
  options: { targetFormat: 'woff2'; variationAxes: { wght: { min: number; max: number } } }
) => Promise<Buffer>

const sourceCommit = 'e7db6ca603fd4862010383ff17ffd6cc4ffac1c0'
const sourceURL = `https://raw.githubusercontent.com/google/fonts/${sourceCommit}/ofl/notosanstc/NotoSansTC%5Bwght%5D.ttf`

export const prepareSiteFont = async (glyphs: string, root: URL) => {
  const directory = join(fileURLToPath(root), '.cache/fonts')
  await mkdir(directory, { recursive: true })
  const key = createHash('sha256')
    .update(sourceCommit + require('subset-font/package.json').version + glyphs)
    .digest('hex')
    .slice(0, 20)
  const output = join(directory, `noto-sans-tc-${key}.woff2`)
  try {
    await access(output)
  } catch {
    const source = join(directory, `source-${sourceCommit}.ttf`)
    let font: Buffer
    try {
      font = await readFile(source)
    } catch {
      const response = await fetch(sourceURL)
      if (!response.ok) throw new Error(`Font download failed: ${response.status}`)
      font = Buffer.from(await response.arrayBuffer())
      await writeFile(source, font)
    }
    await writeFile(
      output,
      await subsetFont(font, glyphs, {
        targetFormat: 'woff2',
        variationAxes: { wght: { min: 500, max: 700 } }
      })
    )
  }
  return pathToFileURL(output).href
}
