import React from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import TopNav from 'components/Navbars/DigitalNav/TopNav';
import Navbar from 'components/Navbars/DigitalNav';
import Header from 'components/Digital/Header';
import About from 'components/Digital/About';
import Services from 'components/Digital/Services';
import ChooseUs from 'components/Digital/ChooseUs';
import Portfolio from 'components/Digital/Portfolio';
import Testimonials from 'components/Digital/Testimonials';
import Team from 'components/Digital/Team';
import Blog from 'components/Digital/Blog';
import Contact from 'components/Digital/Contact';
import Footer from 'components/Digital/Footer';

const HomeDigitalAgency = () => {
  return (
    <MainLayout scrollTopText>
      <TopNav />
      <Navbar />
      <Header />
      <main>
        <About />
        <Services />
        <ChooseUs />
        <Portfolio />
        <Testimonials />
        <Team />
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
      <title>Iteck - Digital Agency</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default HomeDigitalAgency;