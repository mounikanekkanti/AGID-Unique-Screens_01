/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconArrowBack = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-arrow-back ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M30 16.5H11.745L20.13 8.115L18 6L6 18L18 30L20.115 27.885L11.745 19.5H30V16.5Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconArrowBack.propTypes = {
  color: PropTypes.string,
};
