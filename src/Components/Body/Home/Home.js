import React from "react";

import classes from "./Home.module.css";
import MainBody from "../MainBody";

import home_image from '../../../Assets/Images/Home/home_image.png'

function Home() {
  return (
    <React.Fragment>
      <MainBody className={classes.home}>
        <h1>Home</h1>
        <div className={classes.bodyText}>
          <p>
            Welcome to my personal website. You’ll find infomation about me
            regarding my feats, projects, hobbies and more…
          </p>
          <img alt="Home section" src={home_image}/>
        </div>
      </MainBody>
    </React.Fragment>
  );
}

export default Home;
