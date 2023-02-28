import React, { useEffect } from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import NavbarRTL from 'components/Navbars/StartupNav/RTLNav';
import Form from 'components/Contact/Form';
import Map from 'components/Contact/Map';
import Footer from 'components/Startup/Footer';
//= Scripts
import { fixRtlStylesheetsOrder } from 'common/fixStylesheetsOrder';

const RTLPageContact = () => {
  useEffect(() => {
    fixRtlStylesheetsOrder();
  }, []);

  return (
    <MainLayout>
      <NavbarRTL whiteNotRounded />
      <main className="contact-page style-5">
        <Form style="5" rtl />
        <Map />
      </main>
      <Footer rtl />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - اتصل بنا</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.rtl.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      <link rel="stylesheet" href="/assets/css/rtl_style.css" />
    </>
  )
}

export default RTLPageContact;