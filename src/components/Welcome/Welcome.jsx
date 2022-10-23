import React, { useState } from "react";
import "../Welcome/Welcome.scss";
import { Link } from "react-router-dom";
import mannequin from "../assets/img/mannequin.mp4";

function Welcome() {
  const [handleChangeBack, setHandleChange] = useState(false);
  const [handleProject, sethandleProject] = useState(false);
  const [Contact, setContact] = useState(false);
  const [Film, setFilm] = useState(false);

  const handleChange = () => {
    setHandleChange(true);
  };
  const handleOut = () => {
    setHandleChange(false);
  };
  const handleChangeProject = () => {
    sethandleProject(true);
  };
  const handleProjectOut = () => {
    sethandleProject(false);
  };
  const handleContact = () => {
    setContact(true);
  };
  const handleContactOut = () => {
    setContact(false);
  };
  const handleFilm = () => {
    setFilm(true);
  };
  const handleFilmOut = () => {
    setFilm(false);
  };

  return (
    <div
      className={`Welcome ${handleChangeBack &&
        "backgroundChange"} ${handleProject && "backgroundProject"} ${Contact &&
        "backgroundContact"} ${Film && "backgroundFilm"}`}
    >
      <div className="nav">
        <Link style={{ textDecoration: "none" }} to="/">
          <h1>Close</h1>
        </Link>
      </div>
      <div className="banner">
        <div className="circle">
          <p>Books</p>
        </div>
        <video
          type="video/mp4"
          width="420"
          autoPlay
          loop
          height="440"
          src={mannequin}
        ></video>

        <div className="container">
          <div
            onMouseLeave={handleOut}
            onMouseEnter={handleChange}
            className="portrait"
          >
            <h1 className="portrait">PORTRAIT²</h1>
            <span className="span"></span>
          </div>

          <div
            onMouseLeave={handleProjectOut}
            onMouseEnter={handleChangeProject}
            className="Commission"
          >
            <h1>COMMISSION </h1>
            <span className="span"></span>
          </div>
        </div>
        <div className="container2">
          <div
            onMouseLeave={handleContactOut}
            onMouseEnter={handleContact}
            className="project"
          >
            <h1>PROJECTS</h1>
          </div>

          <div
            onMouseLeave={handleFilmOut}
            onMouseEnter={handleFilm}
            className="films"
          >
            <h1>FILMS</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
