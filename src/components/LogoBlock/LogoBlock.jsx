/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LogoBlock = ({
  size,
  header,
  footer,
  className,
  text = "Aging, Independence, and Disability (AGID) Program Data Portal",
}) => {
  return (
    <div className={`logo-block footer-${footer} header-${header} ${className}`}>
      <img className="ACL-logo" alt="Acl logo" src="/img/acl-logo.png" />
      <div className="AGID-title">
        <div className="text-wrapper-2">Administration for Community Living</div>
        <p className="aging-independence">{text}</p>
      </div>
    </div>
  );
};

LogoBlock.propTypes = {
  size: PropTypes.oneOf(["desktop"]),
  header: PropTypes.bool,
  footer: PropTypes.bool,
  text: PropTypes.string,
};
