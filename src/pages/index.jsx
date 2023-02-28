import React from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import Navbar from 'components/Navbars/ITNav';
import Header from 'components/IT/Header';
import ChooseUs from 'components/IT/ChooseUs';
import Reviews from 'components/IT/Reviews';
import Contact from 'components/IT/Contact';
import Footer from 'components/IT/Footer';

const HomeITSolutions = () => {
  return (
    <MainLayout scrollTopText>
      <Navbar />
      <Header />
      <main>
        <ChooseUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Endro Scientific</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default HomeITSolutions;
