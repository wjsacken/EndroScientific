import React, { useEffect, useRef } from 'react';
import {graphql} from 'gatsby';
import PropTypes from 'prop-types';
import navbarScrollEffect from "common/navbarScrollEffect";
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import Navbar from 'components/Navbars/ITNav';
import AllNews from 'components/SinglePost/AllNews';
import PopularPosts from 'components/SinglePost/PopularPosts';
import Footer from 'components/IT/Footer';

const PageSinglePostApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <MainLayout>
      <Navbar navbarRef={navbarRef} />
      <main className="blog-page style-5 color-4">
        <AllNews />
        <PopularPosts />
      </main>
      <Footer noWave />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - Single Post App</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default PageSinglePostApp;