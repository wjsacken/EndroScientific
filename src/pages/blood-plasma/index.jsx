import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "common/navbarScrollEffect";
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import Navbar from 'components/Navbars/ITNav';
import Details from 'components/Style2/bloodPlasma/Details';
import Contact from 'components/Style2/bloodPlasma/Contact';
import Footer from 'components/IT/Footer';

const PageServiceDetails = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <MainLayout>
      <Navbar className="dark"/>
      <main className="services-details-page style-5">
        <Details />
        <Contact />
      </main>
      <Footer noWave />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Blood & Plasma</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default PageServiceDetails;