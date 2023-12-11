/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ExpandLeftDouble = ({ className, expandLeftDouble = "/img/expand-left-double.png" }) => {
  return <img className={`expand-left-double ${className}`} alt="Expand left double" src={expandLeftDouble} />;
};

ExpandLeftDouble.propTypes = {
  expandLeftDouble: PropTypes.string,
};
