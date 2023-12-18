/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ property1, className, divClassName, text = "Contact Us" }) => {
  return (
    <button className={`button ${property1} ${className}`}>
      <div className={`contact-us ${divClassName}`}>{text}</div>
    </button>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf(["contactus", "thirty", "twenty", "ten", "fifty", "five"]),
  text: PropTypes.string,
};
