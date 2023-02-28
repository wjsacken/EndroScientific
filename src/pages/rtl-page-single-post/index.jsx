import React, { useEffect } from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import NavbarRTL from 'components/Navbars/StartupNav/RTLNav';
import AllNews from 'components/SinglePost/AllNews';
import PopularPosts from 'components/SinglePost/PopularPosts';
import Footer from 'components/Startup/Footer';
//= Scripts
import { fixRtlStylesheetsOrder } from 'common/fixStylesheetsOrder';

const RTLPageSinglePost = () => {
  useEffect(() => {
    fixRtlStylesheetsOrder();
  }, []);

  return (
    <MainLayout>
      <NavbarRTL whiteNotRounded />
      <main className="blog-page style-5">
        <AllNews style="5" rtl />
        <PopularPosts style="5" rtl />
      </main>
      <Footer rtl />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - تفاصيل الخبر</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.rtl.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      <link rel="stylesheet" href="/assets/css/rtl_style.css" />
    </>
  )
}

export default RTLPageSinglePost;