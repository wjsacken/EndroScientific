import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="style-2 pt-80 pb-60 bg-darkBlue border-top brd-light text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="foot_logo">
              <img src="/assets/img/logo_ll.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="foot_links text-uppercase text-center small">
              <Link to="/home-it-solutions" className="mx-4">
                Home
              </Link>
              <Link to="/page-about-5" className="mx-4">
                about
              </Link>
              <Link to="/page-services-5" className="mx-4">
                services
              </Link>
              <Link to="/page-portfolio-5" className="mx-4">
                portfolio
              </Link>
              <Link to="/page-blog-5" className="mx-4">
                news
              </Link>
            </div>
          </div>
          <div className="col-lg-3 text-end">
            <div className="socail-icons">
              <a href="#" className="icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-30">
          <div className="small">
            <span className="op-6">© 2022 Copyrights by </span>
            <a href="#" className="mx-1">Iteck Co.</a>
            <span className="op-6"> All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer