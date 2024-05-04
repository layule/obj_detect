import React, { useState } from "react";
import "../style/reset.css";
import style from "../style/Login.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div className={style.form}>
            <label htmlFor="username"></label>
            <input
              placeholder="ID"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={style.form}>
            <label htmlFor="password"></label>
            <input
              placeholder="PASSWORD"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className={style.box}>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <li>비밀번호 찾기 </li>
          <li>아이디 찾기</li>
          <li>회원가입</li>
        </ul>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
