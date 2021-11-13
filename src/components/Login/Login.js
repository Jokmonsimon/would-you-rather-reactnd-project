import React, { useState } from "react";
import "./Login.css";
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { loginUser } from "../../redux/actions/login";

const Login = () => {
  const options = [
    { value: "ojok", label: "Ojok Simon Peter" },
    { value: "yeni", label: "Eyena Samuel Baker" },
    { value: "elisa", label: "Elisa Dimiti" },
  ];

  const [loginUser, setLoginUser] = React.useState({ name: "Select User" });
  const { user } = useSelector((state) => state.authUser);
  const { users } = useSelector((state) => state.users);

  return (
    <div className="login">
      <Header />
      <div className="login-container">
        <img
          className="login-logo"
          src="/images/would-you-rather.png"
          alt="Would You Rather Logo"
        />
        <h1>
          Welcome To <strong>Would You Rather Game!</strong>
        </h1>
        <Select options={options} />

        <button className="sign-in-btn">Sign In</button>
        <p>Want your own account?</p>
        <button className="create-account-btn">Create Account</button>
      </div>
    </div>
  );
};

export default Login;
