import React, { useEffect, useState } from 'react';
import '../styles/SharedProducts.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import icon from '../images/icon.svg'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux-slice/CartSlice'
// import uuid from 'react-uuid';



const SharedProducts = () => {
    // REDUX

    const { cartAmount } = useSelector((store) => store.cart)
    const dispatch = useDispatch();

    const increase = ( name, price ) => {
      const productObj = { name, price }
      dispatch(increment(productObj))
    };
   
    const decrease = (name, price) => {
      const productObj = { name, price }
      dispatch(decrement(productObj))
    };

    // REDUX ENDS

    //ROUTER

  const { productsId } = useParams();
  const navigate = useNavigate();
  const [produce, setProduce] = useState([]);
 
  function getProduct(){
    axios.get('https://zerohunger-backend.herokuapp.com/api/products/' + productsId)
    .then((res) => {
      // console.log(res.data);
      setProduce(res.data.product)
    });
  }

  useEffect(() => {
    getProduct()    //Calling the function
  });

  const { name, product_img, price } = produce  //from useState


  // back home
  function goToProducts(){
    navigate('/Home');
  }

  //animation
  if(produce.length === 0){
    return(
      <div className='imgDiv'>
        <img className='wait' src= { icon } alt="Loading..." />
        <h2>Loading...</h2>
    </div>
    )
  }

  //JSX
  return (
    <section className='productSection'>
     <div className='shared_products'>
        <div id='productImg'>
          <img src={ product_img } alt={ name } />
        </div>
        <div id='productDetails'>
          <h1> { name } </h1>
          <h3> Current Price: ₦ { price } </h3>
          <h3>About the product:</h3>
          <p id='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero unde voluptatem alias, quam dolore ipsa! Quaerat, quas.</p>
          
          <div id='back-home'>
            <div className='add-to-cart'>
              <h4>Add to cart</h4>
              <button className='decrease' onClick={() => decrease(name, price)}> - </button>
              <span id='cart'>{cartAmount.filter((item) => item.name === name).length}</span>
              <button className='increase' onClick={() => increase(name, price)}> + </button>
            </div>
            <br />
            <button className='back' onClick={goToProducts}>Back To Products</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SharedProducts