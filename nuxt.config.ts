import { readdirSync, readFileSync } from 'node:fs'
import { basename, extname } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { prepareSiteFont } from './build/fonts'

const getBlogPrerenderRoutes = () => {
  try {
    // 由 content/blog 自動產生文章靜態路由，新增 Markdown 時不用同步維護設定檔。
    return readdirSync(new URL('./content/blog/', import.meta.url))
      .filter((file) => file.endsWith('.md'))
      .map((file) => `/blog/${basename(file, extname(file))}/`)
  } catch {
    return []
  }
}

const blogPrerenderRoutes = getBlogPrerenderRoutes()

const getFontGlyphs = () => {
  const readText = (directory: URL): string =>
    readdirSync(directory, { withFileTypes: true })
      .map((entry) => {
        const file = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directory)
        if (entry.isDirectory()) return readText(file)
        return /\.(vue|ts|css|md)$/.test(entry.name) ? readFileSync(file, 'utf8') : ''
      })
      .join('')

  const ascii = Array.from({ length: 95 }, (_, index) => String.fromCharCode(index + 32)).join('')
  return [
    ...new Set(
      ascii +
        readText(new URL('./app/', import.meta.url)) +
        readText(new URL('./content/', import.meta.url))
    )
  ]
    .filter((character) => character.codePointAt(0)! >= 32)
    .sort()
    .join('')
}

const fontSource = await prepareSiteFont(getFontGlyphs(), new URL('./', import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-19',
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW'
      }
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://hex2026-mission2.pages.dev'
    }
  },

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  modules: ['@nuxt/content', '@nuxt/icon', '@nuxt/fonts'],

  fonts: {
    processCSSVariables: true,
    experimental: { disableLocalFallbacks: true },
    families: [
      {
        name: 'Noto Sans TC',
        src: fontSource,
        weight: '500 700',
        style: 'normal',
        display: 'swap',
        preload: true
      },
      { name: 'Noto Sans', provider: 'none' }
    ]
  },

  icon: {
    provider: 'none',
    clientBundle: {
      icons: [
        'lucide:chevron-down',
        'lucide:instagram',
        'lucide:mail-open',
        'lucide:share-2',
        'simple-icons:github',
        'simple-icons:instagram',
        'simple-icons:line',
        'simple-icons:linkedin'
      ]
    }
  },

  content: {
    // 使用 Node.js 內建 node:sqlite 作為建置期資料庫，取代已棄用的 better-sqlite3
    // （其相依套件 prebuild-install 已停止維護），避免安裝時出現 deprecated 警告。
    experimental: {
      sqliteConnector: 'native'
    }
  },

  nitro: {
    prerender: {
      // 序列化預渲染：平行寫入同一個 cache key 時，Windows 檔案系統的
      // rename 並非原子操作，會間歇性丟出 EPERM。序列化可穩定避免此問題，
      // 對此規模的網站（20 餘頁）幾乎沒有建置時間影響。
      concurrency: 1,
      routes: [
        ...blogPrerenderRoutes,
        '/api/blog/index.json',
        ...blogPrerenderRoutes.map((route) => `/api${route.slice(0, -1)}.json`)
      ]
    }
  }
})
