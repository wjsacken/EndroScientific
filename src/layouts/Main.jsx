//= React
import React from 'react';
import { Script } from "gatsby";
//= Components
import PreLoader from "components/PreLoader";
import ScrollToTop from "components/ScrollToTop";

//= Global CSS
import "styles/globals.css";
import "styles/preloader.css";

const MainLayout = ({ children, scrollTopText }) => {
  return (
    <>
      <PreLoader />
      { children }
      <ScrollToTop topText={scrollTopText} />

      <Script src="/assets/js/main.js"></Script>
    </>
  );
};

export default MainLayout;
