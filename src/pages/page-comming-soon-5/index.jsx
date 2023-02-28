import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "common/navbarScrollEffect";
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import AbsoluteContainer from 'components/Navbars/AbsoluteContainer';
import TopNav from 'components/Navbars/TopNav';
import Navbar from 'components/Navbars/SaasNav';
import CommingSoon from 'components/Style2/CommingSoon';

const PageCommingSoon = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <MainLayout>
      <AbsoluteContainer>
        <TopNav style="5" />
        <Navbar navbarRef={navbarRef} />
      </AbsoluteContainer>
      <main className="comming-soon-page style-5">
        <CommingSoon />
      </main>
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - Comming Soon</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default PageCommingSoon;