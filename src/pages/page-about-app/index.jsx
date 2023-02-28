import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "common/navbarScrollEffect";
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import TopNav from 'components/Navbars/TopNav';
import Navbar from 'components/Navbars/AppNav';
import About from 'components/App/About2';
import Team from 'components/App/Team';
import Culture from 'components/App/Culture';
import Footer from 'components/App/Footer';

const PageAboutApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <MainLayout>
      <TopNav style="4" />
      <Navbar navbarRef={navbarRef} />
      <main className="about-page style-5">
        <About />
        <Team />
        <Culture />
      </main>
      <Footer noWave />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - About App</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default PageAboutApp;