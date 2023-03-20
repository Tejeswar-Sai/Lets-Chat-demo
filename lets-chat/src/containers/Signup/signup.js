import React,{ useState } from 'react';
import Layout from '../../components/Layout/layout';
import { signup } from '../../actions/auth.actions';
import { useDispatch } from 'react-redux';

const Signup = (props)  => {

  const [firstname,setFirstName] = useState('');
  const [lastname,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const signUpUser = (e) => {
    e.preventDefault();
    const user = {firstname,lastname,email,password}
    dispatch(signup(user))
  }

  return (
    <Layout>
     <form onSubmit={signUpUser}>
        <h1>Sign Up</h1>
        <input 
          id='firstName'
          name='firstname'
          type='text'
          value={firstname}
          placeholder="First Name" />
        <input 
          id='lastName'
          name='lastname'
          type='text'
          value={lastname}
          placeholder="Last Name" />
        <input 
          id='email'
          name='email'
          type='text'
          value={email}
          placeholder="Email" />
        <input 
          id='password'
          name='pasword'
          type='password'
          value={password}
          placeholder="Password" />
        <input 
          id='confirmPasword'
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          placeholder="Confirm Password" />
        <button
          id='submitSignUp'
          name='submit'>
            Sign Up
          </button>        
     </form>
    </Layout>
  )
}

export default Signup;