import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from "../style/login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data = {} } = await axios.post("http://127.0.0.1:5000/login", {
        loginId: username,
        loginPW: password,
      });

      const { success = false } = data ?? {};

      if (success) {
        setLoading(false);
        navigate("/");
      } else {
        throw Error("login failed.");
      }
    } catch (error) {
      setLoading(false);
      console.error("로그인 실패:", error);
      setError("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          placeholder="Id"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading ? (
          <button type="button" disabled>
            로딩 중...
          </button>
        ) : (
          <button type="submit">Login</button>
        )}
        {error && <p className={style.error}>{error}</p>}{" "}
      </form>
    </div>
  );
};

export default Login;
