import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "common/navbarScrollEffect";
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import Navbar from 'components/Navbars/ITNav';
import Shop from 'components/Shop';
import Footer from 'components/IT/Footer';

const PageShop5 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <MainLayout>
      <Navbar className="dark"/>
      <main className="shop-page style-5">
        <Shop style="3" />
      </main>
      <Footer noWave />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Products - Endrosci</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default PageShop5;