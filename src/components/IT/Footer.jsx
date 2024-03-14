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
          <div className="col-lg-6">
            <div className="socail-icons">
              <ul className="col-lg-6 float-start">
                <li><a href="https://drive.google.com/file/d/1VuvYz3OiyJncUd3adNIR8S8vj-iv4tBJ/view?usp=drive_link">Privacy Policy</a></li>
                <li><a href="/privacy-policy/">Privacy Policy</a></li>
                <li><a href="/receipt-of-goods/">Receipt of Goods</a></li>
                <li><a href="/refund-policy/">Refund Policy</a></li>
                <li><a href="/return-policy/">Return Policy</a></li>
              </ul>
              <ul className="col-lg-6 float-end">
                <li><a href="/shipping-policy/">Shipping Policy</a></li>
                <li><a href="/terms-of-service/">Terms of Service</a></li>
                <li><a href="/freight-damage/">Freight Damage</a></li>
                <li><a href="/warranty/">Warranty</a></li>
              </ul>
            </div>
          </div>
          <div className="small">
              <span className="op-6">© 2023 Copyrights by </span>
              <a href="#" className="mx-1">Endro Scientific</a>
              <span className="op-6"> All Rights Reserved.</span>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
