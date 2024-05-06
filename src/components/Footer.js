import { useState } from "react";
import style from "../style/footer.module.css";

function Footer(props) {
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
        <h3 style={{ color: "#ebebeb" }}>Communications</h3>
        <div className={style.block}></div>
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
            We will email you information about products, services and
            promotions for marketing purposes until you withdraw your consent.
            You do not need to consent to the collection and use of your
            personal information for marketing purposes, in which case you will
            not receive marketing information.
          </div>
          <div className={style.box}>
            <input type="checkbox" />
            <p>I agree to receive marketing information (required)</p>
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
          <h3>Service</h3>
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
                <a href="#">Usage History</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.grop}>
          <h3>Inquiry</h3>
          <div className={style.block}></div>
          <nav className={style.gropText}>
            <ul>
              <li>
                <a href="#">Corporate Purchase</a>
              </li>
              <li>
                <a href="#">Chat Consultation</a>
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
}

export default Footer;
