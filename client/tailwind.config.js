module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.js',
      'layouts/**/*.js',
      'pages/**/*.js',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    options: {
      whitelistPatterns: [/agile*/],
      whitelistPatternsChildren: [/agile*/]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
