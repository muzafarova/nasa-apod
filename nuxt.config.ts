// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  routeRules: {
    '/': {},
    '/api/**': {},
    '/favourites': { ssr: false },
    '/apod': {
      redirect: { to: '/', statusCode: 302 },
    },
    '/apod/**': {},
  },
});
