const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const productResult = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            title
          }
        }
      }
      allShopifyCollection {
          edges {
            node {
              id
              title
            }
          }
        }
    }
  `);

productResult.data.allShopifyProduct.edges.forEach(({ node }) => {
    let pathTitle = node.title.replace(/\s+/g, '_'); // Replaces spaces with underscores
    pathTitle = pathTitle.replace(/"/g, ''); // Removes double quotes

    createPage({
      path: `/product/${pathTitle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        title: node.title,
      },
    });
  });

  productResult.data.allShopifyCollection.edges.forEach(({ node }) => {
    const pathTitle = node.title.replace(/\s+/g, '_'); // Replaces spaces with underscores

    createPage({
      path: `/category/${pathTitle}`,
      component: path.resolve(`./src/templates/CategoryTemplate.jsx`),
      context: {
        id: node.id,
      },
    });
  });
};
