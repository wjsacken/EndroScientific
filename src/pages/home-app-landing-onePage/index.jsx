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

const HomeAppLandingOnePage = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <MainLayout>
      <TopNav style="4" />
      <Navbar navbarRef={navbarRef} />
      <Header />
      <main>
        <Clients />
        <Features />
        <About />
        <Screenshots />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Community />
      </main>
      <Footer />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - App Landing One Page</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default HomeAppLandingOnePage;