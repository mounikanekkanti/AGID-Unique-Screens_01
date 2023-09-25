/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon2 } from "../../icons/Icon2";
import { Icon350 } from "../../icons/Icon350";
import { Icon353 } from "../../icons/Icon353";
import { Icon357 } from "../../icons/Icon357";
import { Icon359 } from "../../icons/Icon359";
import { Icon63 } from "../../icons/Icon63";
import { IconArrowDownward } from "../../icons/IconArrowDownward";
import { IconArrowDropUp } from "../../icons/IconArrowDropUp";
import { IconArrowUpward } from "../../icons/IconArrowUpward";
import { IconPushPin } from "../../icons/IconPushPin";
import "./style.css";

export const Cell = ({
  type,
  row,
  text = "State",
  className,
  divClassName,
  text1 = "Data",
  frameClassName,
  text2 = "Data Element Name",
  text3 = "2023",
}) => {
  return (
    <div className={`cell ${type} ${row} ${className}`}>
      {["category-up", "data", "first-column", "state", "states-up", "years-up"].includes(type) && (
        <div className={`state-2 ${frameClassName}`}>
          {type === "state" && <>{text}</>}

          {["category-up", "first-column"].includes(type) && (
            <>
              <div className="element">
                {type === "first-column" && <>{text3}</>}

                {type === "category-up" && (
                  <>
                    <Icon63 className="vector" color="#A9AEB1" />
                    <div className="data-element-name-2">{text2}</div>
                  </>
                )}
              </div>
              <IconArrowDropUp className="vector" color="#A9AEB1" />
            </>
          )}

          {type === "data" && <div className={`data-2 ${divClassName}`}>{text1}</div>}

          {["states-up", "years-up"].includes(type) && (
            <>
              <div className="states-wrapper">
                <div className="states">
                  {type === "states-up" && <>States</>}

                  {type === "years-up" && <>Year(s)</>}
                </div>
              </div>
              <Icon2 className="vector" color="#A9AEB1" />
            </>
          )}
        </div>
      )}

      {["category-down", "states-down", "years-down"].includes(type) && (
        <>
          <div className="frame-6">
            <div className="frame-7">
              {type === "category-down" && <Icon63 className="vector" color="#A9AEB1" />}

              <div className="category">
                {type === "category-down" && <>Category</>}

                {type === "states-down" && <>States</>}

                {type === "years-down" && <>Year(s)</>}
              </div>
            </div>
            {["states-down", "years-down"].includes(type) && <Icon350 className="vector" color="#A9AEB1" />}

            {type === "category-down" && <Icon353 className="vector" color="#A9AEB1" />}
          </div>
          <div className="states-drop">
            {["states-down", "years-down"].includes(type) && (
              <>
                <div className="frame-8">
                  {type === "states-down" && (
                    <>
                      <div className="frame-9">
                        <div className="frame-10">
                          <div className="single-entry">
                            <div className="category-2">Sort Ascending</div>
                          </div>
                          <IconArrowDownward className="vector" color="#3D4551" />
                        </div>
                        <div className="frame-10">
                          <div className="single-entry">
                            <div className="category-2">Sort Descending</div>
                          </div>
                          <IconArrowUpward className="vector" color="#3D4551" />
                        </div>
                      </div>
                      <img className="divider" alt="Divider" src="/img/divider.svg" />
                      <div className="option">
                        <div className="text">
                          <div className="checkbox">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="checkbox-item-wrapper">
                              <div className="checkbox-item">select all</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-2" alt="Divider" src="/img/divider-1.svg" />
                      </div>
                      <div className="option">
                        <div className="text">
                          <div className="checkbox">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="checkbox-item-wrapper">
                              <div className="checkbox-item">USA - All States</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-2" alt="Divider" src="/img/divider-1.svg" />
                      </div>
                      <div className="option">
                        <div className="text">
                          <div className="checkbox">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="checkbox-item-wrapper">
                              <div className="checkbox-item">Alabama</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-2" alt="Divider" src="/img/divider-1.svg" />
                      </div>
                      <div className="option">
                        <div className="text">
                          <div className="checkbox">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="checkbox-item-wrapper">
                              <div className="checkbox-item">Alaska</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-2" alt="Divider" src="/img/divider-1.svg" />
                      </div>
                      <div className="option">
                        <div className="text">
                          <div className="checkbox">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="checkbox-item-wrapper">
                              <div className="checkbox-item">Arizona</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-2" alt="Divider" src="/img/divider-1.svg" />
                      </div>
                      <div className="option">
                        <div className="text">
                          <div className="checkbox">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="checkbox-item-wrapper">
                              <div className="checkbox-item">Arkansas</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-2" alt="Divider" src="/img/divider-1.svg" />
                      </div>
                      <div className="option">
                        <div className="text">
                          <div className="checkbox">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="checkbox-item-wrapper">
                              <div className="checkbox-item">California</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-2" alt="Divider" src="/img/divider-1.svg" />
                      </div>
                      <div className="option">
                        <div className="text">
                          <div className="checkbox">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="checkbox-item-wrapper">
                              <div className="checkbox-item">Colorado</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-2" alt="Divider" src="/img/divider-1.svg" />
                      </div>
                      <div className="option">
                        <div className="text">
                          <div className="checkbox">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="checkbox-item-wrapper">
                              <div className="checkbox-item">Connecticut</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-2" alt="Divider" src="/img/divider-1.svg" />
                      </div>
                      <div className="option">
                        <div className="text">
                          <div className="checkbox">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="checkbox-item-wrapper">
                              <div className="checkbox-item">Delaware</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-2" alt="Divider" src="/img/divider-1.svg" />
                      </div>
                      <div className="option">
                        <div className="text">
                          <div className="checkbox">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="checkbox-item-wrapper">
                              <div className="checkbox-item">District of Columbia</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-2" alt="Divider" src="/img/divider-1.svg" />
                      </div>
                      <div className="option-2">
                        <div className="text">
                          <div className="checkbox">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="checkbox-item-wrapper">
                              <div className="checkbox-item">Florida</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {type === "years-down" && <div className="drag-bar" />}
                </div>
                <div className="scroll-bar">
                  {type === "states-down" && <div className="drag-bar" />}

                  {type === "years-down" && (
                    <>
                      <div className="option-3">
                        <div className="text">
                          <div className="checkbox-2">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="frame-11">
                              <div className="checkbox-item-2">select all</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-3" alt="Divider" src="/img/divider-12.svg" />
                      </div>
                      <div className="option-3">
                        <div className="text">
                          <div className="checkbox-2">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="frame-11">
                              <div className="checkbox-item-2">{text3}</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-3" alt="Divider" src="/img/divider-12.svg" />
                      </div>
                      <div className="option-3">
                        <div className="text">
                          <div className="checkbox-2">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="frame-11">
                              <div className="checkbox-item-2">2022</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-3" alt="Divider" src="/img/divider-12.svg" />
                      </div>
                      <div className="option-3">
                        <div className="text">
                          <div className="checkbox-2">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="frame-11">
                              <div className="checkbox-item-2">2021</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-3" alt="Divider" src="/img/divider-12.svg" />
                      </div>
                      <div className="option-3">
                        <div className="text">
                          <div className="checkbox-2">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="frame-11">
                              <div className="checkbox-item-2">2020</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-3" alt="Divider" src="/img/divider-12.svg" />
                      </div>
                      <div className="option-3">
                        <div className="text">
                          <div className="checkbox-2">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="frame-11">
                              <div className="checkbox-item-2">2019</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-3" alt="Divider" src="/img/divider-12.svg" />
                      </div>
                      <div className="option-3">
                        <div className="text">
                          <div className="checkbox-2">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="frame-11">
                              <div className="checkbox-item-2">2018</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-3" alt="Divider" src="/img/divider-12.svg" />
                      </div>
                      <div className="option-3">
                        <div className="text">
                          <div className="checkbox-2">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="frame-11">
                              <div className="checkbox-item-2">2017</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-3" alt="Divider" src="/img/divider-12.svg" />
                      </div>
                      <div className="option-3">
                        <div className="text">
                          <div className="checkbox-2">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="frame-11">
                              <div className="checkbox-item-2">2016</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-3" alt="Divider" src="/img/divider-12.svg" />
                      </div>
                      <div className="option-3">
                        <div className="text">
                          <div className="checkbox-2">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="frame-11">
                              <div className="checkbox-item-2">2015</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-3" alt="Divider" src="/img/divider-12.svg" />
                      </div>
                      <div className="option-3">
                        <div className="text">
                          <div className="checkbox-2">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="frame-11">
                              <div className="checkbox-item-2">2014</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-3" alt="Divider" src="/img/divider-12.svg" />
                      </div>
                      <div className="option-3">
                        <div className="text">
                          <div className="checkbox-2">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="frame-11">
                              <div className="checkbox-item-2">2013</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-3" alt="Divider" src="/img/divider-12.svg" />
                      </div>
                      <div className="option-3">
                        <div className="text">
                          <div className="checkbox-2">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="frame-11">
                              <div className="checkbox-item-2">2012</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-3" alt="Divider" src="/img/divider-12.svg" />
                      </div>
                      <div className="option-3">
                        <div className="text">
                          <div className="checkbox-2">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <div className="frame-11">
                              <div className="checkbox-item-2">2011</div>
                            </div>
                          </div>
                        </div>
                        <img className="divider-3" alt="Divider" src="/img/divider-12.svg" />
                      </div>
                      <img className="option-4" alt="Option" src="/img/option.svg" />
                      <img className="option-4" alt="Option" src="/img/option.svg" />
                    </>
                  )}
                </div>
              </>
            )}

            {type === "category-down" && (
              <>
                <div className="frame-12">
                  <div className="single-entry">
                    <div className="category-2">Sort Ascending</div>
                  </div>
                  <IconArrowDownward className="vector" color="#3D4551" />
                </div>
                <div className="frame-12">
                  <div className="single-entry">
                    <div className="category-2">Sort Descending</div>
                  </div>
                  <IconArrowUpward className="vector" color="#3D4551" />
                </div>
                <div className="frame-12">
                  <div className="single-entry">
                    <div className="category-2">Hide</div>
                  </div>
                  <Icon357 className="vector" color="#3D4551" />
                </div>
                <div className="frame-12">
                  <div className="single-entry">
                    <div className="category-2">Pin</div>
                  </div>
                  <IconPushPin className="vector" color="#3D4551" />
                </div>
                <div className="frame-12">
                  <div className="single-entry">
                    <div className="category-2">Definition</div>
                  </div>
                  <Icon359 className="vector" color="#3D4551" />
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

Cell.propTypes = {
  type: PropTypes.oneOf([
    "state",
    "states-down",
    "category-up",
    "states-up",
    "years-down",
    "data",
    "first-column",
    "years-up",
    "category-down",
  ]),
  row: PropTypes.oneOf(["even", "odd"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};
