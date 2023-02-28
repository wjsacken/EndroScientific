import React, { useEffect } from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import Header from 'components/Startup/Header';
import About from 'components/Startup/About';
import Services from 'components/Startup/Services';
import Project from 'components/Startup/Project';
import ChooseUs from 'components/Startup/ChooseUs';
import Testimonials from 'components/Startup/Testimonials';
import Clients from 'components/Startup/Clients';
import Numbers from 'components/Startup/Numbers';
import Team from 'components/Startup/Team';
import Blog from 'components/Startup/Blog';
import Contact from 'components/Startup/Contact';
import Footer from 'components/Startup/Footer';
//= Scripts
import { fixRtlStylesheetsOrder } from 'common/fixStylesheetsOrder';

const RTLHomeMarketingStartup = () => {
  useEffect(() => {
    fixRtlStylesheetsOrder();
  }, []);

  return (
    <MainLayout>
      <Header rtl />
      <main>
        <About rtl />
        <Services rtl />
        <Project rtl />
        <ChooseUs rtl />
        <Testimonials rtl />
        <Clients rtl />
        <Numbers rtl />
        <Team rtl />
        <Blog rtl />
        <Contact rtl />
      </main>
      <Footer rtl />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - التسويق الالكترونى</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.rtl.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      <link rel="stylesheet" href="/assets/css/rtl_style.css" />
    </>
  )
}

export default RTLHomeMarketingStartup;