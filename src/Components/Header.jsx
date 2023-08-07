import React from "react";
import Title from "./Title";
import "./Header.css";
const Header =()=>{
  return(
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
export default Header;