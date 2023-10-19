const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const productResult = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            title
            handle
            id
          }
        }
      }
      allShopifyCollection {
          edges {
            node {
              id
              title
              handle
            }
          }
        }
    }
  `);

productResult.data.allShopifyProduct.edges.forEach(({ node }) => {
  let pathTitle = node.handle.replace(/\s+/g, '-'); // Replaces spaces with underscores
  pathTitle = pathTitle.replace(/[".,]/g, ''); // Removes double quotes, periods, and commas

  createPage({
    path: `/product/${pathTitle}`,
    component: path.resolve(`./src/templates/product.jsx`),
    context: {
      title: node.title,
    },
  });
});


  productResult.data.allShopifyCollection.edges.forEach(({ node }) => {
    const pathTitle = node.handle.replace(/\s+/g, '_'); // Replaces spaces with underscores

    createPage({
      path: `/category/${pathTitle}`,
      component: path.resolve(`./src/templates/CategoryTemplate.jsx`),
      context: {
        id: node.id,
      },
    });
  });
};
