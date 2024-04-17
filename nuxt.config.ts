// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        dir: 'auto',
        lang: 'uk'
      },
      link: [{ rel: 'icon', type: 'image/png', href: '/assets/images/logo.png' }]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  devtools: { enabled: true }
})
