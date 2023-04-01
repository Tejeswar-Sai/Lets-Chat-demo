import React, { useState } from 'react'
import Layout from '../../components/Layout/layout';
import { signin } from "../../actions/auth.actions";
import { useDispatch } from "react-redux";
import "../style.css";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const signInUser = (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);
    dispatch(signin(user));
  };

  const resetForm = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  }

  return (
    <Layout>
      <form className="signin-form">
        <div className="form-container">
          <div className="form-header">
            <h3>Sign In</h3>
          </div>
          <input
            id="email"
            name="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          <input
            id="password"
            name="pasword"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
          <div className="form-button">
            <button id="reset" onClick={(e) => resetForm(e)} name="resetForm" type="button"> 
              Reset
            </button>
            <button id="submitSignIn" name="submit" type="submit" onClick={signInUser}>
              Login
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};
export default Login;