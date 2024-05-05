import React, { useState, useEffect } from "react";
import "./App.css";
import "./style/reset.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MySwiper from "./components/MySwiper";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div className="page-container">
      <Header />
      <MySwiper />
      <div>
        <p>{message}</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
