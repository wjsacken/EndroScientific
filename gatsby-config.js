require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'EndroScientific',
    description: 'Medical Refrigeration for local, state, and Federal entities.',
    author: 'EndroScientific',
    siteUrl: "https://endrosci.com"
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`
  ],
  trailingSlash: `always`
}
