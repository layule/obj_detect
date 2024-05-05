import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"; // 리액트 라우터의 useHistory 훅을 불러옵니다.
import "../style/reset.css";
import style from "../style/Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // 로딩 상태를 관리합니다.
  const [error, setError] = useState(""); // 에러 메시지를 관리합니다.
  const history = useHistory(); // useHistory 훅을 사용하여 페이지 이동을 관리합니다.

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 폼 제출 시 로딩 상태를 활성화합니다.

    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        loginId: username,
        loginPW: password,
      });

      setLoading(false);
      history.push("/");
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
