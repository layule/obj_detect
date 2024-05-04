import { useState } from "react";
import "../style/reset.css";
import style from "../style/Footer.module.css";

const Footer = () => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };
  return (
    <footer className={style.container}>
      <div style={{ paddingTop: "12px" }}>
        <h3>Communications</h3>
        <div className={style.block}></div>
        <div style={{ padding: "10px 0 0 16px" }}></div>
        <div>
          <p
            style={{
              paddingBottom: "10px",
              color: "#ebebeb",
            }}
          >
            Subscribe to Aesop emails to receive news about products, services,
            stores, events, cultural interests and more.
          </p>
          <div className={style.box}>
            <input type="checkbox" />
            <p>I am at least 14 years old (required)</p>
          </div>
          <div className={style.box}>
            <input type="checkbox" />
            <p>
              I agree to the collection and use of personal information
              (required)
            </p>
          </div>
          <div className={style.box_text}>
            Information regarding Le Labo's products, services and promotions
            will be emailed to you for marketing purposes, until you cancel your
            consent.
            <br />
            You do not have to consent to the collection and use of your
            personal information for marketing purposes, in which case you will
            not receive marketing information.
          </div>
          <div className={style.box}>
            <input type="checkbox" />
            <p>I agree to receive marketing information (required)</p>
          </div>
          <div className={style.box_text}>
            I agree to receive advertising information via newsletter email.
          </div>
          <div className={style.box_letter}>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>click</button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "80px",
        }}
      >
        <div className={style.grop}>
          <h3>Order & Support</h3>
          <div className={style.block}></div>
          <nav className={style.gropText}>
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Return</a>
              </li>
              <li>
                <a href="#">Track Delivery</a>
              </li>
              <li>
                <a href="#">Order History</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.grop}>
          <h3>Service</h3>
          <div className={style.block}></div>
          <nav className={style.gropText}>
            <ul>
              <li>
                <a href="#">Corporate Purchase</a>
              </li>
              <li>
                <a href="#">Chat Consultation</a>
              </li>
              <li>
                <a href="#">Campaign</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.grop}>
          <h3>Introduction</h3>
          <div className={style.block}></div>
          <nav className={style.gropText}>
            <ul>
              <li>
                <a href="#">Brand story</a>
              </li>
              <li>
                <a href="#">Employment</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Operation/management policy</a>
              </li>
              <li>
                <a href="#">Activation</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.grop}>
          <h3>Social</h3>
          <div className={style.block}></div>
          <nav className={style.gropText}>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">YouTube</a>
              </li>
              <li>
                <a href="#">Kakao Plus Friend</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div style={{ color: "#ebebeb" }}>
        ELCA Korea Representative: Teng, Hsiao-Hua (Catherine), Meritz Tower,
        382 Gangnam-daero (Yeoksam-dong), Gangnam-gu, Seoul, 06232
        <br />
        Business registration number: 211-81-71889
        <br />
        Mail-order business report number: Gangnam-15737
        <br />
        Customer Care Support Team: 1544-1345 conciergekr@lelabofragrances.com
        <br />
        Hosting provider: Amazon Web Services
        <br />
      </div>
    </footer>
  );
};

export default Footer;
