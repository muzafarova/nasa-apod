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
  },
  routeRules: {
    '/': { prerender: true },
    // TODO enable when server-side work done
    // '/api/*': { cache: { maxAge: 60 * 60 } },
    '/apod': {
      redirect: { to: '/', statusCode: 302 },
    },
  },
});
