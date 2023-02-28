import React, { useEffect } from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import NavbarRTL from 'components/Navbars/StartupNav/RTLNav';
import Product from 'components/Product';
import ProductDetails from 'components/ProductDetails';
import RelatedProducts from 'components/RelatedProducts';
import Footer from 'components/Startup/Footer';
//= Scripts
import { fixRtlStylesheetsOrder } from 'common/fixStylesheetsOrder';

const RTLPageProduct = () => {
  useEffect(() => {
    fixRtlStylesheetsOrder();
  }, []);

  return (
    <MainLayout>
      <NavbarRTL whiteNotRounded />
      <main className="product-page style-5">
        <Product rtl style="5" />
        <ProductDetails rtl style="5" />
        <RelatedProducts rtl style="5" />
      </main>
      <Footer rtl />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - المنتج</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.rtl.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      <link rel="stylesheet" href="/assets/css/rtl_style.css" />
    </>
  )
}

export default RTLPageProduct;