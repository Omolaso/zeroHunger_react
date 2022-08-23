import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const navigate = useNavigate();
  const login = () => {
    navigate('/Login');
  }

  function Submit(e){
    e.preventDefault();
    window.localStorage.setItem('Email', `${JSON.stringify(email)}`);
    window.localStorage.setItem('Password', `${JSON.stringify(password)}`);
    window.location.reload();
    setEmail('');
    setPassword('');
    alert('Your details are now stored in your browser local storage')
  }

  return (
    <div className='signup'>
        <div className='formDiv'>
          <form onSubmit={Submit}>
              <h1>Sign Up</h1>
              <label htmlFor="email" id='name'> Email: </label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required/>

              <label htmlFor="password" id='name'> Password: </label>
              <input type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Enter your password'
                required
                />

              <br />
              <br />
              <div id='btn'>
                <button >Sign Up</button>
              </div>
              <div id='btn'>
                <p>Already have an account? <button onClick={login}>Sign in</button> </p>
              </div>
          </form>
        </div>
    </div>
  )
}

export default SignUp
