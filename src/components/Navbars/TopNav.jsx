import React from 'react';
import { Link } from 'gatsby';

const TopNav = ({ style, rtl }) => {
  return (
    <div className={`top-navbar style-${style}`}>
      <div className="container">
        <div className="content text-white">
          <span className="btn sm-butn bg-white py-0 px-2 me-2 fs-10px">
            <small className="fs-10px">{rtl ? 'عرض خاص':'Special'}</small>
          </span>
          <img src="/assets/img/icons/nav_icon/imoj_heart.png" alt="" className="icon-15 me-1" />
          <span className="fs-10px op-6 me-1">{ rtl ? 'احصل على' : 'Get'} </span>
          <small className="op-10 fs-10px">{ rtl ? '20% خصم' : '20% Discount' }</small>
          <span className="fs-10px op-6 mx-1">{ rtl ? 'عند الاشتراك' : 'Get for New Account' }</span>
          <Link to="/page-contact-5" className="fs-10px text-decoration-underline ms-2">
            { rtl ? 'اشترك الأن' : 'Register Now' }
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopNav