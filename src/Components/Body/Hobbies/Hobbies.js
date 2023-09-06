import React from "react";
import MainBody from "../MainBody";

import classes from "./Hobbies.module.css";

import music from "../../../Assets/Images/Hobbies/music.jpeg";
import photo from "../../../Assets/Images/Hobbies/photo.png";
import nature from "../../../Assets/Images/Hobbies/nature.png";

function Hobbies() {
  return (
    <MainBody className={classes.hobbies}>
      <h1>Hobbies</h1>
      <div className={classes.cards}>
        <div className={classes.card}>
          <div className={classes.imgContainer}>
            <img alt="Img" src={photo}></img>
          </div>
          <div className={classes.info}>
            <h2>Photography</h2>
            <p>
              I enjoy taking a look at what the world has to offer and burn an
              image of it. I love going out of my way when traveling to look for
              that perfect view ready to capture the moment and give it my own
              interpretation.
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.imgContainer}>
            <img alt="Img" src={music}></img>
          </div>
          <div className={classes.info}>
            <h2>Music</h2>
            <p>
              Music has been one of my vert first hobbies starting as playing
              the guitar while listening to multiple rock bands and then evolved
              into becoming an amateur audiophile and expanding to self-teaching
              playing the piano.
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.imgContainer}>
            <img alt="Img" src={nature}></img>
          </div>
          <div className={classes.info}>
            <h2>Exploring</h2>
            <p>
              I enjoy taking a look at what the world has to offer and burn an
              image of it. I love going out of my way when traveling to look for
              that perfect view ready to capture the moment and give it my own
              interpretation.
            </p>
          </div>
        </div>
      </div>
    </MainBody>
  );
}

export default Hobbies;
