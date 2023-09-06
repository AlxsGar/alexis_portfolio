import React from "react";
import MainBody from "../MainBody";

import classes from "./About.module.css";

import about_image from "../../../Assets/Images/About/software-dev.jpeg";

function About() {
  return (
    <MainBody className={classes.about}>
      <h1>About me</h1>
      <div className={classes.info}>
        <p>
          My name is <span>Alexis Garcia</span>, I have a passion for developing
          new, interesting stuff as well as taking beautiful photography and
          listening to music at the best audio quiality.
        </p>
        <p>
          I’m a <span>software developer</span> born in Torrance, Ca. but raised
          in Morelia, Mich. I studied Software Development in Instituto
          Technologico de Monterrey and Universidad Vasco de Quiroga but
          ultimately majored in
          <span>Enginieer in Computer Systems</span> at UVAQ.
        </p>
      </div>
      <div className={classes.imageAbout}>
        <img alt="dev" src={about_image} />
      </div>
    </MainBody>
  );
}

export default About;
