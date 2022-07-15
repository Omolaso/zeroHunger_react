import React from 'react';
import Products from './Products';
import '../styles/Home.css';


const Home = () => {

  return (
    <div>
      <h3 className='product_available'>Available Products</h3>
      <Products/>
    </div>
  )
}

export default Home