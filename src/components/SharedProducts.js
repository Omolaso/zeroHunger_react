import React, { useEffect, useState } from 'react';
import '../styles/SharedProducts.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import icon from '../images/icon.svg'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux-slice/CartSlice'


const SharedProducts = () => {
    // REDUX
    const { quantity } = useSelector((store) => store.cart)
    const dispatch = useDispatch();

    const increase = () => dispatch(increment());
    const decrease = () => {
      if(quantity === 0){

      }else{
        dispatch(decrement())
      }
    };

    // REDUX ENDS

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
    getProduct()
  });

  const { name, product_img, price } = produce

  function goToProducts(){
    navigate('/Home');
  }


  if(produce.length === 0){
    return(
      <div className='imgDiv'>
        <img className='wait' src= { icon } alt="Loading..." />
        <h2>Loading...</h2>
    </div>
    )
  }



  return (
    <section className='productSection'>
     <div className='shared_products'>
        <div id='productImg'>
          <img src={ product_img } alt={ name } />
        </div>
        <div id='productDetails'>
          {/* <h1> {productsId} </h1> */}
          <h1> { name } </h1>
          <h3> Current Price: ₦ { price } </h3>
          <h3>About the product:</h3>
          <p id='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero unde voluptatem alias, quam dolore ipsa! Quaerat, quas.</p>
          <div id='back-home'>

          <div className='add-to-cart'>
            <h4>Add to cart</h4>
            <button onClick={decrease}> - </button>
            <span id='cart'>{quantity}</span>
            <button onClick={increase}> + </button><br />

          </div>
          <br />
          <button onClick={goToProducts}>Back To Products</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SharedProducts