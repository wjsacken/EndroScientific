import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import projectData from 'data/Startup/project.json';
import projectDataRTL from 'data/Startup/project-rtl.json';

import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Autoplay, Navigation]);

const Project = ({ rtl }) => {
  const [load, setLoad] = useState(false);
  const data = rtl ? projectDataRTL : projectData;

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <section className="projects style-6" data-scroll-index="3">
      <div className="content section-padding">
        <div className="container">
          <div className="section-head mb-40 d-flex justify-content-between align-items-center style-6">
            {
              rtl ? 
              <h2 className="mb-20">اخر <span> <small>المشاريع</small> </span></h2> 
              :
              <h2 className="mb-20">Features <span><small>Projects</small></span></h2>
            }
            {
              rtl ?
                <Link to="rtl-page-portfolio" className="small text-decoration-underline text-uppercase">
                  مشاهدة جميع المشاريع
                </Link>
                :
                <Link to="/page-portfolio-5" className="small text-decoration-underline text-uppercase">
                  See All Projects
                </Link>
            }
          </div>
          <div className="slider-3items slider-style-6">
            {
              load &&
              <Swiper
                className="swiper-container pb-70"
                dir={rtl ? 'rtl' : 'ltr'}
                slidesPerView={3}
                spaceBetween={0}
                speed={1000}
                pagination={{
                  el: ".slider-3items .swiper-pagination",
                  clickable: true
                }}
                navigation={{
                  nextEl: '.slider-3items .swiper-button-next',
                  prevEl: '.slider-3items .swiper-button-prev'
                }}
                mousewheel={false}
                keyboard={true}
                autoplay={{
                  delay: 4000
                }}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1
                  },
                  480: {
                    slidesPerView: 1
                  },
                  787: {
                    slidesPerView: 2
                  },
                  991: {
                    slidesPerView: 2
                  },
                  1200: {
                    slidesPerView: 3
                  }
                }}
              >
                {
                  data.map((project, index) => (
                    <SwiperSlide key={index}>
                      <div className="project-card style-6">
                        <div className="img">
                          <img src={project.image} alt="" />
                        </div>
                        <div className="info">
                          <h3 className="title">
                            {
                              rtl ?
                              <Link to="/rtl-page-single-project">{ project.title }</Link>
                                :
                              <Link to="/page-single-project-5">{ project.title }</Link>
                            }
                          </h3>
                          <small className="color-blue6">
                            {
                              project.type.map((type, i) => (
                                <span key={i}>
                                  <a href="#">{ type }</a>
                                  { i !== project.type.length - 1 && <> &&nbsp;</> }
                                </span>
                              ))
                            }
                          </small>
                          <div className="text">
                            { project.text }
                          </div>
                          <div className="tags">
                            {
                              project.tags.map((tag, i) => (
                                <span key={i} className="me-1">
                                  <a href="#">{ tag }</a>
                                </span>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            }
            <div className="swiper-pagination"></div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project