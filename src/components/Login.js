import React from 'react';
import '../styles/Login.css';

const Login = () => {
  return (
    <div className='login'>
        <form>
            <h1>Login</h1>
            <label htmlFor="name"> Name: </label> <br />
            <input type="text" /> <br />
            <label htmlFor="password"> Password: </label> <br />
            <input type="password" /> <br />
            <input type="button" value="Sign in" />
        </form>
    </div>
  )
}

export default Login