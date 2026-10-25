import { createHash } from 'node:crypto'
import { access, mkdir, readdir, readFile } from 'node:fs/promises'
import { extname, join, relative, resolve } from 'node:path'
import { addTemplate, defineNuxtModule } from '@nuxt/kit'
import sharp from 'sharp'

interface ImageMetadata {
  width: number
  height: number
  variants: Array<{ src: string; width: number }>
}

export default defineNuxtModule({
  meta: { name: 'site-images' },
  async setup(_options, nuxt) {
    const publicDirectory = resolve(nuxt.options.rootDir, 'public')
    const outputDirectory = resolve(nuxt.options.rootDir, '.cache/site-images')
    const images: Record<string, ImageMetadata> = {}
    await mkdir(outputDirectory, { recursive: true })

    const scan = async (directory: string) => {
      for (const entry of await readdir(directory, { withFileTypes: true })) {
        const file = join(directory, entry.name)
        if (entry.isDirectory()) {
          await scan(file)
          continue
        }
        if (!/\.(webp|png|jpe?g|svg)$/.test(entry.name)) continue

        const metadata = await sharp(file).metadata()
        if (!metadata.width || !metadata.height) continue
        const src = '/' + relative(publicDirectory, file).replaceAll('\\', '/')
        const variants: ImageMetadata['variants'] = []
        if (extname(file) !== '.svg' && metadata.width > 320) {
          const hash = createHash('sha256')
            .update(await readFile(file))
            .update('webp-82-v1')
            .digest('hex')
            .slice(0, 16)
          for (const width of [320, 526, 768]) {
            if (width >= metadata.width) continue
            const name = `${hash}-${width}.webp`
            const destination = join(outputDirectory, name)
            try {
              await access(destination)
            } catch {
              await sharp(file)
                .resize({ width, withoutEnlargement: true })
                .webp({ quality: 82 })
                .toFile(destination)
            }
            variants.push({ src: `/_images/${name}`, width })
          }
          variants.push({ src, width: metadata.width })
        }
        images[src] = { width: metadata.width, height: metadata.height, variants }
      }
    }

    await scan(join(publicDirectory, 'img'))
    addTemplate({
      filename: 'site-images.ts',
      write: true,
      getContents: () =>
        `export const siteImages = ${JSON.stringify(images)} as Record<string, { width: number; height: number; variants: Array<{ src: string; width: number }> }>`
    })
    nuxt.hook('nitro:config', (config) => {
      config.publicAssets ||= []
      config.publicAssets.push({ dir: outputDirectory, baseURL: '/_images', maxAge: 31536000 })
    })
  }
})
