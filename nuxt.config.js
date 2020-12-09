export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'test-form',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [

  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    [
      '@nuxtjs/axios',
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBTtj9T5KjJm4i9e-1Ls8n9wadX9hOR_1k",
          authDomain: "nuxt-form-34914.firebaseapp.com",
          databaseURL: "https://nuxt-form-34914-default-rtdb.firebaseio.com",
          projectId: "nuxt-form-34914",
          storageBucket: "nuxt-form-34914.appspot.com",
          messagingSenderId: "737990231631",
          appId: "1:737990231631:web:36ed1a9e8b264607d34c3a"
        },
        services: {
          database: true
        }
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
