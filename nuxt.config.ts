// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        dir: 'auto',
        lang: 'uk'
      },
      link: [{ rel: 'icon', type: 'image/png', href: '/assets/images/logo.png' }]
    }
  },
  css: [
    "~/public/scss/main.scss",
    "~/public/scss/components.scss",
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    ['@nuxtjs/robots', { UserAgent: '*', Disallow: '' }],
  ],
  devtools: { enabled: true }
})
