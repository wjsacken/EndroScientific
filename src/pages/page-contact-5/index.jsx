import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "common/navbarScrollEffect";
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import Navbar from 'components/Navbars/ITNav';
import Header from 'components/IT/Header';
import Form from 'components/Contact/Form';
import Map from 'components/Contact/Map';
import Footer from 'components/IT/Footer';

const PageContact5 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <MainLayout>
      <Navbar />
      <Header />
      <main className="contact-page style-5">
        <Form style="5" />
        <Map />
      </main>
      <Footer />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - Contact Us</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default PageContact5;
