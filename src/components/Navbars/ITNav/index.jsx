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
    <nav className="navbar navbar-expand-lg navbar-dark bg-darkBlue style-2 position-absolute w-100 p-0" ref={navbarRef}>
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
              <a className="nav-link" href="/" id="navbarDropdown1" role="button" aria-expanded="false">
                Home
              </a>
            </li>
            <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <a className="nav-link dropdown-toggle" href="/products" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><Link to="/category/Blood_and_Plasma/" className="dropdown-item">Blood & Plasma</Link></li>
                <li><Link to="/category/Chromatography/" className="dropdown-item"> Chromatography Refrigerators</Link></li>
                <li><Link to="/category/Combination_Units/" className="dropdown-item"> Combination Units</Link></li>
                <li><Link to="/category/High_Performance/" className="dropdown-item"> High Performance</Link></li>
                <li><Link to="/category/Low-Temperature_-45°C/" className="dropdown-item"> Low Temperature Freezers -45</Link></li>
                <li><Link to="/category/Ultra-Low_-50°C_to_-86°C/" className="dropdown-item"> Ultra Low Freezers -86</Link></li>
                <li><Link to="/category/Undercounter/" className="dropdown-item"> Undercounter Refrigerators & Freezers</Link></li>
                <li><Link to="/category/Upright/" className="dropdown-item"> Upright Refrigerators & Freezers</Link></li>
                <li><Link to="/category/Accessories/" className="dropdown-item"> Accessories</Link></li>
                <li><Link to="/category/Battery_Backup/" className="dropdown-item"> Battery Backup</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/page-contact-5" className="nav-link">
                Contact
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
