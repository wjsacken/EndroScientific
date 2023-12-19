import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Product = ({ rtl }) => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        edges {
          node {
            id
            title
            handle
            featuredImage {
              src
              gatsbyImageData
              altText
            }
            description

          }
        }
      }
    }
  `);

  return (
    <>
      {data.allShopifyProduct.edges.map(({ node: product }) => (
        <div className="col-6 col-lg-3 card-width" key={product.id}>
          <div className="product-card">
            <div className="img">
              {product.featuredImage && (
                <img className="product-image" src={product.featuredImage.src} alt={product.featuredImage.altText} />
              )}
            </div>
            <div className="info">
              <h5 className="title">
                <Link to={`/product/${product.handle}`}>{ product.title }</Link>
              </h5>
            </div>
            
          </div>
        </div>
      ))}
    </>
  );
}

export default Product;
