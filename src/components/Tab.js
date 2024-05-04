import { useState } from "react";
import style from "../style/Tab.module.css";
import "../style/reset.css";
import Video from "./Video";
import Webcam from "./Webcam";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const fetchVideo = async () => {
    const response = await fetch("/video");
    // handle response here
  };

  const fetchWebcam = async () => {
    const response = await fetch("/webapp");
    // handle response here
  };

  return (
    <div className={style.container}>
      <div>
        <input
          className={style.text}
          type="radio"
          name={style.name}
          id="tap1"
          onChange={fetchVideo}
        />
        <label className="tap1" htmlFor="tap1" onClick={() => setActiveTab(1)}>
          Video
        </label>
        {activeTab === 1 && (
          <div className={style.box}>
            <Video />
          </div>
        )}
      </div>
      <div>
        <input
          className={style.text}
          type="radio"
          name={style.name}
          id="tap2"
          onChange={fetchWebcam}
        />
        <label className="tap2" htmlFor="tap2" onClick={() => setActiveTab(2)}>
          LiveWebcam
        </label>
        {activeTab === 2 && (
          <div className={style.box}>
            <Webcam />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
