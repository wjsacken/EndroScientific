import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "common/navbarScrollEffect";
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import TopNav from 'components/Navbars/TopNav';
import Navbar from 'components/Navbars/AppNav/OnePageNav';
import Header from 'components/App/Header';
import Clients from 'components/App/Clients';
import Features from 'components/App/Features';
import About from 'components/App/About';
import Screenshots from 'components/App/Screenshots';
import Testimonials from 'components/App/Testimonials';
import Pricing from 'components/App/Pricing';
import FAQ from 'components/App/FAQ';
import Community from 'components/App/Community';
import Footer from 'components/App/Footer';
//= Scripts
import { fixRtlStylesheetsOrder } from 'common/fixStylesheetsOrder';

const HomeAppLandingOnePage = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  useEffect(() => {
    fixRtlStylesheetsOrder();
  }, []);

  return (
    <MainLayout>
      <TopNav style="4" rtl />
      <Navbar navbarRef={navbarRef} rtl />
      <Header rtl />
      <main>
        <Clients rtl />
        <Features rtl />
        <About rtl />
        <Screenshots rtl />
        <Testimonials rtl/>
        <Pricing rtl />
        <FAQ rtl />
        <Community rtl />
      </main>
      <Footer rtl />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - App Landing One Page - RTL</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.rtl.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      <link rel="stylesheet" href="/assets/css/rtl_style.css" />
    </>
  )
}

export default HomeAppLandingOnePage;