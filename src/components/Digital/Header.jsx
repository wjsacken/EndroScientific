import React, { useState } from 'react';
import { Link } from 'gatsby';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <header className="section-padding style-1" data-scroll-index="1">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-6">
              <div className="info">
                <div className="section-head mb-60">
                  <h6 className="color-main text-uppercase">Blood & Plasma</h6>
                  <h2>
                    Refrigeration <span className="fw-normal">Solutions</span>
                  </h2>
                </div>
                <div className="text">
                Endro Scientific provides efficient, EnergyStar-rated blood bank refrigerators and freezers equipped with robust interior drawers to meet the most stringent requirements of blood banks. Each unit features durable, adjustable compartments with stainless steel and plexiglass drawers, and Endro Scientific's groundbreaking Monoblock cooling technology. In case of a system malfunction, the Endro Scientific Monoblock can be swiftly replaced in 20 minutes or less. This capability is of paramount importance when safeguarding highly valuable blood bank products.
                </div>
                <div className="bttns mt-5">
                  <Link to="/page-services-5" className="btn btn-dark">
                    <span>our services</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="img">
                <img src="/assets/img/header/head.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/header/head_shape_r.png" alt="" className="head-shape-r wow" />
      <img src="/assets/img/header/head_shape_l.png" alt="" className="head-shape-l wow" />
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="pGbIOC83-So"
              onClose={() => setOpen(false)}
            />
          )
      }
    </header>
  )
}

export default Header