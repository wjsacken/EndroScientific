module.exports = {
  siteMetadata: {
    title: 'Iteck',
    description: 'Iteck - Multi-Purpose React.js Gatsby Template',
    author: 'ThemesCamp'
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-eslint',
    {
      resolve: "gatsby-source-shopify",
      options: {
        storeUrl: "7cdf1c.myshopify.com",
        password: "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",
        salesChannel: "82998a8b-c8e9-4dab-92d3-61defe2a148a",
        apiVersion: "2023-04",
        shopifyConnections: ['collections']
      },
    },
    "gatsby-plugin-image"
  ],
  trailingSlash: "always"
}