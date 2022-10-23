import React, { useState } from "react";
import "../Welcome/Welcome.scss";
import { Link } from "react-router-dom";

function Welcome() {
  const [handleChangeBack, setHandleChange] = useState(false);

  const handleChange = () => {
    if (handleChangeBack === false) {
      setHandleChange(true);
    } else {
      setHandleChange(false);
    }
  };

  return (
    <div className={`Welcome ${handleChangeBack && "backgroundChange"}`}>
      <div className="nav">
        <Link style={{ textDecoration: "none" }} to="/">
          <h1>Close</h1>
        </Link>
      </div>
      <div className="banner">
        <div className="container">
          <div onMouseMove={handleChange} className="portrait">
            <h1 >Portraits</h1>
          </div>

          <div className="Commission">
            <h1 className="commission">Commission</h1>
          </div>
        </div>
        <div className="container2">
          <div className="portrait">
            <h1>Projects</h1>
          </div>
          <div className="films">
            <h1>Films</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
