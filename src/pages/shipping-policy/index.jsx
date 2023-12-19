import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "common/navbarScrollEffect";
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import Navbar from 'components/Navbars/ITNav';
import Header from 'components/IT/Shipping';
import About from 'components/Style2/About/About';
import Footer from 'components/Saas/Footer';

const PageAbout2 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <MainLayout>
      <Navbar navbarRef={navbarRef} />
      <Header page="Shipping" title="Shipping Policy" />
      <main className="about-page style-2">
        <About />
      </main>
      <Footer noWave />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Shipping Policy - EndroSci</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default PageAbout2;