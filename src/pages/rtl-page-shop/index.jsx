import React, { useEffect } from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import NavbarRTL from 'components/Navbars/StartupNav/RTLNav';
import Shop from 'components/Shop';
import Footer from 'components/Startup/Footer';
//= Scripts
import { fixRtlStylesheetsOrder } from 'common/fixStylesheetsOrder';

const RTLPageShop = () => {
  useEffect(() => {
    fixRtlStylesheetsOrder();
  }, []);

  return (
    <MainLayout>
      <NavbarRTL whiteNotRounded />
      <main className="shop-page style-5">
        <Shop style="5" rtl />
      </main>
      <Footer rtl />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - المتجر</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.rtl.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      <link rel="stylesheet" href="/assets/css/rtl_style.css" />
    </>
  )
}

export default RTLPageShop;