/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Search } from "../Search";
import "./style.css";

export const QuickSearch = ({
  className,
  divClassName,
  searchRectangleClassName,
  searchOverlapClassName,
  searchGroupClassName,
  searchVector = "/img/vector-31.svg",
}) => {
  return (
    <div className={`quick-search ${className}`}>
      <div className={`text-wrapper-3 ${divClassName}`}>Quick Search</div>
      <Search
        className="search-instance"
        groupClassName={searchGroupClassName}
        overlapClassName={searchOverlapClassName}
        rectangleClassName={searchRectangleClassName}
        size="small"
        vector={searchVector}
      />
    </div>
  );
};

QuickSearch.propTypes = {
  searchVector: PropTypes.string,
};
