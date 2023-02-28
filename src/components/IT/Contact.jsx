import React from 'react';
import { Link } from 'gatsby';

const Contact = () => {
  return (
    <section className="contact style-2 bg-darkBlue pt-50">
      <div className="container">
        <div className="content text-center text-white">
          <p className="op-7 mb-70 text-uppercase">Let us opportunity to help you!</p>
          <h2 className="ltspc-20 text-uppercase fs-1 lh-1 mb-50">(+23) 5535 68 68</h2>
          <h4 className="fw-normal mb-20 op-9">contact@Itecksolution.com</h4>
          <h4 className="fw-normal mb-30 op-7">58 Howard St, San Francisco, CA 941</h4>
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