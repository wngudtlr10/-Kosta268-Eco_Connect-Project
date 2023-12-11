/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonPage = ({ style, className, text = "1" }) => {
  return (
    <div className={`button-page ${style} ${className}`}>
      <div className="element">{text}</div>
    </div>
  );
};

ButtonPage.propTypes = {
  style: PropTypes.oneOf(["active", "default"]),
  text: PropTypes.string,
};
