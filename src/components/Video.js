import React from "react";

const Video = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/FrontPage", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        width: "900px",
        height: "600px",
        boderRadius: "35px",
        objectFit: "contain",
        margin: "40px",
      }}
    >
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
};

export default Video;
