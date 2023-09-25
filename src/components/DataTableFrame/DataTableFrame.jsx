/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon176 } from "../../icons/Icon176";
import { Icon7 } from "../../icons/Icon7";
import { IconShare } from "../../icons/IconShare";
import { DataTable } from "../DataTable";
import { Rows } from "../Rows";
import "./style.css";

export const DataTableFrame = ({
  className,
  rowsButtonBigIconIcon = <Icon7 className="icon-instance-node" color="white" />,
  override = <Icon176 className="icon-instance-node" color="#565C65" />,
  rowsButtonBigIconIcon1 = <Icon176 className="icon-save-alt" color="#565C65" />,
  rowsButtonBigIconIcon2 = <IconShare className="icon-instance-node" color="#565C65" />,
  rowsButtonBigIconIcon3 = <Icon176 className="icon-instance-node" color="#565C65" />,
}) => {
  return (
    <div className={`data-table-frame ${className}`}>
      <Rows
        buttonBigIconIcon={rowsButtonBigIconIcon}
        buttonBigIconSizeBigIconStateClassName="design-component-instance-node"
        buttonBigIconText="Data Explorer"
        className="save-bar"
        divClassName="rows-instance"
        row="table-preview"
      />
      <div className="data-table-wrapper">
        <DataTable cellType="states-up" property1="single-year" />
      </div>
      <Rows
        buttonBigIconDivClassName="save-bar-6"
        buttonBigIconDivClassName1="save-bar-7"
        buttonBigIconDivClassName2="save-bar-7"
        buttonBigIconDivClassName3="save-bar-7"
        buttonBigIconDivClassNameOverride="save-bar-5"
        buttonBigIconIcon1={rowsButtonBigIconIcon3}
        buttonBigIconIcon2={override}
        buttonBigIconIcon3={rowsButtonBigIconIcon2}
        buttonBigIconSizeBigIconStateClassName1="save-bar-8"
        buttonBigIconSizeBigIconStateClassName2="save-bar-8"
        buttonBigIconSizeBigIconStateClassNameOverride="save-bar-5"
        buttonBigIconText1="Download"
        className="save-bar-2"
        frameClassName="save-bar-3"
        frameClassNameOverride="save-bar-4"
        override={rowsButtonBigIconIcon1}
        row="save-bar"
        visible={false}
      />
    </div>
  );
};
