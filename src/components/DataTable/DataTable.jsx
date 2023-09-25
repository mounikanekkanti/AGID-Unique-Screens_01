/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cell } from "../Cell";
import { Row } from "../Row";
import "./style.css";

export const DataTable = ({
  property1,
  cellType = "category-up",
  className,
  categoryClassName,
  tableClassName,
  cellText = "2022",
  cellText1 = "2021",
  cellText2 = "2020",
  cellText3 = "2022",
  cellText4 = "2021",
  cellText5 = "2020",
  cellText6 = "2022",
  cellText7 = "2021",
  cellText8 = "2020",
}) => {
  return (
    <div className={`data-table ${property1} ${className}`}>
      <div className={`category-3 ${categoryClassName}`}>
        {["multi-year", "three-states-3-years"].includes(property1) && (
          <>
            <Cell row="odd" text2="States" type="category-up" />
            <Cell row="odd" type="years-up" />
          </>
        )}

        {property1 === "multi-year" && (
          <>
            <Cell row="odd" text2="Data Element Name" type="category-up" />
            <Cell row="odd" text2="Data Element Name" type="category-up" />
            <Cell row="odd" text2="Data Element Name" type="category-up" />
            <Cell row="odd" text2="Data Element Name" type="category-up" />
            <Cell row="odd" text2="Data Element Name" type="category-up" />
            <Cell row="odd" text2="Data Element Name" type="category-up" />
          </>
        )}

        {property1 === "three-states-3-years" && (
          <>
            <Cell className="cell-instance" row="odd" text2="Congregate Meals" type="category-up" />
            <Cell className="cell-instance" row="odd" text2="Home Delivered Meals" type="category-up" />
            <Cell className="cell-instance" row="odd" text2="Nutrition Education" type="category-up" />
          </>
        )}

        {property1 === "single-year" && (
          <>
            <Row cellText="USA - All States" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Alabama" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Alaska" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Arizona" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Arkansas" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="California" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Colorado" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Connecticut" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Delaware" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="District of Columbia" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Florida" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Georgia" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Hawaii" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Idaho" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Illinois" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Indiana" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Iowa" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Kansas" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Kentucky" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Louisiana" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Maine" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Maryland" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Massachusettes" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Michigan" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Minnesota" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Mississippi" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Missouri" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Montana" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Nebraska" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Nevada" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="New Hampshire" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="New Jersey" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="New Mexico" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="New York" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="North Carolina" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="North Dakota" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Ohio" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Oklahoma" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Oregon" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Pennsylvania" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Rhode Island" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="South Carolina" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="South Dakota" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Tennessee" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Texas" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Utah" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Vermont" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Virgina" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Washington" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="West Virginia" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Wisconsin" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Wyoming" cellText1="2023" className="row-instance" row="even" />
          </>
        )}
      </div>
      <div className={`table ${tableClassName}`}>
        {property1 === "multi-year" && (
          <>
            <Row cellText="USA - All States" cellText1="2020" className="row-instance" row="odd" />
            <Row cellText="USA - All States" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="USA - All States" cellText1="2022" className="row-instance" row="odd" />
            <Row cellText="USA - All States" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Alabama" cellText1="2020" className="row-instance" row="odd" />
            <Row cellText="Alabama" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Alabama" cellText1="2022" className="row-instance" row="odd" />
            <Row cellText="Alabama" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Alaska" cellText1="2020" className="row-instance" row="odd" />
            <Row cellText="Alaska" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Alaska" cellText1="2022" className="row-instance" row="odd" />
            <Row cellText="Alaska" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Arizona" cellText1="2020" className="row-instance" row="odd" />
            <Row cellText="Arizona" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Arizona" cellText1="2022" className="row-instance" row="odd" />
            <Row cellText="Arizona" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Arkansas" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Arkansas" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Arkansas" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Arkansas" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="California" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Colorado" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Connecticut" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Delaware" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="District of Columbia" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Florida" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Georgia" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Hawaii" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Idaho" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Illinois" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Indiana" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Iowa" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Kansas" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Kentucky" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Louisiana" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Maine" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Maryland" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Massachusettes" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Michigan" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Minnesota" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Mississippi" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Missouri" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Montana" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Nebraska" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Nevada" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="New Hampshire" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="New Jersey" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="New Mexico" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="New York" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="North Carolina" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="North Dakota" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Ohio" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Oklahoma" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Oregon" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Pennsylvania" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Rhode Island" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="South Carolina" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="South Dakota" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Tennessee" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Texas" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Utah" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Vermont" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Virgina" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Washington" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="West Virginia" cellText1="2023" className="row-instance" row="even" />
            <Row cellText="Wisconsin" cellText1="2023" className="row-instance" row="odd" />
            <Row cellText="Wyoming" cellText1="2023" className="row-instance" row="even" />
          </>
        )}

        {property1 === "three-states-3-years" && (
          <>
            <div className="row-2">
              <Cell row="odd" text="Arizona" type="state" />
              <Cell row="odd" text3={cellText} type="first-column" />
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
            </div>
            <div className="row-2">
              <Cell row="even" text="Arizona" type="state" />
              <Cell row="even" text3={cellText1} type="first-column" />
              <div className="cell-2">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="cell-2">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="cell-2">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
            </div>
            <div className="row-2">
              <Cell row="odd" text="Arizona" type="state" />
              <Cell row="odd" text3={cellText2} type="first-column" />
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
            </div>
            <div className="row-2">
              <Cell row="even" text="Colorado" type="state" />
              <Cell row="even" text3={cellText3} type="first-column" />
              <div className="cell-2">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="cell-2">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="cell-2">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
            </div>
            <div className="row-2">
              <Cell row="odd" text="Colorado" type="state" />
              <Cell row="odd" text3={cellText4} type="first-column" />
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
            </div>
            <div className="row-2">
              <Cell row="even" text="Colorado" type="state" />
              <Cell row="even" text3={cellText5} type="first-column" />
              <div className="cell-2">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="cell-2">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="cell-2">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
            </div>
            <div className="row-2">
              <Cell row="odd" text="Utah" type="state" />
              <Cell row="odd" text3={cellText6} type="first-column" />
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
            </div>
            <div className="row-2">
              <Cell row="even" text="Utah" type="state" />
              <Cell row="even" text3={cellText7} type="first-column" />
              <div className="cell-2">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="cell-2">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="cell-2">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
            </div>
            <div className="row-2">
              <Cell row="odd" text="Utah" type="state" />
              <Cell row="odd" text3={cellText8} type="first-column" />
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
              <div className="single-entry-wrapper">
                <div className="single-entry-2">
                  <div className="text-wrapper-9">Data</div>
                </div>
              </div>
            </div>
          </>
        )}

        {property1 === "single-year" && (
          <>
            <Cell row="odd" text2="States" type={cellType} />
            <Cell row="odd" type="years-up" />
            <Cell row="odd" text2="Data Element Name" type="category-up" />
            <Cell row="odd" text2="Data Element Name" type="category-up" />
            <Cell row="odd" text2="Data Element Name" type="category-up" />
            <Cell row="odd" text2="Data Element Name" type="category-up" />
            <Cell row="odd" text2="Data Element Name" type="category-up" />
            <Cell row="odd" text2="Data Element Name" type="category-up" />
          </>
        )}
      </div>
    </div>
  );
};

DataTable.propTypes = {
  property1: PropTypes.oneOf(["three-states-3-years", "multi-year", "single-year"]),
  cellType: PropTypes.string,
  cellText: PropTypes.string,
  cellText1: PropTypes.string,
  cellText2: PropTypes.string,
  cellText3: PropTypes.string,
  cellText4: PropTypes.string,
  cellText5: PropTypes.string,
  cellText6: PropTypes.string,
  cellText7: PropTypes.string,
  cellText8: PropTypes.string,
};
