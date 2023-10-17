import React from 'react';

const Footer = () => {
  return (
    <footer className="style-2 pt-80 pb-60 bg-darkBlue border-top brd-light text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="foot_logo">
              <img src="/assets/img/Endro2.svg" alt="Endro Scientific" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="foot_links text-uppercase text-center small">
              
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="socail-icons">
            <div className="small">
              <span className="op-6">© 2023 Copyrights by </span>
              <a href="#" className="mx-1">Endro Scientific</a>
              <span className="op-6"> All Rights Reserved.</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
