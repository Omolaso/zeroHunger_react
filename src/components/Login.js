import React from 'react';
import '../styles/Login.css';

const Login = () => {
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
              {/* <input type="button" value="Sign in" /> */}
          </form>
        </div>
    </div>
  )
}

export default Login