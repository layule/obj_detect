import { useState } from "react";
import style from "../style/Tab.module.css";
import "../style/reset.css";
import Video from "../components/Video";
import Webcam from "../components/Webcam";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className={style.container}>
      <div>
        <input
          className={style.text}
          type="radio"
          name={style.name}
          id="tap1"
        />
        <label
          className="tap1"
          htmlFor="tap1"
          onClick={() => setActiveTab((activeTab) => 1)}
        >
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
        />
        <label
          className="tap2"
          htmlFor="tap2"
          onClick={() => setActiveTab((activeTab) => 2)}
        >
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
