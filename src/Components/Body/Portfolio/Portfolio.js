import React from "react";
import MainBody from "../MainBody";

import classes from "./Portfolio.module.css";

import tdm from "../../../Assets/Images/Portfolio/Screen Shot 2023-09-03 at 14.22.11.png";
import crypto from "../../../Assets/Images/Portfolio/crypto.png";
import uvaq from "../../../Assets/Images/Portfolio/uvaq.jpg"

function Portfolio() {
  return (
    <MainBody className={classes.portfolio}>
      <h1>Portfolio</h1>
      <div className={classes.division}>
        <div className={classes.projects}>
          <h2>Proyects</h2>
          <div className={classes.project}>
            <div className={classes.imageHolder}>
              <img alt="Img" src={tdm}></img>
            </div>
            <div className={classes.info}>
              <h3>Turbo Diesel de Morelia Website</h3>
              <p>
                Designed the company's website using HTML, CSS, Javascript, and
                PHP with the help of bootstrap as the main framework. I boosted
                the website's presence using SEO techniques.
              </p>
            </div>
          </div>
          <div className={classes.project}>
            <div className={classes.imageHolder}>
              <img alt="Img" src={uvaq}></img>
            </div>
            <div className={classes.info}>
              <h3>Uvaq Schedule System</h3>
              <p>
                Developed web app using Raect.js as frontend and syncing with firebase for
                the database. The purpose was to automate the schedule of each teacher and each group
                from every major and optimize the task for administration.
              </p>
            </div>
          </div>
          <div className={classes.project}>
            <div className={classes.imageHolder}>
              <img alt="Img" src={crypto}></img>
            </div>
            <div className={classes.info}>
              <h3>RT Crypto Converter</h3>
              <p>
                Developed an app using Flutter for Android and iOS that uses a
                crypto API and a currency API that converts in real time the
                value of any crypto coin into another currency (in this case
                MXN).
              </p>
            </div>
          </div>
          {/* <div className={classes.project}>
            <img alt="Img" src={tdm}></img>
            <div className={classes.info}>
              <h3>Turbo Diesel de Morelia Inventory System</h3>
              <p>
                Developed an app that manages the inventory of all the stock if
                the company.
              </p>
            </div>
          </div> */}
        </div>

        <div className={classes.skills}>
          <h2>Skills</h2>
          <div className={classes.skill}>
            <h3>React.js</h3>
            <p>3 years</p>
          </div>
          <div className={classes.skill}>
            <h3>HTML/CSS/Javascript</h3>
            <p>5 years</p>
          </div>
          <div className={classes.skill}>
            <h3>Flutter/Dart</h3>
            <p>1 year</p>
          </div>
          <div className={classes.skill}>
            <h3>Java</h3>
            <p>4 years</p>
          </div>
          <div className={classes.skill}>
            <h3>MySQL</h3>
            <p>4 years</p>
          </div>
          <div className={classes.skill}>
            <h3>C</h3>
            <p>2 years</p>
          </div>
          <div className={classes.skill}>
            <h3>PHP</h3>
            <p>3 years</p>
          </div>
          <div className={classes.skill}>
            <h3>Photoshop</h3>
            <p>3 years</p>
          </div>
          <div className={classes.skill}>
            <h3>Illustrator</h3>
            <p>1 years</p>
          </div>
        </div>
      </div>
    </MainBody>
  );
}

export default Portfolio;
