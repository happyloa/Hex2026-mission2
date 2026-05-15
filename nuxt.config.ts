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
  compatibilityDate: '2025-07-15',
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

  nitro: {
    prerender: {
      routes: blogPrerenderRoutes
    }
  }
})
