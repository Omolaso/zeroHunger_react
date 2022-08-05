import React from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const SignUp = () => {
    navigate('/Signup');
  }

  return (
    <div className='login'>
        <div className='formDiv'>
          <form>
              <h1>Sign In</h1>
              <label htmlFor="email" id='name'> Email: </label>
              <input type="email" placeholder='Enter your email'/>

              <label htmlFor="password" id='name'> Password: </label>
              <input type="password" placeholder='Enter your password'/>
              <br />
              <br />
              <div id='btn'>
                <button >Sign In</button>
              </div>
              <div id='btn'>
                <p>Don't have an account? <button onClick={SignUp}>Sign up</button> </p>
              </div>
          </form>
        </div>
    </div>
  )
}

export default Login