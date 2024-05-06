import { useState } from "react";
import style from "../style/tab.module.css";
import Video from "./Video";
import Webcam from "./Webcam";

function Tab(props) {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
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
        </div>
      </div>
      <div className={style.box}>
        {activeTab === 1 ? <Video /> : activeTab === 2 && <Webcam />}
      </div>
    </>
  );
}

export default Tab;
