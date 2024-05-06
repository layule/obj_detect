import React from "react";
import axios from "axios";
import classes from "../style/video.module.scss";

function Video(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      console.log("formData", formData);
      const response = await axios.post(
        "http://127.0.0.1:5001/FrontPage",
        formData
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.video}>
      <form
        method="POST"
        encType="multipart/form-data"
        style={{ alignContent: "center", textAlign: "center", display: "flex" }}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="csrf_token" value="some_csrf_token_value" />

        <input type="file" name="file" className="custom-file-input" />

        <div>
          <button type="submit" name="favorite" value="x" className="btnCustom">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Video;
