module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
    },
  ],
};
