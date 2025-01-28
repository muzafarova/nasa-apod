// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  routeRules: {
    '/': {},
    '/apod': {
      redirect: { to: '/', statusCode: 302 },
    },
    '/apod/**': { isr: 3600 },
    '/api/**': { cache: { maxAge: 3600 } },
    '/favourites': { ssr: false },
  },
  image: {
    domains: ['apod.nasa.gov', 'img.youtube.com'],
    screens: {
      thumb: 128,
      thumb2x: 256,
    },
  },
});
