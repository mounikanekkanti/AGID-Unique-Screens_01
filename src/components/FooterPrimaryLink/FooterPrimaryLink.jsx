/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon86 } from "../../icons/Icon86";
import "./style.css";

export const FooterPrimaryLink = ({ dropdown, className, divClassName, text = "Documentation" }) => {
  return (
    <div className={`footer-primary-link dropdown-${dropdown} ${className}`}>
      {!dropdown && <div className={`documentation ${divClassName}`}>{text}</div>}

      {dropdown && (
        <>
          <Icon86 className="icon-86" />
          <div className="documentation-2">{text}</div>
        </>
      )}
    </div>
  );
};

FooterPrimaryLink.propTypes = {
  dropdown: PropTypes.bool,
  text: PropTypes.string,
};
