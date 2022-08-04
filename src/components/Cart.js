import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, removeItem } from '../redux-slice/CartSlice'
import '../styles/cart.css';
import uuid from 'react-uuid';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clear = ()=> {
    dispatch(clearCart());
  }
  const remove = ()=> {
    dispatch(removeItem());
  }

  const { cartAmount } = useSelector((store) => store.cart);
  // console.log(cartAmount);

  if(cartAmount.length < 1){
    return(
      <h1 className='empty-cart'>Your cart is empty</h1>
    )
  }

  const totalAmount = `${cartAmount.reduce((total, item) =>  total + item.price, 0)}` // 'item from the cartAmount array'

  //back home

  function goToProducts(){
    navigate('/Home');
  }

    //back home


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
                 <button onClick={remove} className='remove-item'>Remove item</button>
              </div>
            ))
          }
        </section>
        
        <footer>
          <div className='total'>
            <h2>Total: ₦ {totalAmount}</h2>
          </div>

          <div className='clear'>
            <button className='clear-cart' onClick={clear}>Clear Cart</button>
            <button className='home' onClick={goToProducts}>Back to Products</button>
          </div>

          <div className='checkout-div'>
            <button className='checkout'>Check Out</button>
          </div>
        </footer>
        
    </div>
  )
}

export default Cart