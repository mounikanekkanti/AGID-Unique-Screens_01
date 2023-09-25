/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon405 } from "../../icons/Icon405";
import "./style.css";

export const Search = ({
  size,
  className,
  overlapClassName,
  rectangleClassName,
  vector = "/img/vector-33.svg",
  groupClassName,
  img = "/img/vector-32.svg",
  divClassName,
  inputType = "text",
}) => {
  return (
    <div className={`search ${size} ${className}`}>
      <div className={`overlap ${overlapClassName}`}>
        <img
          className={`img ${rectangleClassName}`}
          alt="Rectangle"
          src={size === "big" ? img : size === "small" ? vector : "/img/rectangle-1.png"}
        />
        <div className={`group ${groupClassName}`}>
          {["big", "default"].includes(size) && (
            <div className="search-wrapper">
              <input className={`input ${divClassName}`} placeholder="Search" type={inputType} />
            </div>
          )}

          {size === "small" && <Icon405 className="icon-405" color="white" />}
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  size: PropTypes.oneOf(["big", "small", "default"]),
  vector: PropTypes.string,
  img: PropTypes.string,
  inputType: PropTypes.string,
};
