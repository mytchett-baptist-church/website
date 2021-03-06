module.exports = {
  modules: [
    "nuxtdown",
    "vue-scrollto/nuxt",
  ],
  // nuxt-config.js
  plugins: [
    { src: '~/plugins/vue-sidebar-menu.js', ssr: false }
  ],

  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: "Mytchett Baptist Church",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Welcome to our website!"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: [
    '@/assets/sass/main.scss',
    // '@/assets/css/main.css'
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: "#FFBB43" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
