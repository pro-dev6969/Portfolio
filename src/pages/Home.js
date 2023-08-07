import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi ! My Name is Vedant ✅</h2>
        <div className="prompt">
          <p>A Software Developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <GitHubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
      <h1> Skills</h1>
      <ol className="list">
        <li className="item">
          <h2> Front-End </h2>
          <span>ReactJS, Redux , HTML , CSS , NPM</span>
        </li>
        <li className="item">
          <h2> Back-End </h2>
          <span>NodeJS , ExpressJS , MySQL , Flask</span>
        </li>
        <li className="item">
          <h2> Languages </h2>
          <span>C/C++ , Python , JavaScript</span>
        </li>
      </ol>
      </div>
    </div>
  );
}

export default Home;
