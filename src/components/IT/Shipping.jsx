import React, { useState } from 'react';
import { Link } from 'gatsby';


const Header = () => {

  return (
    <header className="style-2 overflow-hidden"  data-scroll-index="1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="content text-center text-light text-capitalize mb-50">
              <div className="top_info">
                <h1 className="text-uppercase">EndroSci</h1>

                
              </div>
              <div className="brands mt-20 mb-10" >

              </div>
                    <p className="fw-light text-uppercase">
                    The Leader in <br /> <strong className="fw-bold">Cold-Storage Solutions</strong>  for the Government Sector
                </p>
              <h4>
                We offer a variety of solutions for vaccines, plasma,<br /> and blood storage. And equipment manufactured <br />to reach low and ultra-low temperatures. 
              </h4>
              <Link to="/request-a-quote" className="btn sm-butn border text-white radius-9 mt-30 hover-darkBlue">
                <span>Request a Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/header/header_2.png" alt="Endro Scientific iceberg" className="head_shape2 wave" />
    </header>
  )
}

export default Header
