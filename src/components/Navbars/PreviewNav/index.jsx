import React from 'react';
import { Link } from 'gatsby';
import appData from 'data/appData.json';

const PreviewNavbar = ({ navbarRef }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light style-1 nav-preview py-0" ref={navbarRef}>
      <div className="container-xxl">
        <a className="navbar-brand" href="#">
          <img src="/assets/img/logo_cd.png" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item dropDown megaMenu col3">
              <a className="nav-links dropLink active" href="#">
                Homes
                <small className="icon ms-1"><i className="bi bi-chevron-down me-1"></i></small>
              </a>
              <ul className="dropDownMenu">
                <li className="dropdown-items">
                  <a href="#" className="menuLink">multi-pages</a>
                  <ul className="subDropDown">
                    <li>
                      <Link to="/home-it-solutions2" className="subLink">
                        IT Solution Creative
                      </Link>
                      <span className="new">new</span>
                    </li>
                    <li>
                      <Link to="/home-data-analysis" className="subLink">
                        Data Analysis
                      </Link>
                      <span className="new">new</span>
                    </li>
                    <li>
                      <Link to="/home-app-landing" className="subLink">
                        App Landing
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-digital-agency" className="subLink">
                        Digital Agency
                      </Link>
                      <span className="new">Hot</span>
                    </li>
                    <li>
                      <Link to="/home-marketing-startup" className="subLink">
                        Marketing Startup
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-saas-technology" className="subLink">
                        Software company
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-saas-technology" className="subLink">
                        Saas Technology
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-it-solutions" className="subLink">
                        IT Solution
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-shop-5" className="subLink">
                        shop
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-items">
                  <a href="#" className="menuLink">one-page</a>
                  <ul className="subDropDown">
                    <li>
                      <Link to="/home-app-landing-onePage" className="subLink">
                        App Landing
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-digital-agency-onePage" className="subLink">
                        Digital Agency
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-marketing-startup-onePage" className="subLink">
                        Marketing Startup
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-saas-technology-onePage" className="subLink">
                        Software company
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-saas-technology-onePage" className="subLink">
                        Saas Technology
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-it-solutions-onePage" className="subLink">
                        IT Solution
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-shop-app" className="subLink">
                        shop
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-items">
                  <a href="#" className="menuLink">RTL</a>
                  <ul className="subDropDown">
                    <li>
                      <Link to="/rtl-home-marketing-startup" className="subLink">
                        Marketing Startup
                      </Link>
                    </li>
                    <li>
                      <Link to="/rtl-home-marketing-startup-onePage" className="subLink">
                        Marketing Startup one page
                      </Link>
                    </li>
                    <li>
                      <Link to="/rtl-page-shop" className="subLink">
                        shop
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropDown megaMenu col3">
              <a className="nav-links dropLink active" href="#">
                pages
                <small className="icon ms-1"><i className="bi bi-chevron-down me-1"></i></small>
              </a>
              <ul className="dropDownMenu">
                <li className="dropdown-items">
                  <a href="#" className="menuLink">app pages</a>
                  <ul className="subDropDown">
                    <li>
                      <Link to="/page-about-app" className="subLink">
                        about
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-services-app" className="subLink">
                        services
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-contact-app" className="subLink">
                        contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-product-app" className="subLink">
                        product
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-items">
                  <a href="#" className="menuLink">Saas</a>
                  <ul className="subDropDown">
                    <li>
                      <Link to="/page-about-5" className="subLink">
                        about
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-services-5" className="subLink">
                        services
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-contact-5" className="subLink">
                        contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-product-5" className="subLink">
                        product
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-items">
                  <a href="#" className="menuLink">RTL</a>
                  <ul className="subDropDown">
                    <li>
                      <Link to="/rtl-page-about" className="subLink">
                        about
                      </Link>
                    </li>
                    <li>
                      <Link to="/rtl-page-services" className="subLink">
                        services
                      </Link>
                    </li>
                    <li>
                      <Link to="/rtl-page-contact" className="subLink">
                        contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/rtl-page-product" className="subLink">
                        product
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropDown megaMenu col3">
              <a className="nav-links dropLink active" href="#">
                News
                <small className="icon ms-1"><i className="bi bi-chevron-down me-1"></i></small>
              </a>
              <ul className="dropDownMenu">
                <li className="dropdown-items">
                  <a href="#" className="menuLink">blog</a>
                  <ul className="subDropDown">
                    <li>
                      <Link to="/page-blog-5" className="subLink">
                        saas right side bar blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-blog-5-left-sidebar" className="subLink">
                        saas left side bar blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-blog-5-wide" className="subLink">
                        saas wide blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-blog-app" className="subLink">
                        app right side bar blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-blog-app-left-sidebar" className="subLink">
                        app left side bar blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-blog-app-wide" className="subLink">
                        app wide blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/rtl-page-blog" className="subLink">
                        RTL blog
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-items">
                  <a href="#" className="menuLink">post</a>
                  <ul className="subDropDown">
                    <li>
                      <Link to="/page-single-post-5" className="subLink">
                        Saas right side bar single post
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-single-post-5-left-sidebar" className="subLink">
                        Saas left side bar single post
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-single-post-5-wide" className="subLink">
                        Saas wide single post
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-single-post-app" className="subLink">
                        app right side bar single post
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-single-post-app-left-sidebar" className="subLink">
                        app left side bar single post
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-single-post-app-wide" className="subLink">
                        app wide single post
                      </Link>
                    </li>
                    <li>
                      <Link to="/rtl-page-single-post" className="subLink">
                        RTL single post
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-items">
                  <a href="#" className="menuLink">portfolio</a>
                  <ul className="subDropDown">
                    <li>
                      <Link to="/page-portfolio-5" className="subLink">
                        Saas grid portfolio
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-single-project-5" className="subLink">
                        Saas single project
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-portfolio-app" className="subLink">
                        app grid portfolio
                      </Link>
                    </li>
                    <li>
                      <Link to="/page-single-project-app" className="subLink">
                        app single project
                      </Link>
                    </li>
                    <li>
                      <Link to="/rtl-page-portfolio" className="subLink">
                        RTL portfolio
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-links dropLink" href={appData.itemDocsLink}>
                documentation
              </a>
            </li>
          </ul>
          <div className="nav-side flex-shrink-0">
            <div className="qoute-nav">
              <a href="#0" className="btn sm-butn butn-gard border-0 text-white">
                <span>get started</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default PreviewNavbar