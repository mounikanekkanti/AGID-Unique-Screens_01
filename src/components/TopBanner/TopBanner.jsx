/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon350 } from "../../icons/Icon350";
import "./style.css";

export const TopBanner = ({ className, usFlagSmall = "/img/us-flag-small.png" }) => {
  return (
    <div className={`top-banner ${className}`}>
      <div className="banner-content">
        <img className="us-flag-small" alt="Us flag small" src={usFlagSmall} />
        <div className="content">
          <p className="text-wrapper">An official website of the United States government</p>
          <div className="here-s-how-you-know">
            <div className="overlap-group">
              <div className="div">Here’s how you know</div>
              <Icon350 className="icon-350" color="#005EA2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TopBanner.propTypes = {
  usFlagSmall: PropTypes.string,
};
