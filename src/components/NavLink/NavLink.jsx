/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon2 } from "../../icons/Icon2";
import { Icon401 } from "../../icons/Icon401";
import "./style.css";

export const NavLink = ({
  state,
  type,
  current,
  className,
  frameClassName,
  divClassName,
  text = "Link",
  divClassNameOverride,
  text1 = "Section",
  visible = true,
}) => {
  return (
    <div className={`nav-link ${state} current-${current} ${className}`}>
      {current && ["hover", "normal"].includes(state) && (
        <>
          <div className="frame">
            <div className="link">
              {type === "link" && <>{text}</>}

              {type === "accordion" && <>{text1}</>}
            </div>
            {type === "accordion" && (
              <Icon2 className="instance-node" color={state === "normal" ? "#565C65" : "#005EA2"} />
            )}
          </div>
          <img
            className="rectangle"
            alt="Rectangle"
            src={type === "link" ? "/img/rectangle-73-2.svg" : "/img/rectangle-73.svg"}
          />
        </>
      )}

      {(!current || state === "active") && (
        <div className={`frame ${frameClassName}`}>
          <div
            className={`link-2 ${
              type === "link" ? divClassName : type === "accordion" ? divClassNameOverride : undefined
            }`}
          >
            {type === "link" && <>{text}</>}

            {type === "accordion" && <>{text1}</>}
          </div>
          {type === "accordion" && (
            <>
              <>
                {visible && (
                  <>
                    <>
                      {state === "active" && <Icon401 className="instance-node" />}

                      {!current && (
                        <Icon2 className="instance-node" color={state === "normal" ? "#565C65" : "#005EA2"} />
                      )}
                    </>
                  </>
                )}
              </>
            </>
          )}
        </div>
      )}
    </div>
  );
};

NavLink.propTypes = {
  state: PropTypes.oneOf(["normal", "active", "hover"]),
  type: PropTypes.oneOf(["link", "accordion"]),
  current: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
  visible: PropTypes.bool,
};
