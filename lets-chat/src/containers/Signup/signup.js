import React, { useState } from "react";
import Layout from "../../components/Layout/layout";
import { signup } from "../../actions/auth.actions";
import { useDispatch } from "react-redux";
import "../style.css";

const Signup = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const signUpUser = (e) => {
    e.preventDefault();
    const user = { firstname, lastname, email, password };
    console.log(user);
    dispatch(signup(user));
  };

  const resetForm = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <Layout>
      <form className="signup-form">
        <div className="form-container">
          <div className="form-header">
            <h3>Sign Up</h3>
          </div>
          <input
            id="firstName"
            name="firstname"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
            placeholder="First Name"
          />
          <input
            id="lastName"
            name="lastname"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
            placeholder="Last Name"
          />
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
          <input
            id="confirmPasword"
            name="confirmPassword"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder="Confirm Password"
          />
          <div className="form-button">
            <button id="reset" onClick={(e) => resetForm(e)} name="resetForm" type="button"> 
              Reset
            </button>
            <button id="submitSignUp" name="submit" type="submit" onClick={signUpUser}>
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Signup;
