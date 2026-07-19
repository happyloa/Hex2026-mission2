import { readdirSync } from 'node:fs'
import { basename, extname } from 'node:path'

const getBlogPrerenderRoutes = () => {
  try {
    // 由 content/blog 自動產生文章靜態路由，新增 Markdown 時不用同步維護設定檔。
    return readdirSync(new URL('./content/blog/', import.meta.url))
      .filter((file) => file.endsWith('.md'))
      .map((file) => `/blog/${basename(file, extname(file))}`)
  } catch {
    return []
  }
}

const blogPrerenderRoutes = getBlogPrerenderRoutes()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-19',
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW'
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;700&display=swap'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://hex2026-mission2.pages.dev'
    }
  },

  modules: ['@nuxt/content', '@nuxt/icon', '@nuxtjs/tailwindcss'],

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
      routes: blogPrerenderRoutes
    }
  }
})
