import React from 'react';
import { Link } from 'gatsby';

const Product = ({ product }) => {
  return (
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
            <div className="price">
              <span className="price-sale">$</span>
            </div>
          </div>
        </div>
      )
    };

export default Product;
