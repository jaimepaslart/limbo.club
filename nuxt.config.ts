// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    'nuxt-mcp'
  ],

  app: {
    head: {
      title: 'Limbo – Agenda culturel transfrontalier',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Agenda culturel transfrontalier du Pays Basque nord et sud. Découvrez les événements, concerts, expositions et festivals des deux côtés de la frontière.' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  typescript: {
    strict: true,
    typeCheck: false
  },

  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google' },
      { name: 'Inter', provider: 'google' }
    ]
  },

  runtimeConfig: {
    // Variables privées (seulement accessibles côté serveur)
    resendApiKey: process.env.NUXT_RESEND_API_KEY,
    contactEmail: process.env.NUXT_CONTACT_EMAIL
  }
})
