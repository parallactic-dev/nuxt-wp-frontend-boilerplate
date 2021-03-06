import generateSitemap from './util/sitemap'

export default {
  ssr: true,
  target: 'server',
  server: {
    port: process.env.NUXT_ENV_SERVER_PORT || 3000
  },
  head: {
    title: 'Nuxt.js WP frontend boilerplate',
    htmlAttrs: {
      lang: 'de-CH',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '196x196', href: '/favicon-196.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
    ]
  },
  css: [
  ],
  styleResources: {
    scss: [
      '@/styles/_variables.scss',
      '@/styles/_breakpoints.scss',
      '@/styles/_mixins.scss',
    ],
  },
  plugins: [
    '~/plugins/api'
  ],
  components: false,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
  ],
  axios: {
    baseURL: process.env.NUXT_ENV_CMS_BASE_URL
  },
  build: {
  },
  sitemap: () => generateSitemap()
}
