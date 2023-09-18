import React, { useState } from 'react';
import { Link } from 'gatsby';
const Shop = ({ style = "4", products }) => {
  const listView = false;
  const currentPage = 1;
  
  const itemsPerPage = 12; // Set the number of items per page

  // Calculate the index of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;

  // Create a new array containing only the items for the current page
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <section className="shop section-padding pt-50">
      <div className="container">
        <div className="row gx-4">
          <div className="col-lg-12">
            <div className="products-content">
              <div className={`products ${listView ? 'list-view':''}`}>
                <div className="row gx-2 gx-lg-4">
                {
                    currentItems.map((item, index) => (
                      <div className="col-6 col-lg-3 card-width" key={item.id}>
                        <div className="product-card">
                          <div className="img">
                            {item.featuredImage && (
                              <img className="product-image" src={item.featuredImage.src} alt={item.featuredImage.altText} />
                            )}
                          </div>
                          <div className="info">
                            <h5 className="title">
                              <Link to={`/product/${item.handle}`}>{ item.title }</Link>
                            </h5>
                          </div>
                          <div className="price">
                            <span className="price-sale">$</span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Shop;
