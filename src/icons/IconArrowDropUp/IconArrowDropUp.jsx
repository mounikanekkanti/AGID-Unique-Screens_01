/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconArrowDropUp = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-arrow-drop-up ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" clipRule="evenodd" d="M7 14L12 9L17 14H7Z" fill={color} fillRule="evenodd" />
    </svg>
  );
};

IconArrowDropUp.propTypes = {
  color: PropTypes.string,
};
