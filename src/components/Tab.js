import { useState } from "react";
import classes from "../style/tab.module.scss";
import Video from "./Video";
import Webcam from "./Webcam";

function Tab(props) {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className={classes.container}>
        <div>
          <input className={classes.text} type="radio" id="tap1" />
          <label
            className="tap1"
            htmlFor="tap1"
            onClick={() => setActiveTab((activeTab) => 1)}
          >
            Video
          </label>
        </div>
        <div>
          <input className={classes.text} type="radio" id="tap2" />
          <label
            className="tap2"
            htmlFor="tap2"
            onClick={() => setActiveTab((activeTab) => 2)}
          >
            LiveWebcam
          </label>
        </div>
      </div>
      <div className={classes.box}>
        {activeTab === 1 ? <Video /> : activeTab === 2 && <Webcam />}
      </div>
    </>
  );
}

export default Tab;
