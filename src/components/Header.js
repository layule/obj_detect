import React from "react";
import "../style/reset.css";
import style from "../style/Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={style.inner}>
        <nav>
          <ul className={style.menu}>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Development</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </nav>
        <ul className={style.icon}>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Membership</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
