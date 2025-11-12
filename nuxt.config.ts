// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-mcp',
    '@nuxtjs/i18n'
  ],

  image: {
    formats: ['webp', 'avif'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  i18n: {
    locales: [
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-FR',
        file: 'fr.json'
      },
      {
        code: 'eu',
        name: 'Euskara',
        iso: 'eu-ES',
        file: 'eu.json'
      },
      {
        code: 'es',
        name: 'Español',
        iso: 'es-ES',
        file: 'es.json'
      }
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

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
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
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
  },

  nitro: {
    preset: 'netlify'
  }
})
