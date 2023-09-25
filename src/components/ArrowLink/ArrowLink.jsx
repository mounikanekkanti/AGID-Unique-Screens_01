/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ArrowLink = ({ className, divClassName, text = "View all Programs", iconClassName }) => {
  return (
    <div className={`arrow-link ${className}`}>
      <div className={`view-all-programs ${divClassName}`}>{text}</div>
      <div className={`icon-2 ${iconClassName}`} />
    </div>
  );
};

ArrowLink.propTypes = {
  text: PropTypes.string,
};
