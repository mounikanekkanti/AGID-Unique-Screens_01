/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LogoBlock } from "../LogoBlock";
import { NavLink } from "../NavLink";
import { QuickSearch } from "../QuickSearch";
import { TopBanner } from "../TopBanner";
import "./style.css";

export const Header = ({
  breadcrumbs,
  version,
  className,
  quickSearchSearchGroupClassName,
  quickSearchSearchOverlapClassName,
  quickSearchSearchVector = "/img/vector-27.svg",
  line = "/img/line-2.svg",
  img = "/img/line-7.svg",
  line1 = "/img/line-8.svg",
  line2 = "/img/line-15.svg",
  line3 = "/img/line-16.svg",
  line4 = "/img/line-15.svg",
  text = "Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Programs&nbsp;&nbsp; &gt;&nbsp;&nbsp;Center for Independent Living",
  topBannerUsFlagSmall = "/img/us-flag-small.png",
  hasFrame = true,
  frameClassName,
  navLinkText = "Contact",
}) => {
  return (
    <div className={`header ${className}`}>
      <TopBanner
        className="instance-node-2"
        usFlagSmall={breadcrumbs === "off" ? "/img/us-flag-small.png" : topBannerUsFlagSmall}
      />
      <div className="top-menu">
        <div className="right-side-menu">
          <NavLink
            className="nav-link-2"
            current={false}
            divClassName="nav-link-instance"
            frameClassName="nav-link-3"
            state="normal"
            text="Help"
            type="link"
          />
          <NavLink
            className="nav-link-2"
            current={false}
            divClassName="nav-link-instance"
            frameClassName="nav-link-3"
            state="normal"
            text={breadcrumbs === "on" ? navLinkText : "Contact"}
            type="link"
          />
        </div>
      </div>
      <div className="logo-and-search">
        <LogoBlock
          className="instance-node-2"
          footer={false}
          header
          size="desktop"
          text="Aging, Independence, and Disability (AGID) Data Portal"
        />
        <div className="spacer" />
        <QuickSearch
          className="quick-search-instance"
          divClassName="quick-search-3"
          searchGroupClassName={
            breadcrumbs === "on"
              ? quickSearchSearchGroupClassName
              : {
                  left: "384px",
                }
          }
          searchOverlapClassName={
            breadcrumbs === "on"
              ? quickSearchSearchOverlapClassName
              : {
                  width: "433px",
                }
          }
          searchRectangleClassName="quick-search-2"
          searchVector={breadcrumbs === "on" ? quickSearchSearchVector : "/img/vector-27.svg"}
        />
      </div>
      <div className="main-menu">
        <img className="line" alt="Line" src={breadcrumbs === "on" ? line : "/img/line-2.svg"} />
        <img className="line" alt="Line" src={breadcrumbs === "on" ? img : "/img/line-7.svg"} />
        <div className="main-menu">
          <img className="line" alt="Line" src={breadcrumbs === "on" ? line1 : "/img/line-8.svg"} />
          <img
            className="line"
            alt="Line"
            src={
              breadcrumbs === "off" && version === "MVP"
                ? "/img/line-15.svg"
                : breadcrumbs === "on"
                ? line2
                : "/img/line-9.svg"
            }
          />
          <div className="main-menu">
            <img
              className="line"
              alt="Line"
              src={
                breadcrumbs === "off" && version === "MVP"
                  ? "/img/line-16.svg"
                  : breadcrumbs === "on"
                  ? line3
                  : "/img/line-10.svg"
              }
            />
            <div className="menu-wrapper">
              <div className="menu">
                <NavLink
                  className="nav-link-4"
                  current={false}
                  divClassNameOverride="nav-link-5"
                  state="normal"
                  text1="Home"
                  type="accordion"
                  visible={false}
                />
                <div className="nav-link-wrapper">
                  <NavLink
                    className="nav-link-6"
                    current={false}
                    divClassNameOverride="nav-link-5"
                    state="normal"
                    text1="Release Notes"
                    type="accordion"
                    visible={false}
                  />
                </div>
                <NavLink
                  className="nav-link-4"
                  current={false}
                  divClassNameOverride="nav-link-5"
                  state="normal"
                  text1="Search by Topics"
                  type="accordion"
                />
                <NavLink
                  className="nav-link-4"
                  current={false}
                  divClassNameOverride="nav-link-5"
                  state="normal"
                  text1="Data Sets"
                  type="accordion"
                />
                <NavLink
                  className="nav-link-4"
                  current={false}
                  divClassNameOverride="nav-link-5"
                  state="normal"
                  text1="Data Explorer"
                  type="accordion"
                  visible={false}
                />
                <NavLink
                  className="nav-link-4"
                  current={false}
                  divClassNameOverride="nav-link-5"
                  state="normal"
                  text1="Reports"
                  type="accordion"
                />
                <div className="nav-link-instance-wrapper">
                  <NavLink
                    className="nav-link-6"
                    current={false}
                    divClassNameOverride="nav-link-5"
                    state="normal"
                    text1="Resources"
                    type="accordion"
                  />
                </div>
              </div>
            </div>
            <img
              className="line-2"
              alt="Line"
              src={
                breadcrumbs === "off" && version === "MVP"
                  ? "/img/line-15.svg"
                  : breadcrumbs === "on"
                  ? line4
                  : "/img/line-9.svg"
              }
            />
          </div>
        </div>
      </div>
      {breadcrumbs === "on" && (
        <>
          <>
            {hasFrame && (
              <div className={`home-programs-center-wrapper ${frameClassName}`}>
                <p className="home-programs-center">{text}</p>
              </div>
            )}
          </>
        </>
      )}
    </div>
  );
};

Header.propTypes = {
  breadcrumbs: PropTypes.oneOf(["off", "on"]),
  version: PropTypes.oneOf(["v-2", "MVP"]),
  quickSearchSearchVector: PropTypes.string,
  line: PropTypes.string,
  img: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string,
  line4: PropTypes.string,
  text: PropTypes.string,
  topBannerUsFlagSmall: PropTypes.string,
  hasFrame: PropTypes.bool,
  navLinkText: PropTypes.string,
};
