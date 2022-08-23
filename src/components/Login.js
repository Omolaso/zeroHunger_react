import React, {useState} from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const SignUp = () => {
    navigate('/Signup');
  }
  const Home = (e) => {
    e.preventDefault();
    navigate('/Home');
  }

  return (
    <div className='login'>
        <div className='formDiv'>
          <form onSubmit={Home}>
              <h1>Sign In</h1>
              <label htmlFor="email" id='name'> Email: </label>
              <input 
                type="email" 
                value={email} 
                placeholder='Enter your email' 
                onChange={(e) => setEmail(e.target.value)}
                required
                />

              <label htmlFor="password" id='name'> Password: </label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Enter your password'
                required
                />
              <br />
              <br />
              <div id='btn'>
                <button>Sign In</button>
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