import React, { useEffect, useState } from "react";
import classes from "../style/webcam.module.scss";
// import axios from "axios";

function Webcam(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    // axios.get("/api/data").then((response) => {
    //   setData(response.data);
    // });
  }, []);

  return (
    <>
      {" "}
      {/* <img src={data} alt="Webcam" /> */}
      <div className={classes.bg}></div>
    </>
  );
}

export default Webcam;
