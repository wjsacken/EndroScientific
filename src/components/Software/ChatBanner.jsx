import React from 'react';
import { Link } from 'gatsby';

const ChatBanner = () => {
  return (
    <section className="chat-banner style-3 section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="info">
              <h3>Assess Your Business Potentials Now & Find Opportunities For <span>Bigger Success</span></h3>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="bttns text-end">
              <Link to="/page-contact-5" className="btn rounded-pill bg-white border-1 border-white text-dark sm-butn me-2">
                <span>Let’s Chat</span>
              </Link>
              <Link to="/page-contact-5" className="btn rounded-pill border-1 border-white text-white sm-butn">
                <span>Get Information</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatBanner