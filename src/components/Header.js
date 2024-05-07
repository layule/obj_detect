import React from "react";
import { Link } from "react-router-dom";
import classes from "../style/header.module.scss";
import "../style/reset.scss";

const Header = () => {
  return (
    <>
      <div className={classes.inner}>
        <nav>
          <ul className={classes.menu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Service">Service</Link>
            </li>
          </ul>
        </nav>
        <ul className={classes.icon}>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
