import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "common/navbarScrollEffect";
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import AbsoluteContainer from 'components/Navbars/AbsoluteContainer';
import Navbar from 'components/Navbars/ITNav';
import NotFound from 'components/404';;

const Page404 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <MainLayout>
      <AbsoluteContainer>
        <Navbar navbarRef={navbarRef} />
      </AbsoluteContainer>
      <main className="erorr-404-page style-5">
        <NotFound />
      </main>
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - 404</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default Page404;