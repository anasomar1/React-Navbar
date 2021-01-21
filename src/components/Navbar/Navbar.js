import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainer = useRef();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const boxHandler = () => {
    setToggle(false);
  };
  return (
    <>
      <nav>
        <div className="logo">
          <h3>RocketE</h3>
          <i className="fas fa-rocket"></i>
        </div>
        <ul ref={linksContainer} className={toggle ? "active" : ""}>
          <li>
            <Link onClick={boxHandler} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={boxHandler} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={boxHandler} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={handleToggle} className="toggle-button">
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
