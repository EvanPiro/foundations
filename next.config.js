const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withSass(
  withCSS({
    exportTrailingSlash: true,
    exportPathMap: async function () {
      return {
        '/': { page: '/' },
        '/about-us': { page: '/about-us' },
      }
    },
    devIndicators: {
      autoPrerender: false
    },
  })
);
