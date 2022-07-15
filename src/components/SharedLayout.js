import React from 'react';
import { Outlet } from 'react-router-dom';
import NavLinks from './NavLinks';
import Footer from './Footer';

const SharedLayout = () => {
  return (
    <div>
      <NavLinks/>
      <section>
        <Outlet/>
      </section>
      <Footer/>
    </div>
  )
}

export default SharedLayout
