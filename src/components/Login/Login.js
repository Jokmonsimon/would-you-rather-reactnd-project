import React, { Fragment } from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";

const Login = () => {
  return (
    <div className="login">
      <img
        className="login-logo"
        src="/images/would-you-rather.png"
        alt="Would You Rather Logo"
      />
      <div className="login-container">
        <h1>Welcome to the Would You Rather Game App</h1>
        <h1>Please login to play the game</h1>
        <Select />
      </div>
    </div>
  );
};

export default Login;
