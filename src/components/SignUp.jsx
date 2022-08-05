import React from 'react';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();
    const login = () => {
      navigate('/Login');
    }

  return (
    <div className='signup'>
        <div className='formDiv'>
          <form>
              <h1>Sign Up</h1>
              <label htmlFor="email" id='name'> Email: </label>
              <input type="email" placeholder='Enter your email'/>

              <label htmlFor="password" id='name'> Password: </label>
              <input type="password" placeholder='Enter your password'/>
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
