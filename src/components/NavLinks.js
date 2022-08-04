import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faLemon } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../styles/NavLink.css';
import { useSelector, useDispatch } from 'react-redux';
import { handleHamburgerToggle } from '../redux-slice/HamburgerSlice';
import { handleSearchToggle, removeSearchField } from '../redux-slice/SearchSlice';
import SideBar from './SideBar';



const NavLinks = () => {

  //REDUX
  const dispatch = useDispatch();
  const { cartAmount } = useSelector((state) => state.cart);
  const { isSearchActive }  = useSelector((state) => state.search);


  //remove search field when window is resized
  useEffect(() => {
    function removeSearch() {
      dispatch(removeSearchField())
    }
    window.addEventListener('resize', removeSearch);
  });


  //REDUX ENDS


  // ROUTER

  const navigate = useNavigate();
  const Login = () => {
    navigate('/Login');
  }
  const Cart = () => {
    navigate('/Cart');
  }

  // ROUTER ENDS

  return (
    <>
    <nav>
       <div className='logo'>
        <Link to='/' id='link'><FontAwesomeIcon id='faLemon' icon={faLemon}/> ZeroHunger</Link>
      </div>
      <ul className='nav1'>
          <li><Link to='/Home' id='link'>Home</Link></li>
          <li><Link to='/About' id='link'>About</Link></li>
          <li><Link to='/Contact' id='link'>Contact Us</Link></li>
      </ul>
      <ul className='nav2'>
          <li> <input type="text" placeholder='Search' className={`search-field ${isSearchActive ? "show-search-field" : ""}`}/> </li>
          <li onClick={()=>dispatch(handleSearchToggle())}> <FontAwesomeIcon className={`search-icon ${isSearchActive ? "hide-search-icon" : ""}`} icon={faSearch}/> </li>
          
          <div className="cart-container">
            <li> <FontAwesomeIcon id='cart' onClick={Cart} icon={ faCartShopping }/></li>
            <p className="amount">{cartAmount.length}</p>
          </div>
          
          <li> <button onClick={Login}>Login</button> </li>
          <li className='hamburger' onClick={()=>dispatch(handleHamburgerToggle())}> <FontAwesomeIcon id='bars' icon={faBars}/> </li>
       </ul>
    </nav>
    <SideBar />
    </>
  )
}


export default NavLinks