import React from "react";

import classes from "./MainBody.module.css";

function MainBody(props) {
  return (
    <div className={`${classes.body} ${props.className}`}>
        {props.children}
    </div>
  );
}

export default MainBody;
