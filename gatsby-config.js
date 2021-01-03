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
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: process.env.GATSBY_SNIPCART_APIKEY,
        autopop: false,
        js: `https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.js`,
        styles: `https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.css`
      }
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
