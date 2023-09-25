/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cell } from "../Cell";
import "./style.css";

export const Row = ({ row, className, cellText = "State", cellText1 = "2023" }) => {
  return (
    <div className={`row ${className}`}>
      <Cell row={row === "odd" ? "odd" : "even"} text={cellText} type="state" />
      <Cell row={row === "odd" ? "odd" : "even"} text3={cellText1} type="first-column" />
      <Cell row={row === "odd" ? "odd" : "even"} text1="Data" type="data" />
      <Cell row={row === "odd" ? "odd" : "even"} text1="Data" type="data" />
      <Cell row={row === "odd" ? "odd" : "even"} text1="Data" type="data" />
      <Cell row={row === "odd" ? "odd" : "even"} text1="Data" type="data" />
      <Cell row={row === "odd" ? "odd" : "even"} text1="Data" type="data" />
      <Cell row={row === "odd" ? "odd" : "even"} text1="Data" type="data" />
    </div>
  );
};

Row.propTypes = {
  row: PropTypes.oneOf(["odd", "even"]),
  cellText: PropTypes.string,
  cellText1: PropTypes.string,
};
