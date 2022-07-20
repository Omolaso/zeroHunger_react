import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faLemon } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../styles/NavLink.css';


const NavLinks = () => {
  const navigate = useNavigate();
  const Login = () => {
    navigate('/Login');
  }
  const Cart = () => {
    navigate('/Cart');
  }

  //HAMBURGER
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classlist.toggle("list")
  }

  return (
    <section className='links'>
       <div className='mini'>
          <div className='logo'>
            <Link to='/' id='link'><FontAwesomeIcon id='faLemon' icon={faLemon}/> ZeroHunger</Link>
          </div>
          <div className='hambuger' onClick={ showNavBar }> <FontAwesomeIcon id='bars' icon={faBars}/> </div>
       </div>
        <div className='navbar' ref={navRef}>
          <ul className='nav1'>
            <li><Link to='/Home' id='link'>Home</Link></li>
            <li><Link to='/About' id='link'>About</Link> </li>
            <li><Link to='/Contact' id='link'>Contact Us</Link></li>
          </ul>
          <ul className='nav2'>
            <li> <input type="text" placeholder='Search' id='input' /> </li>
            <li> <FontAwesomeIcon id='cart' onClick={Cart} icon={ faCartShopping } /> </li>
            <li> <button onClick={Login}>Login</button> </li>
            {/* <li> <button>Sign Up</button> </li> */}
          </ul>
        </div>
    </section>
  )
}


export default NavLinks