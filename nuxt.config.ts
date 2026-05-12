const blogPrerenderRoutes = [
  '/blog/ai-interface-design-workflow',
  '/blog/brand-identity-to-digital-experience',
  '/blog/design-system-with-figma-storybook',
  '/blog/micro-interactions-consulting-website',
  '/blog/open-bank-api-product-design'
]

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW'
      }
    }
  },

  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/icon', '@nuxtjs/tailwindcss'],

  nitro: {
    prerender: {
      routes: blogPrerenderRoutes
    }
  },

  fonts: {
    defaults: {
      weights: ['500', '700'],
      styles: ['normal']
    },
    families: [
      {
        name: 'Noto Sans TC',
        provider: 'google',
        weights: ['500', '700'],
        styles: ['normal'],
        global: true
      }
    ]
  }
})
