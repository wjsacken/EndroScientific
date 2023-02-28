import React from 'react';
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import TopNav from 'components/Navbars/TopNav-7';
import SideMenu from 'components/ITCreative/SideMenu';
import Navbar from 'components/Navbars/ITCreativeNav';
import Header from 'components/ITCreative/Header';
import Features from 'components/ITCreative/Features';
import About from 'components/ITCreative/About';
import Services from 'components/ITCreative/Services';
import Projects from 'components/ITCreative/Projects';
import Testimonials from 'components/ITCreative/Testimonials';
import ChooseUs from 'components/ITCreative/ChooseUs';
import Blog from 'components/ITCreative/Blog';
import ChatBanner from 'components/ITCreative/ChatBanner';
import Footer from 'components/ITCreative/Footer';

const HomeItSolutions2 = () => {
  return (
    <MainLayout>
      <TopNav />
      <SideMenu />
      <Navbar />
      <Header />
      <main>
        <Features />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <ChooseUs />
        <Blog />
        <ChatBanner />
      </main>
      <Footer />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - Creative It Solutions</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default HomeItSolutions2;