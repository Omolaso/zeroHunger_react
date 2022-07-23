import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faLemon } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../styles/NavLink.css';
import { useSelector } from 'react-redux';



const NavLinks = () => {
  //REDUX
   const { amount } = useSelector((store) => store.cart)
  
  //REDUX ENDS
  const navigate = useNavigate();
  const Login = () => {
    navigate('/Login');
  }
  const Cart = () => {
    navigate('/Cart');
  }

  return (
    <section className='links'>
       <div className='mini'>
          <div className='logo'>
            <Link to='/' id='link'><FontAwesomeIcon id='faLemon' icon={faLemon}/> ZeroHunger</Link>
          </div>
          <div className='hambuger' > <FontAwesomeIcon id='bars' icon={faBars}/> </div>
       </div>
        <div className='navbar'>
          <ul className='nav1'>
            <li><Link to='/Home' id='link'>Home</Link></li>
            <li><Link to='/About' id='link'>About</Link> </li>
            <li><Link to='/Contact' id='link'>Contact Us</Link></li>
          </ul>
          <ul className='nav2'>
            <li> <input type="text" placeholder='Search' id='input' /> </li>


            <li> <FontAwesomeIcon id='cart' onClick={Cart} icon={ faCartShopping } />
                  <span id='cart-items-amount'> { amount } </span>
            </li>


            <li> <button onClick={Login}>Login</button> </li>
            {/* <li> <button>Sign Up</button> </li> */}
          </ul>
        </div>
    </section>
  )
}


export default NavLinks