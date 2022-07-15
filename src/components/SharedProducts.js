import React, { useEffect, useState } from 'react';
import '../styles/SharedProducts.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const SharedProducts = () => {
  const { productsId } = useParams();
  const navigate = useNavigate();
  const [produce, setProduce] = useState([]);
 
  function getProduct(){
    axios.get('https://zerohunger-backend.herokuapp.com/api/products/' + productsId)
    .then((res) => {
      console.log( res.data);
      setProduce(res.data.product)
    });
  }

  useEffect(() => {
    getProduct()
  })

  function goToProducts(){
    navigate('/Home');
  }

  return (
    <section className='productSection'>
     <div className='shared_products'>
        <div id='productImg'>
          <img src={produce.product_img} alt={produce.name} />
        </div>
        <div id='productDetails'>
          {/* <h1> {productsId} </h1> */}
          <h1> {produce.name} </h1>
          <h3> Current Price: ₦ {produce.price} </h3>
          <h3>About the product:</h3>
          <p id='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero unde voluptatem alias, quam dolore ipsa! Quaerat, quas.</p>
          <div className='cart'>
            <button> - </button>
            <span id='cart'>Add to cart</span>
            <button> + </button> <br /> <br />
          </div>
          <button onClick={goToProducts}>Back Home</button>
        </div>
      </div>
    </section>
  )
}

export default SharedProducts