export default {
  publicRuntimeConfig: {
    proxyPrefix: process.env.PROXY_PREFIX,
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    htmlAttrs: {
      lang: 'en',
    },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    title: 'MetaCheck',
    meta: [
      { name: 'theme-color', content: '#115f57' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Metacheck is a free open-source tool for generating/checking metatags and metadata for webpages ',
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        content: 'https://metacheckui.netlify.app/',
      },
      {
        property: 'twitter:title',
        content: 'Metacheck',
      },
      {
        property: 'twitter:description',
        content:
          'Metacheck is a free open-source tool for generating/checking metatags and metadata for webpages ',
      },
      {
        property: 'twitter:image',
        content: 'https://metacheckui.netlify.app/metaimage.png',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://metacheckui.netlify.app/',
      },
      {
        property: 'og:title',
        content: 'Metacheck',
      },
      {
        property: 'og:description',
        content:
          'Metacheck is a free open-source tool for generating/checking metatags and metadata for webpages ',
      },
      {
        property: 'og:image',
        content: 'https://metacheckui.netlify.app/metaimage.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/fonts/mono/style.css',
    '@/assets/fonts/sofia_pro/style.css',
    '@/assets/animations.css',
    '@/assets/icofont/icofont.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://go.nuxtjs.dev/tailwindcss
    '@aceforth/nuxt-netlify',
  ],
  netlify: {
    redirects: [
      {
        from: '/*',
        to: 'http://metacheck.herokuapp.com/:splat',
        status: 200,
      },
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  axios: {
    baseURL: 'http://metacheck.herokuapp.com',
    headers: {
      common: {
        Accept: 'application/json',
      },
    },
    proxy: true,
  },
  proxy: {
    '/api/': {
      target: 'http://metacheck.herokuapp.com',
      pathRewrite: { '^/': '' },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
