import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Product from './Product';
import TopFilter from './TopFilter'

const Shop = ({ style = "4", rtl }) => {
  const [listView, setListView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Set the number of items per page

  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct(limit: 12) {
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
            variants {
              price
            }
          }
        }
      }
    }
  `).allShopifyProduct.edges.map(edge => edge.node);

  // Calculate the index of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;

  // Create a new array containing only the items for the current page
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Update the current page when a pagination link is clicked
  const handlePageChange = (event, newPage) => {
    event.preventDefault();
    setCurrentPage(newPage);
  };

  return (
    <section className="shop section-padding pt-50">
      <div className="container">
        <div className={`section-head text-center style-${style} ${style==="5" ? 'mb-80':''}`}>
          <h2 className="mb-20">{ rtl ? '' : 'Endrosci' }  <span> { rtl ? '' : 'Products' } </span> </h2>
          <div className="page-links color-999">
            <a href="#" className="me-2">
              { rtl ? 'الرئيسية' : 'Home' }
            </a>
            <span className="me-2">/</span>
            <a href="#" className="color-000">
              { rtl ? '' : 'Products' }
            </a>
          </div>
        </div>
        <div className="row gx-4">
          <div className="col-lg-12">
            <div className="products-content">
              <TopFilter setListView={setListView} rtl={rtl} />
              <div className={`products ${listView ? 'list-view':''}`}>
                <div className="row gx-2 gx-lg-4">
                  {
                    currentItems.map((item, index) => (
                      <Product key={index} product={item} rtl={rtl} />
                    ))
                  }
                </div>
                <div className={`pagination style-5 color-${style} justify-content-center mt-50`}>
                  {
                    Array(Math.ceil(data.length / itemsPerPage)).fill().map((_, index) => (
                      <a href="#" key={index} onClick={(e) => handlePageChange(e, index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                        <span>{index + 1}</span>
                      </a>
                    ))
                  }
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
                      handlePageChange(e, currentPage + 1)
                    }
                  }}>
                    <span className="text">{ rtl ? 'التالي' : 'next' } <i className="fas fa-chevron-right"></i> </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop;
