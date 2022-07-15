import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    function goHome(){
        navigate('/')
    }
  return (
    <div className='error'>
        <h1>Page Not Found</h1>
        <h2>Something went wrong</h2>
        <button id='errorBtn' onClick={goHome}>Back to Homepage</button>
    </div>
  )
}

export default Error