import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import navbarScrollEffect from "common/navbarScrollEffect";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add('show');
    dropDownMenu?.classList?.add('show');
  }

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
    const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
    const dropDownMenu = dropdown.querySelector('.dropdown-menu');

    dropDownToggler?.classList?.remove('show');
    dropDownMenu?.classList?.remove('show');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light style-1" ref={navbarRef}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/assets/img/logo_cd.png" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Homes
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><Link to="/" className="dropdown-item">Landing Preview</Link></li>
                <li><Link to="/home-it-solutions2" className="dropdown-item"> Creative It Solutions</Link></li>
                <li><Link to="/home-data-analysis" className="dropdown-item"> Data Analysis</Link></li>
                <li><Link to="/home-app-landing" className="dropdown-item"> App Landing</Link></li>
                <li><Link to="/home-saas-technology" className="dropdown-item"> Saas Technology</Link></li>
                <li><Link to="/home-marketing-startup" className="dropdown-item"> Marketing Startup</Link></li>
                <li><Link to="/home-it-solutions" className="dropdown-item"> It Solution</Link></li>
                <li><Link to="/home-software-company" className="dropdown-item"> Software Company</Link></li>
                <li><Link to="/home-digital-agency" className="dropdown-item"> Digital Agency</Link></li>
                <li><Link to="/home-modren-shop" className="dropdown-item"> Modren Shop</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><Link to="/page-about-5" className="dropdown-item">about</Link></li>
                <li><Link to="/page-product-5" className="dropdown-item">product</Link></li>
                <li><Link to="/page-services-5" className="dropdown-item">services</Link></li>
                <li><Link to="/page-shop-5" className="dropdown-item">shop</Link></li>
                <li><Link to="/page-single-project-5" className="dropdown-item">single project</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/page-portfolio-5" className="nav-link">
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/page-blog-5" className="nav-link">
                blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/page-contact-5" className="nav-link">
                contact
              </Link>
            </li>
          </ul>
          <div className="nav-side">
            <div className="hotline pe-4">
              <div className="icon me-3">
                <i className="bi bi-telephone"></i>
              </div>
              <div className="cont">
                <small className="text-muted m-0">hotline 24/7</small>
                <h6>(+23) 5535 68 68</h6>
              </div>
            </div>
            <div className="qoute-nav ps-4">
              <a href="#" className="search-icon me-3">
                <i className="bi bi-search"></i>
              </a>
              <a href="#" className="cart-icon me-3">
                <i className="bi bi-cart"></i>
                <span className="cart-num ms-1">2</span>
              </a>
              <Link to="/page-contact-5" className="btn sm-butn butn-gard border-0 text-white">
                <span>Free Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar