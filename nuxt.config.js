// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    vueI18n: './i18n.config.js'
  },
  devtools: { enabled: true }
})
