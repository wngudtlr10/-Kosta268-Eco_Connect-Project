/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ExpandRightDouble = ({ className, expandRightDouble = "/img/expand-right-double.png" }) => {
  return <img className={`expand-right-double ${className}`} alt="Expand right double" src={expandRightDouble} />;
};

ExpandRightDouble.propTypes = {
  expandRightDouble: PropTypes.string,
};
