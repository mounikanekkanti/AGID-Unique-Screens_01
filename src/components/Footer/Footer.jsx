/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon408 } from "../../icons/Icon408";
import { Icon81 } from "../../icons/Icon81";
import { Icon82 } from "../../icons/Icon82";
import { Icon83 } from "../../icons/Icon83";
import { Icon84 } from "../../icons/Icon84";
import { FooterPrimaryLink } from "../FooterPrimaryLink";
import { LogoBlock } from "../LogoBlock";
import "./style.css";

export const Footer = ({
  className,
  icon = <Icon82 className="icon-4" />,
  override = <Icon408 className="icon-4" />,
  icon1 = <Icon83 className="icon-4" />,
  icon2 = <Icon84 className="icon-4" />,
  returnToTopClassName,
  icon3 = <Icon81 className="icon-4" />,
  hasReturnToTop = true,
  returnToTopClassNameOverride,
}) => {
  return (
    <div className={`footer ${className}`}>
      {hasReturnToTop && (
        <div className={`return-to-top ${returnToTopClassName}`}>
          <div className={`group-wrapper ${returnToTopClassNameOverride}`}>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-10">Return to top</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="primary-links">
        <FooterPrimaryLink
          className="footer-primary-link-instance"
          divClassName="footer-primary-link-2"
          dropdown={false}
          text="Legal"
        />
        <FooterPrimaryLink
          className="footer-primary-link-instance"
          divClassName="footer-primary-link-2"
          dropdown={false}
          text="Accessibility"
        />
        <FooterPrimaryLink
          className="footer-primary-link-instance"
          divClassName="footer-primary-link-2"
          dropdown={false}
          text="Privacy"
        />
        <FooterPrimaryLink
          className="footer-primary-link-instance"
          divClassName="footer-primary-link-2"
          dropdown={false}
          text="Cookies"
        />
        <FooterPrimaryLink
          className="footer-primary-link-instance"
          divClassName="footer-primary-link-2"
          dropdown={false}
          text="Account"
        />
      </div>
      <div className="ACL">
        <LogoBlock
          footer
          header={false}
          size="desktop"
          text="Aging, Independence, and Disability (AGID) Program Data Portal"
        />
        <div className="contact-2">
          <div className="socials">
            <div className="icon-wrapper">{icon}</div>
            <div className="icon-wrapper">{override}</div>
            <div className="icon-wrapper">{icon1}</div>
            <div className="icon-wrapper">{icon2}</div>
            <div className="icon-wrapper">{icon3}</div>
          </div>
          <div className="agency-contact">
            <div className="text-wrapper-11">Contact Us</div>
            <div className="group-2">
              <div className="frame-13">
                <div className="text-wrapper-12">(202) 401-4634</div>
                <div className="text-wrapper-12">info@acl.gov</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-map">
        <div className="column-wrapper">
          <div className="column">
            <div className="discover">
              <div className="text-wrapper-13">About AGID</div>
              <div className="footer-link">
                <div className="footer-link-2">Introduction Video</div>
              </div>
              <div className="footer-link">
                <div className="footer-link-2">Tutorials</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-14">
          <div className="column">
            <div className="column">
              <div className="discover-wrapper">
                <div className="discover">
                  <div className="text-wrapper-13">Programs</div>
                  <div className="footer-link">
                    <div className="footer-link-2">All Programs</div>
                  </div>
                  <div className="footer-link">
                    <div className="footer-link-2">Center for Independent Living</div>
                  </div>
                  <div className="footer-link">
                    <div className="footer-link-2">Independent Living Services</div>
                  </div>
                  <div className="footer-link">
                    <p className="footer-link-2">Title III - State Programs</p>
                  </div>
                  <div className="footer-link">
                    <p className="footer-link-2">Title VI - Native Americans</p>
                  </div>
                  <div className="footer-link">
                    <p className="footer-link-2">Title VII - Long Term Care Ombudsman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-15">
          <div className="column">
            <div className="discover">
              <div className="text-wrapper-13">Topics</div>
              <div className="footer-link">
                <div className="footer-link-2">Topic Navigator</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-14">
          <div className="column">
            <div className="column">
              <div className="discover">
                <div className="text-wrapper-13">Data</div>
                <div className="footer-link">
                  <div className="footer-link-2">About&nbsp;&nbsp;the Data</div>
                </div>
                <div className="footer-link">
                  <p className="footer-link-2">How to Use AGID Data</p>
                </div>
                <div className="footer-link">
                  <div className="footer-link-2">Data Products</div>
                </div>
                <div className="footer-link">
                  <div className="footer-link-2">Data Sets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-15">
          <div className="column">
            <div className="discover">
              <div className="text-wrapper-13">Data Tools</div>
              <div className="footer-link">
                <p className="footer-link-2">How to Use Data Tools</p>
              </div>
              <div className="footer-link">
                <div className="footer-link-2">Compare Data</div>
              </div>
              <div className="footer-link">
                <div className="footer-link-2">Data Maps</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-15">
          <div className="column">
            <div className="discover">
              <div className="text-wrapper-13">New &amp; Resources</div>
              <div className="footer-link">
                <p className="footer-link-2">News / Briefs / Fact Sheets</p>
              </div>
              <div className="footer-link">
                <div className="footer-link-2">Release Notes</div>
              </div>
              <div className="footer-link">
                <div className="footer-link-2">Tutorials</div>
              </div>
              <div className="footer-link">
                <div className="footer-link-2">Webinars</div>
              </div>
              <div className="footer-link">
                <div className="footer-link-2">FAQ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="identifier-default">
        <div className="frame-16">
          <div className="frame-17">
            <div className="text-wrapper-14">acl.gov</div>
            <p className="p">An official website of the ACL | Administration for Community Living</p>
          </div>
          <div className="frame-18">
            <div className="frame-19">
              <div className="text-wrapper-15">About ACL</div>
              <div className="text-wrapper-16">Accessibility support</div>
            </div>
            <div className="frame-19">
              <div className="text-wrapper-15">FOIA requests</div>
              <div className="text-wrapper-16">No FEAR Act data</div>
            </div>
            <div className="frame-19">
              <p className="text-wrapper-15">Office of the Inspector General</p>
              <div className="text-wrapper-16">Performance reports</div>
            </div>
            <div className="text-wrapper-15">Privacy Policy</div>
          </div>
          <p className="looking-for-u-s">
            <span className="span">
              Looking for U.S. government information and services?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-wrapper-17">Visit USA.gov</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  hasReturnToTop: PropTypes.bool,
};
