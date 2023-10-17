import React from 'react';
import { Link } from 'gatsby';

const Contact = () => {
  return (
    <section className="contact style-2 bg-darkBlue pt-50">
      <div className="container">
        <div className="content text-center text-white">
          <p className="op-7 mb-70 text-uppercase">Give us a call!</p>
          <h2 className="ltspc-20 text-uppercase fs-1 lh-1 mb-50"><a href="tel:704-797-1469">(704) 797 1469</a></h2>
          <h4 className="fw-normal mb-20 op-9"><a href="mailto:brannon@endroscientific.com">brannon@endroscientific.com</a></h4>
          <div className="text-center">
            <Link to="/page-contact-5" className="sm-butn btn border text-white radius-9 hover-lightBlue border-lightBlue m-2">
              <span>Let’s Chat</span>
            </Link>
            <Link to="/page-contact-5" className="sm-butn btn border text-white radius-9 hover-lightBlue border-lightBlue m-2">
              <span>Request Consultation</span>
            </Link>
          </div>
        </div>
      </div>
      <img src="/assets/img/global2.png" alt="" className="global_2" />
    </section>
  )
}

export default Contact