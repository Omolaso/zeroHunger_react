import React, {useState} from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      
      password: Yup.string()
      .required('Password is required')
      .min(8, 'Password is too short. Minimum of 8 characters.')
      .max(10, 'Password must be at most 10 characters')
      .matches( /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 
        'Password must contain at least one number, one uppercase, one lowercase letter and a dynamic symbol.'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
                id='email'
                name='email'
                value={email} 
                placeholder='Enter your email' 
                onChange={(e) => setEmail(e.target.value)}
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}


              <label htmlFor="password" id='name'> Password: </label>
              <input 
                type="password" 
                id='password'
                name='password'
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Enter your password'
                {...formik.getFieldProps('password')}
                />
              {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}

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