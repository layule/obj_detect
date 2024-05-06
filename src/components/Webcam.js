import React, { useEffect, useState } from "react";
import axios from "axios";

function Webcam(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("/api/data").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <section className="col-sm">
      <img src={data} alt="Webcam" />
    </section>
  );
}

export default Webcam;
