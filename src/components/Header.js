import React from "react";
import { Link } from "react-router-dom";
import style from "../style/header.module.css";
import "../style/reset.css";

function Header(props) {
  return (
    <>
      <div className={style.inner}>
        <nav>
          <ul className={style.menu}>
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
        <ul className={style.icon}>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
