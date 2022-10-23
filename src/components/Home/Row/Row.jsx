import React from "react";
import "./Row.scss";
import run from "../../assets/img/running.mp4";
import defi from "../../assets/img/defi.mp4";
import model from "../../assets/img/model.mp4";
import video from "../../assets/img/videoF.mp4";
import video2 from "../../assets/img/video2.mp4";
import model2 from "../../assets/img/model2.mp4";
import modelWomen from '../../assets/img/modelWomen.mp4';
const Row = () => {

  return (
    <div id='#/' className="Wrapper">
      <div className="author"><p>A<span >udrain</span></p><p>S<span>imon</span></p></div>
      <div className="wrapper-top ">
        <div className="img img1"></div>
        <div className="img img2"></div>
        <div className=" img img3"></div>
        <div className="img img4">
          <video
            src={defi}
            type="video/mp4"
            width="420"
            autoPlay
            loop
            height="240"
          ></video>{" "}
        </div>

        <div className="img img5"></div>
        <div className="img img6"></div>
        <div className="img img7"></div>
        <div className="img img8"></div>
        <div className="img img9"></div>
        <div className="img img10"></div>
        <div className="img img11"></div>
        <div className="img img12"></div>
        <div className="img img13"></div>
        <div className="img img14"></div>
        <div className="img img15"></div>
        <div className="img img16"></div>
        <div className="img img17">
          <video
            src={model}
            type="video/mp4"
            width="420"
            height="420"
            autoPlay
            loop
          ></video>{" "}
        </div>
        <div className="img img18">
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
        <div className=" img img1"></div>
        <div className="img img2"></div>
        <div className=" img img3">
        <video
            src={modelWomen}
            type="video/mp4"
            width="420"
            autoPlay
            loop
            height="240"
          ></video>{" "}
        </div>

        <div className="img img4"></div>
        <div className="img img5">
          <video
            src={model2}
            type="video/mp4"
            width="420"
            height="420"
            autoPlay
            loop
          ></video>{" "}
        </div>
        <div className="img img6">
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
        <div className="img img7"></div>
        <div className="img img8"></div>
        <div className="img img9"></div>
        <div className="img img10"></div>
        <div className="img img11"></div>
        <div className="img img12"></div>
        <div className="img img13"></div>
        <div className="img img14"></div>
        <div className="img img15"></div>
        <div className="img img16"></div>
        <div className="img img17"></div>

        <div className="img img18"></div>
        <div className="img img19">
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
