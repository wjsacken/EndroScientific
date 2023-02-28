import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import navbarScrollEffect from "common/navbarScrollEffect";


const ITCreativeNav = () => {
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

  const toggleSideMenu = (e) => {
    e.preventDefault();

    document.querySelector('.side_menu_btn').classList.toggle('active');
    
    const side_menu = document.getElementById('side_menu');
    const side_overlay = document.querySelector('.side_overlay');

    side_menu && side_menu.classList.toggle('show');
    side_overlay && side_overlay.classList.toggle('show');
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light style-7" ref={navbarRef}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/assets/img/logo_lgr.png" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-4">
            <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown1" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
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
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                pages
                {/* <small className="hot alert-danger text-danger">hot</small> */}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><Link to="/page-about-app" className="dropdown-item">about</Link></li>
                <li><Link to="/page-product-app" className="dropdown-item">product</Link></li>
                <li><Link to="/page-services-app" className="dropdown-item">services</Link></li>
                <li><Link to="/page-shop-app" className="dropdown-item">shop</Link></li>
                <li><Link to="/page-single-project-app" className="dropdown-item">single project</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/page-portfolio-app" className="nav-link">
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/page-blog-app" className="nav-link">
                blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/page-contact-app" className="nav-link">
                contact
              </Link>
            </li>
          </ul>
          <div className="nav-side">
            <div className="d-flex align-items-center">
              <a href="#" className="me-4">
                <img src="/assets/img/icons/user.png" alt="" />
              </a>
              <a href="#0" className="side_menu_btn" onClick={toggleSideMenu}>
                <img src="/assets/img/icons/4dots.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ITCreativeNav