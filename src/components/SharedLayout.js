import React from 'react';
import { Outlet } from 'react-router-dom';
import NavLinks from './NavLinks';
import Footer from './Footer';

const SharedLayout = () => {
  return (
    <div className='shared-layout'>
      <NavLinks/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default SharedLayout
