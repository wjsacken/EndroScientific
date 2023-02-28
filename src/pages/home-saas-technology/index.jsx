import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "common/navbarScrollEffect";
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import TopNav from 'components/Navbars/TopNav';
import Navbar from 'components/Navbars/SaasNav';
import Header from 'components/Saas/Header';
import Community from 'components/Saas/Community';
import About from 'components/Saas/About';
import Clients from 'components/Saas/Clients';
import Features from 'components/Saas/Features';
import Pricing from 'components/Saas/Pricing';
import Testimonials from 'components/Saas/Testimonials';
import Download from 'components/Saas/Download';
import Footer from 'components/Saas/Footer';

const HomeSaasTechnology = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <MainLayout>
      <TopNav style="5" />
      <Navbar navbarRef={navbarRef} />
      <Header />
      <main>
        <Community />
        <About />
        <Clients />
        <Features />
        <Pricing />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - Saas Technology</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default HomeSaasTechnology;