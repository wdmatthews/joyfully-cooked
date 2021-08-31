import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  router: {
    base: '/joyfully-cooked/',
  },
  head: {
    titleTemplate: '%s | Joyfully Cooked',
    title: 'Welcome',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Delicious foods with a sprinkle of joy' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  modules: [],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.yellow.lighten3,
          secondary: colors.lightBlue.lighten3,
          info: colors.cyan.base,
          warning: colors.amber.base,
          error: colors.red.base,
          success: colors.green.base,
        },
      },
    },
  },
  build: {},
}
