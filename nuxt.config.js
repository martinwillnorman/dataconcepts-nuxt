module.exports = {
  css: [
    "@/assets/css/style.sass",
    "aos/dist/aos.css",
    "swiper/dist/css/swiper.css"
  ],
  /*
   ** Headers of the page
   */
  head: {
    title: "dataconcepts-nuxt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href:
          "https://fonts.googleapis.com/css?family=Heebo:400,500,700|Quattrocento+Sans:400,700",
        rel: "stylesheet"
      }
    ]
  },

  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    }
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#A07A2E" },

  modules: [["nuxt-sass-resources-loader", "assets/css/base/_variables.sass"]],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/vee-validate.js", ssr: true },
    { src: "~/plugins/swiper.js", ssr: false }
  ]
};
