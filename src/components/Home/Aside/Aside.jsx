import React from "react";
import "./Aside.scss";

function Aside() {
  return (
    <div className="Aside">
      <div className="syndication">
        <h1>
          Syndication:
          <br />
          AUGUST INFO@STEGE.COM (212)154824
        </h1>
      </div>
      <div className="Social">
        <h1>Social:<br/>INSTAGRAM</h1>
      </div>
      <div className="indexBack"><a href='/'>INDEX -Back to top</a></div>
    </div>
  );
}

export default Aside;
