/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon63 = ({ color = "#A9AEB1", className }) => {
  return (
    <svg
      className={`icon-63 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" clipRule="evenodd" d="M20 9H4V11H20V9ZM4 15H20V13H4V15Z" fill={color} fillRule="evenodd" />
    </svg>
  );
};

Icon63.propTypes = {
  color: PropTypes.string,
};
