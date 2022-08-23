import React from 'react';
import Smiley from '../images/Smiley.png';
import '../App.css'

const Dummy = () => {
  return (
    <div className='App'>
        <h1>Thank you for checking out our dummy website</h1>
        <img src={Smiley} alt="Smiley"/>
    </div>
  )
}

export default Dummy