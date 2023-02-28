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
    <nav className="navbar navbar-expand-lg navbar-dark style-2 position-absolute w-100 p-0" ref={navbarRef}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/assets/img/Endro.svg" alt="Endro Scientific" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
            <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <a className="nav-link active" href="#" id="navbarDropdown1" role="button" aria-expanded="false">
                Home
              </a>
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
            <div className="qoute-nav ps-4">
              <a href="#" className="search-icon me-3">
                <i className="bi bi-search"></i>
              </a>
              <Link to="/page-contact-5" className="btn sm-butn border text-white radius-9 hover-darkBlue">
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
