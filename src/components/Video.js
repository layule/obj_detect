import React from "react";

const Video = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
  };

  return (
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
  );
};

export default Video;
