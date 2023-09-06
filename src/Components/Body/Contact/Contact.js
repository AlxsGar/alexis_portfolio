import React, { useRef } from "react";

import emailjs from '@emailjs/browser';

import classes from "./Contact.module.css";
import MainBody from "../MainBody";

import email from "../../../Assets/Images/Icons/email.png";
import linkedin from "../../../Assets/Images/Icons/linkedin.png";
import github from "../../../Assets/Images/Icons/github.png";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xapokeo",
        "template_q1roics",
        form.current,
        "Jk480vMsTSl6cYeGq"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <MainBody>
      <h1>Contact</h1>
      <div className={classes.division}>
        <div className={classes.contactForm}>
          <h2>Inquiries</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className={classes.section}>
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Name" required />
            </div>
            <div className={classes.section}>
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Email" required />
            </div>
            <div className={classes.section}>
              <label>Message</label>
              <textarea type="text" name="message" placeholder="Write your message" required />
            </div>
            <div className={classes.section}>
              <button type="submit">Send message</button>
            </div>
          </form>
        </div>
        <div className={classes.networks}>
          <h2>My networks</h2>
          <div className={classes.list}>
            <div className={classes.network}>
              <a href="https://www.linkedin.com/in/alexis-garcia-b0a3ba103/">
                <div className={classes.icon}>
                  <img alt="icon" src={linkedin} />
                </div>
                <h3>LinkedIn</h3>
                <p>https://www.linkedin.com/in/alexis-garcia-b0a3ba103/</p>
              </a>
            </div>
            <div className={classes.network}>
              <a href="https://github.com/AlxsGar">
                <div className={classes.icon}>
                  <img alt="icon" src={github} />
                </div>
                <h3>Github</h3>
                <p>https://github.com/AlxsGar</p>
              </a>
            </div>
            <div className={classes.network}>
              <div className={classes.icon}>
                <img alt="icon" src={email} />
              </div>
              <h3>Email</h3>
              <p>alxs74@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </MainBody>
  );
}

export default Contact;
