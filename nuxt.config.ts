// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW'
      }
    }
  },

  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/icon', '@nuxtjs/tailwindcss'],

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
