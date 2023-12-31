/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconShare = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-share ${className}`}
      fill="none"
      height="26"
      viewBox="0 0 26 26"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M19.5 17.42C18.6767 17.42 17.94 17.745 17.3767 18.2542L9.6525 13.7584C9.70667 13.5092 9.75 13.26 9.75 13C9.75 12.74 9.70667 12.4909 9.6525 12.2417L17.29 7.78919C17.875 8.33085 18.6442 8.66669 19.5 8.66669C21.2983 8.66669 22.75 7.21502 22.75 5.41669C22.75 3.61835 21.2983 2.16669 19.5 2.16669C17.7017 2.16669 16.25 3.61835 16.25 5.41669C16.25 5.67669 16.2933 5.92585 16.3475 6.17502L8.71 10.6275C8.125 10.0859 7.35583 9.75002 6.5 9.75002C4.70167 9.75002 3.25 11.2017 3.25 13C3.25 14.7984 4.70167 16.25 6.5 16.25C7.35583 16.25 8.125 15.9142 8.71 15.3725L16.4233 19.8792C16.3692 20.1067 16.3367 20.345 16.3367 20.5834C16.3367 22.3275 17.7558 23.7467 19.5 23.7467C21.2442 23.7467 22.6633 22.3275 22.6633 20.5834C22.6633 18.8392 21.2442 17.42 19.5 17.42Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconShare.propTypes = {
  color: PropTypes.string,
};
