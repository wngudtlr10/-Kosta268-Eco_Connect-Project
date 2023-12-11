/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MenuHeader = ({
  property1,
  className,
  text = "About",
  text1 = "Features",
  text2 = "Pricing",
  text3 = "Gallery",
  text4 = "Team",
}) => {
  return (
    <div className={`menu-header ${className}`}>
      <div className={`about property-1-${property1}`}>{text}</div>
      <div className={`features property-1-0-${property1}`}>{text1}</div>
      <div className={`pricing property-1-1-${property1}`}>{text2}</div>
      <div className={`gallery property-1-2-${property1}`}>{text3}</div>
      <div className={`team property-1-3-${property1}`}>{text4}</div>
    </div>
  );
};

MenuHeader.propTypes = {
  property1: PropTypes.oneOf(["white", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
};
