/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon165 } from "../../icons/Icon165";
import { Icon166 } from "../../icons/Icon166";
import { Icon175 } from "../../icons/Icon175";
import { Icon176 } from "../../icons/Icon176";
import { Icon7 } from "../../icons/Icon7";
import { IconArrowBack } from "../../icons/IconArrowBack";
import { IconAssessment } from "../../icons/IconAssessment";
import { IconLinegraph } from "../../icons/IconLinegraph";
import { IconShare } from "../../icons/IconShare";
import { ButtonBigIcon } from "../ButtonBigIcon";
import "./style.css";

export const Rows = ({
  row,
  className,
  divClassName,
  buttonBigIconSizeBigIconStateClassName,
  buttonBigIconIcon = <Icon7 className="icon-3" color="white" />,
  buttonBigIconText = "View Data",
  frameClassName,
  frameClassNameOverride,
  buttonBigIconSizeBigIconStateClassNameOverride,
  buttonBigIconDivClassName,
  override = <Icon176 className="icon-176" color="white" />,
  buttonBigIconDivClassNameOverride,
  buttonBigIconDivClassName1,
  buttonBigIconIcon1 = <Icon176 className="icon-3" color="white" />,
  visible = true,
  buttonBigIconSizeBigIconStateClassName1,
  buttonBigIconDivClassName2,
  buttonBigIconIcon2 = <Icon176 className="icon-3" color="white" />,
  buttonBigIconText1 = "Save",
  buttonBigIconSizeBigIconStateClassName2,
  buttonBigIconDivClassName3,
  buttonBigIconIcon3 = <IconShare className="icon-3" color="white" />,
  buttonBigIconIcon4 = <Icon176 className="icon-3" color="#005EA2" />,
}) => {
  return (
    <div className={`rows row-${row} ${className}`}>
      {["even", "header", "odd"].includes(row) && (
        <>
          <div className="td-first">
            <div className="data-element-name">
              {row === "odd" && <>Data Element Name</>}

              {["even", "header"].includes(row) && <>Sub Topic Name</>}
            </div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-4">Column Name</div>
          </div>
          <div className="td">
            <div className="text-wrapper-5">Description</div>
          </div>
          <div className="td-2">
            <div className="text-wrapper-6">data type</div>
          </div>
        </>
      )}

      {["codebook", "save-bar", "table-preview", "visualization-bar"].includes(row) && (
        <div className={`frame-2 ${frameClassName}`}>
          <div className={`frame-3 ${frameClassNameOverride}`}>
            {row === "save-bar" && (
              <>
                <ButtonBigIcon
                  className={buttonBigIconSizeBigIconStateClassNameOverride}
                  divClassName={buttonBigIconDivClassName}
                  icon={override}
                  size="big-icon"
                  state="default"
                  text="Definitions"
                />
                <ButtonBigIcon
                  className={buttonBigIconDivClassNameOverride}
                  divClassName={buttonBigIconDivClassName1}
                  icon={buttonBigIconIcon1}
                  size="big-icon"
                  state="default"
                  text="Meta Data"
                />
              </>
            )}

            {["codebook", "visualization-bar"].includes(row) && (
              <ButtonBigIcon
                className={`${row === "codebook" ? "class" : "button-big-icon-instance"}`}
                divClassName="button-big-icon-2"
                icon={
                  row === "codebook" ? (
                    <Icon176 className="icon-3" color="white" />
                  ) : (
                    <IconAssessment className="icon-3" color="white" />
                  )
                }
                size="big-icon"
                state="default"
                text={row === "codebook" ? "Download Code Book" : "Bar Graph"}
              />
            )}

            {row === "visualization-bar" && (
              <>
                <ButtonBigIcon
                  className="button-big-icon-instance"
                  divClassName="button-big-icon-2"
                  icon={<IconLinegraph className="icon-3" color="white" />}
                  size="big-icon"
                  state="default"
                  text="Line Graph"
                />
                <ButtonBigIcon
                  className="button-big-icon-instance"
                  divClassName="button-big-icon-2"
                  icon={<Icon165 className="icon-3" />}
                  size="big-icon"
                  state="default"
                  text="Pie Chart"
                />
                <ButtonBigIcon
                  className="button-big-icon-instance"
                  divClassName="button-big-icon-2"
                  icon={<Icon166 className="icon-3" color="white" />}
                  size="big-icon"
                  state="default"
                  text="Pie Chart"
                />
              </>
            )}

            {row === "table-preview" && <div className={`text-wrapper-7 ${divClassName}`}>Table Preview</div>}
          </div>
          <div className="frame-4">
            {["codebook", "save-bar", "visualization-bar"].includes(row) && (
              <>
                <>
                  {visible && (
                    <ButtonBigIcon
                      className="button-big-icon-3"
                      divClassName="button-big-icon-2"
                      icon={<Icon175 className="icon-3" color="white" />}
                      size="big-icon"
                      state="default"
                      text="Print"
                    />
                  )}
                </>
              </>
            )}

            <ButtonBigIcon
              className={
                row === "table-preview"
                  ? buttonBigIconSizeBigIconStateClassName
                  : buttonBigIconSizeBigIconStateClassName1
              }
              divClassName={`${row === "table-preview" ? "button-big-icon-2" : buttonBigIconDivClassName2}`}
              icon={row === "table-preview" ? buttonBigIconIcon : buttonBigIconIcon2}
              size="big-icon"
              state="default"
              text={row === "table-preview" ? buttonBigIconText : buttonBigIconText1}
            />
            {["codebook", "save-bar", "visualization-bar"].includes(row) && (
              <ButtonBigIcon
                className={buttonBigIconSizeBigIconStateClassName2}
                divClassName={buttonBigIconDivClassName3}
                icon={buttonBigIconIcon3}
                size="big-icon"
                state="default"
                text="Share"
              />
            )}
          </div>
        </div>
      )}

      {row === "print-save-share" && (
        <>
          <div className="load-more">
            <IconArrowBack className="icon-arrow-back" color="#005EA2" />
            <div className="text-wrapper-8">Back to Results</div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-5">
              <ButtonBigIcon
                className="button-big-icon-4"
                divClassName="button-big-icon-5"
                icon={<Icon175 className="icon-3" color="#005EA2" />}
                size="big-icon"
                state="default"
                text="Print"
              />
              <ButtonBigIcon
                className="button-big-icon-4"
                divClassName="button-big-icon-5"
                icon={buttonBigIconIcon4}
                size="big-icon"
                state="default"
                text="Save"
              />
              <ButtonBigIcon
                className="button-big-icon-4"
                divClassName="button-big-icon-5"
                icon={<IconShare className="icon-3" color="#005EA2" />}
                size="big-icon"
                state="default"
                text="Share"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Rows.propTypes = {
  row: PropTypes.oneOf([
    "save-bar",
    "visualization-bar",
    "print-save-share",
    "table-preview",
    "even",
    "odd",
    "header",
    "codebook",
  ]),
  buttonBigIconText: PropTypes.string,
  visible: PropTypes.bool,
  buttonBigIconText1: PropTypes.string,
};
