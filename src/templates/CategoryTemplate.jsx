import React, { useEffect, useRef, useState } from 'react';
import { graphql, Link } from 'gatsby';
import navbarScrollEffect from "common/navbarScrollEffect";
import MainLayout from 'layouts/Main';
import Navbar from 'components/Navbars/ITNav';
import Footer from 'components/IT/Footer';

const CategoryTemplate = ({ data }) => {
  const navbarRef = useRef(null);
  const { title, description, products } = data.shopifyCollection;

  const updatedDescription = description.replace(/K2 Scientific/g, 'EndroSci');
  const updatedDescription1 = updatedDescription.replace(/K2/g, 'EndroSci');
  
  const [listView] = useState(false);
  const [currentPage] = useState(1);
  const itemsPerPage = 12; // Set the number of items per page

  // Calculate the index of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;

  // Create a new array containing only the items for the current page
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);


  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <MainLayout>
      <Head title={title} />
      <Navbar />
      <main className="single-project pt-50 style-5">
        <div className="challenge section-padding style-5 overflow-hidden">
            <div className="container">
              <div className="row gx-5">
                <div className="col-lg-4">
                  <div className="section-head style-5">
                    <h2><span>{title}</span> <br /> Category </h2>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="inf">
                    <div className="text color-666 mb-20">
                        <p>{updatedDescription1}</p>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                                      <span className="price-sale">
                                        ${item.priceRangeV2.maxVariantPrice.amount.toLocaleString()}
                                      </span>
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
    </main>
    <Footer noWave />
  </MainLayout>
)
}

export default CategoryTemplate;

export const query = graphql`
  query CategoryQuery($id: String!) {
    shopifyCollection(id: { eq: $id }) {
      title
      description
      products {
        title
        handle
        priceRangeV2 {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        featuredImage {
          src
          altText
        }
      }
    }
  }
`;


const Head = ({ title }) => {
return (
  <>
    <title>{title} - EndroSci</title>
    <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
    <link rel="stylesheet" href="/assets/css/style.css" />
  </>
)
}
