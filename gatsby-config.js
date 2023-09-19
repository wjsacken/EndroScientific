require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: 'Iteck',
    description: 'Iteck - Multi-Purpose React.js Gatsby Template',
    author: 'ThemesCamp'
  },

  plugins: [
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        password: process.env.GATSBY_SHOPIFY_PASSWORD,
        salesChannel: process.env.SALES_CHANNEL,
        apiVersion: process.env.API_VERSION,
        shopifyConnections: [`collections`]
      },
    },
    `gatsby-plugin-image`
  ],
  trailingSlash: `always`
}
