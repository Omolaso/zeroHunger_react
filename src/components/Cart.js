import React, { useEffect } from 'react';
// import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { calculateTotal, clearCart } from '../redux-slice/CartSlice'
import '../styles/cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clear = ()=> {
    dispatch(clearCart());
  }

  function goToProducts(){
    navigate('/Home');
  }

  const { cartItems, amount, total } = useSelector((store) => store.cart);

    // REDUX

    useEffect(() => {
      dispatch(calculateTotal())
    }, [cartItems, dispatch]);

    // REDUX

  if(amount < 1){
    return(
      <h1 className='empty-cart'>Your cart is empty</h1>
    )
  }

  return (
    <div>
        <h1>Your Items</h1>
        <section>
          {/* {
            cartItems.map((item) => (
              <CartItem key={item.id} {...item}/>
            ))
          } */}
        </section>
        <footer>
          <hr />
          <div className='total'>
            <h2>Total: ₦{total}</h2>
          </div>
        </footer>
        <hr />
        <button className='clear-cart' onClick={clear}>Clear Cart</button>
        <button className='home' onClick={goToProducts}>Go Home</button>
    </div>
  )
}

export default Cart