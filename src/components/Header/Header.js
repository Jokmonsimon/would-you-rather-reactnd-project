import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <img
          className="header-logo"
          src="/images/would-you-rather.png"
          alt="Would You Rather Logo"
        />
      </div>
    </div>
  );
};

export default Header;
