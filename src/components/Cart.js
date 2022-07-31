import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux-slice/CartSlice'
import '../styles/cart.css';
import uuid from 'react-uuid';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clear = ()=> {
    dispatch(clearCart());
  }

  const { cartAmount } = useSelector((store) => store.cart);

  if(cartAmount.length < 1){
    return(
      <h1 className='empty-cart'>Your cart is empty</h1>
    )
  }

  const totalAmount = `${cartAmount.reduce(function (acc, obj) { return acc + obj.price; }, 0)}`

  //back home

  function goToProducts(){
    navigate('/Home');
  }

  return (
    <div className='cart-section'>
        <h2>Your Items</h2>
        <h3> Total amount of selected products: ₦ {totalAmount}</h3>
        <section className='cart-items'>
          {
            cartAmount.map((item) => (
              <div key={uuid()} className='item-list'>
                 <p>{item.name}</p>
                 <p>₦ {item.price}</p>
                 <button className='remove-item'>Remove item</button>
              </div>
            ))
          }
        </section>
        <footer>
          <div className='total'>
            <h2>Total: ₦ {totalAmount}</h2>
          </div>
        </footer>
        <hr />
        <button className='clear-cart' onClick={clear}>Clear Cart</button>
        <button className='home' onClick={goToProducts}>Go Home</button>
    </div>
  )
}

export default Cart