import React from "react";
import logo from "../assets/logo.webp";
import focuse from "../assets/focus.jpg";

const Nave = () => {
  return (
    <nav>
      <div>
        {/* <img className="focuse" src={focuse} /> */}
        <img src={logo} />
      </div>
      <ul>
        <li>
          <a href="#">ABOUT US</a>
        </li>
        <li>
          <a href="#">DESTINATIONS</a>
        </li>
        <li>
          <a href="#">EXPERIENCES</a>
        </li>
        <li>
          <a href="#">TRAVEL STYLES</a>
        </li>
        <li>
          <a href="#">CONTACT US</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nave;
