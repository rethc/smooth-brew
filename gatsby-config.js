require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
  siteMetadata: {
    title: `Smooth Brew`,
    description: `The freshest cofffe shop in Wellington!`,
    author: `@rethc`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-186451791-1",
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: '3.0.27',
        publicApiKey: process.env.GATSBY_SNIPCART_APIKEY,
        defaultLang: 'en',
        currency: 'nzd',
        openCartOnAdd: true,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
