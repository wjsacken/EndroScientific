import React from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import Navbar from 'components/Navbars/ITNav';
import Header from 'components/IT/Header';
import Services from 'components/IT/Services';
import ChooseUs from 'components/IT/ChooseUs';
import Reviews from 'components/IT/Reviews';
import Pricing from 'components/IT/Pricing';
import Blog from 'components/IT/Blog';
import Contact from 'components/IT/Contact';
import Footer from 'components/IT/Footer';

const HomeITSolutions = () => {
  return (
    <MainLayout scrollTopText>
      <Navbar />
      <Header />
      <main>
        <Services />
        <ChooseUs />
        <Reviews />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - IT Solutions</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default HomeITSolutions;