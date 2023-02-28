import React, { useEffect } from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import NavbarRTL from 'components/Navbars/StartupNav/RTLNav';
import About from 'components/SingleProject/About';
import Challenge from 'components/SingleProject/Challenge';
import Screenshots from 'components/App/Screenshots';
import About2 from 'components/SingleProject/About2';
import Projects from 'components/SingleProject/Projects';
import Footer from 'components/Startup/Footer';
//= Scripts
import { fixRtlStylesheetsOrder } from 'common/fixStylesheetsOrder';

const RTLPageSingleProject = () => {
  useEffect(() => {
    fixRtlStylesheetsOrder();
  }, []);

  return (
    <MainLayout>
      <NavbarRTL whiteNotRounded />
      <main className="single-project pt-50 style-5">
        <About style="5" rtl />
        <Challenge style="5" rtl />
        <Screenshots />
        <About2 style="5" rtl />
        <Projects style="5" rtl />
      </main>
      <Footer rtl />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - تفاصيل المشروع</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.rtl.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      <link rel="stylesheet" href="/assets/css/rtl_style.css" />
    </>
  )
}

export default RTLPageSingleProject;