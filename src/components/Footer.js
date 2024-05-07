import { useState } from "react";
import classes from "../style/footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };
  return (
    <footer className={classes.container}>
      <div style={{ paddingTop: "12px" }}>
        <h3 style={{ color: "#ebebeb" }}>Communications</h3>
        <div className={classes.block}></div>
        <div style={{ padding: "10px 0 0 16px" }}></div>
        <div>
          <p
            style={{
              paddingBottom: "10px",
              color: "#ebebeb",
            }}
          >
            Subscribe to our emails to receive news about products, services,
            how-tos, and more.
          </p>
          <div className={classes.box}>
            <input type="checkbox" />
            <p>I am at least 14 years old (required)</p>
          </div>
          <div className={classes.box}>
            <input type="checkbox" />
            <p>
              I agree to the collection and use of personal information
              (required)
            </p>
          </div>
          <div className={classes.box_text}>
            We will email you information about products, services and
            promotions for marketing purposes until you withdraw your consent.
            You do not need to consent to the collection and use of your
            personal information for marketing purposes, in which case you will
            not receive marketing information.
          </div>
          <div className={classes.box}>
            <input type="checkbox" />
            <p>I agree to receive marketing information (required)</p>
          </div>
          <div className={classes.box_letter}>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>click</button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "60px",
        }}
      >
        <div className={classes.grop}>
          <h3>Service</h3>
          <div className={classes.block}></div>
          <nav className={classes.gropText}>
            <ul>
              <li>
                <Link top="/">Contact</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Usage History</Link>
              </li>
              <li>
                <Link to="/">Terms of Use</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.grop}>
          <h3>Inquiry</h3>
          <div className={classes.block}></div>
          <nav className={classes.gropText}>
            <ul>
              <li>
                <Link to="/">Corporate Purchase</Link>
              </li>
              <li>
                <Link to="/">Chat Consultation</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.grop}>
          <h3>Introduction</h3>
          <div className={classes.block}></div>
          <nav className={classes.gropText}>
            <ul>
              <li>
                <Link to="/">Brand story</Link>
              </li>
              <li>
                <Link to="/">Privacy policy</Link>
              </li>
              <li>
                <Link to="/">Operation/management policy</Link>
              </li>
              <li>
                <Link to="/">Activation</Link>
              </li>
              <li>
                <Link to="/">Cookie Policy</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.grop}>
          <h3>Social</h3>
          <div className={classes.block}></div>
          <nav className={classes.gropText}>
            <ul>
              <li>
                <Link to="/">Instagram</Link>
              </li>
              <li>
                <Link to="/">YouTube</Link>
              </li>
              <li>
                <Link to="/">Kakao Plus Friend</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div style={{ color: "#ebebeb" }}>
        ELCA Korea Representative: Teng, Hsiao-Hua (Catherine), Tower, 00000 000
        Gangnam-daero, Gangnam-gu, Seoul (Yeoksam-dong)
        <br />
        Business registration number: 000-00-00000
        <br />
        Mail-order business report number: Gangnam-00000
        <br />
        Customer Care Support Team: 0000-0000 00000@0000.co.kr
        <br />
        Hosting provider: Amazon Web Services
        <br />
      </div>
    </footer>
  );
};

export default Footer;
