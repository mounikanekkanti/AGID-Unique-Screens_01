/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconAssessment = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-assessment ${className}`}
      fill="none"
      height="26"
      viewBox="0 0 26 26"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M20.5833 3.25H5.41667C4.225 3.25 3.25 4.225 3.25 5.41667V20.5833C3.25 21.775 4.225 22.75 5.41667 22.75H20.5833C21.775 22.75 22.75 21.775 22.75 20.5833V5.41667C22.75 4.225 21.775 3.25 20.5833 3.25ZM9.75 18.4167H7.58333V10.8333H9.75V18.4167ZM14.0833 18.4167H11.9167V7.58333H14.0833V18.4167ZM18.4167 18.4167H16.25V14.0833H18.4167V18.4167Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconAssessment.propTypes = {
  color: PropTypes.string,
};
