import React from "react";
import "./Row.scss";
import run from "../../assets/img/running.mp4";
import defi from "../../assets/img/defi.mp4";
import model from "../../assets/img/model.mp4";
import video from "../../assets/img/videoF.mp4";
import video2 from "../../assets/img/video2.mp4";
import model2 from "../../assets/img/model2.mp4";
const Row = () => {

  return (
    <div id='#/' className="Wrapper">
      <div className="author"><p>A<span >udrain</span></p><p>S<span>imon</span></p></div>
      <div className="wrapper-top ">
        <div className="img1"></div>
        <div className="img2"></div>
        <div className=" img3"></div>
        <div className="img4">
          <video
            src={defi}
            type="video/mp4"
            width="420"
            autoPlay
            loop
            height="240"
          ></video>{" "}
        </div>

        <div className="img5"></div>
        <div className="img6"></div>
        <div className="img7"></div>
        <div className="img8"></div>
        <div className="img9"></div>
        <div className="img10"></div>
        <div className="img11"></div>
        <div className="img12"></div>
        <div className="img13"></div>
        <div className="img14"></div>
        <div className="img15"></div>
        <div className="img16"></div>
        <div className="img17">
          <video
            src={model}
            type="video/mp4"
            width="420"
            height="420"
            autoPlay
            loop
          ></video>{" "}
        </div>
        <div className="img18">
          <video
            src={run}
            type="video/mp4"
            width="420"
            autoPlay
            loop
            height="240"
          ></video>{" "}
        </div>
      </div>
      <div>
        <h1>AS STYLE FASHION</h1>
      </div>
      <div className="wrapper-bottom">
        <div className=" img1"></div>
        <div className="img2"></div>
        <div className=" img3"></div>

        <div className="img4"></div>
        <div className="img5">
          <video
            src={model2}
            type="video/mp4"
            width="420"
            height="420"
            autoPlay
            loop
          ></video>{" "}
        </div>
        <div className="img6">
          {" "}
          <video
            src={video2}
            type="video/mp4"
            width="420"
            autoPlay
            loop
            height="240"
          ></video>{" "}
        </div>
        <div className="img7"></div>
        <div className="img8"></div>
        <div className="img9"></div>
        <div className="img10"></div>
        <div className="img11"></div>
        <div className="img12"></div>
        <div className="img13"></div>
        <div className="img14"></div>
        <div className="img15"></div>
        <div className="img16"></div>
        <div className="img17"></div>

        <div className="img18"></div>
        <div className="img19">
          <video
            src={video}
            type="video/mp4"
            width="420"
            autoPlay
            muted
            loop
            height="240"
          ></video>{" "}
        </div>
      </div>
    </div>
  );
};

export default Row;
