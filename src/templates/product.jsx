import React, { useEffect, useRef, useState } from 'react'; 
import { graphql } from "gatsby"; 
import navbarScrollEffect from "common/navbarScrollEffect"; 
import MainLayout from 'layouts/Main'; 
import Navbar from 'components/Navbars/ITNav'; 
import Footer from 'components/IT/Footer'; 
import SwiperCore, { FreeMode, Thumbs } from 'swiper';
import FadeInOut from 'components/FadeInOut';

SwiperCore.use([FreeMode, Thumbs]);

const PageProductApp = ({ data }) => {
  const product = data.shopifyProduct;
  const productName = product.title;
  const productImage = product.featuredImage.src;
  const mainInfo = {
    category: product.productType,
    title: product.title,
    price: product.priceRangeV2.maxVariantPrice.amount,
    description: product.description,
    specs: product.metafield && product.metafield.value ? product.metafield.value : null,
    features: [],
  };

  const moreInfo = {
    SKU: product.variants[0].sku,
    Category: product.productType,
    tags: product.tags,
  };

  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);
  
  return (
    <MainLayout>
      <Head title={productName} />
      <Navbar navbarRef={navbarRef} />
      <main className="product-page style-5">
        <section className="product pt-50">
          <div className="container">
            <div className="section-head text-center mb-80 style-5">
              <div className="page-links color-999">
                <a href="#" className="me-2">
                  Home
                </a>
                <span className="me-2">/</span>
                <a href="#" className="me-2">
                  Itecks Store
                </a>
                <span className="me-2">/</span>
                <a href="#" className="color-000">
                  { productName }
                </a>
              </div>
            </div>
            <div className="content">
              <div className="row gx-5">
                <div className="col-lg-6">
                  <img className="productImage" src={ productImage } alt={ productName } />
                </div>
                <div className="col-lg-6">
                  <div className="product-info">
                    <h5 className="title">{ mainInfo.title }</h5>
                    <div className="price">
                      ${mainInfo.price.toLocaleString()}
                    </div>
                    <div className="info-text">
                      { mainInfo.description }
                    </div>
                    <ul className="info-list">
                      { 
                        mainInfo.features.map((feature, i) => (
                          <li className="d-flex align-items-center" key={i}>
                            <i className="bi bi-dash me-1"></i>
                            { feature }
                          </li>
                        )) 
                      }
                    </ul>
                    
                    <div className="more-info pt-20 mt-1 border-1 border-top brd-gray">
                      <p className="text-uppercase fs-14px color-666 mb-1"> <strong className="color-000">SKU:</strong> { moreInfo.SKU }</p>
                      <p className="fs-14px color-666 mb-1">
                        <strong className="color-000">Tags:</strong> { moreInfo.tags.map((tag, index) => (<a href="#" className="me-1" key={index}>{ tag }, </a>)) }
                      </p>
                    </div>
                    <div className="socail-icons">
                      <a href="#"
                        className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#"
                        className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#"
                        className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#"
                        className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2">
                        <i className="fab fa-pinterest"></i>
                      </a>
                      <a href="#"
                        className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-details pt-100">
          <div className="container">
            <div className="tab-content">
                <div className="tab-pane show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                  <div className="content-info text-center pb-0">
                    <div className="text mb-30">
                      <div className="text specBox" dangerouslySetInnerHTML={{ __html: mainInfo.specs }}></div>
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
};
export default PageProductApp;

export const query = graphql`
  query($title: String!) {
    shopifyProduct(title: { eq: $title }) {
      title
      id
      featuredImage {
        src
        gatsbyImageData
        altText
      }
      productType
      description
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
      }
      variants {
        sku
      }
      metafield(namespace: "product", key: "specifications") {
        value
      }
      tags
    }
  }
`;

const Head = ({ productName }) => {
  return (
    <>
      <title>{productName} - EndroSci</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
  }

  