// import {useEffect} from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { removeSideBar } from '../redux-slice/HamburgerSlice';
import '../styles/Sidebar.css'

const SideBar = () => {
    const dispatch = useDispatch();
    const {isHamActive} = useSelector((state) => state.hamburger);

    // useEffect(() => {
    //     function removeSide() {
    //       dispatch(removeSideBar())
    //     }
    
    //     window.addEventListener('resize', removeSide);
    //     window.addEventListener('scroll', removeSide);
    //   })

      function removeSide() {
        dispatch(removeSideBar())
      }
  
      window.addEventListener('resize', removeSide);
      window.addEventListener('scroll', removeSide);
  
    return (
        <ul onClick={removeSide} className={`sidebar ${isHamActive ? "show-sidebar" : ""}`}>
            <li><Link to='/Home' id='link'>Home</Link></li>
            <li><Link to='/About' id='link'>About</Link> </li>
            <li><Link to='/Contact' id='link'>Contact Us</Link></li>
        </ul>
    )
}

export default SideBar;