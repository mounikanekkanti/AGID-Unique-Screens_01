/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconLinegraph = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-linegraph ${className}`}
      fill="none"
      height="26"
      viewBox="0 0 26 26"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M22.75 8.66666C23.9417 8.66666 24.9167 9.64166 24.9167 10.8333C24.9167 12.4042 23.3567 13.2817 22.1975 12.9242L18.3408 16.77C18.7092 17.94 17.8208 19.5 16.25 19.5C14.6683 19.5 13.7908 17.9292 14.1592 16.77L11.3967 14.0075C11.0717 14.105 10.595 14.105 10.27 14.0075L5.34084 18.9475C5.69834 20.1067 4.82084 21.6667 3.25001 21.6667C2.05834 21.6667 1.08334 20.6917 1.08334 19.5C1.08334 17.9292 2.64334 17.0517 3.80251 17.4092L8.74251 12.48C8.37418 11.31 9.26251 9.74999 10.8333 9.74999C12.415 9.74999 13.2925 11.3208 12.9242 12.48L15.6867 15.2425C16.0117 15.145 16.4883 15.145 16.8133 15.2425L20.6592 11.3858C20.3017 10.2267 21.1792 8.66666 22.75 8.66666Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconLinegraph.propTypes = {
  color: PropTypes.string,
};
