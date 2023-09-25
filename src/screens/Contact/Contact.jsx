import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Icon } from "../../components/Icon";
import "./style.css";

export const Contact = () => {
  return (
    <div className="contact">
      <Header
        breadcrumbs="on"
        className="design-component-instance-node-5"
        img="/img/line-1.svg"
        line="/img/line.svg"
        line1="/img/line-2.svg"
        line2="/img/line-3.svg"
        line3="/img/line-4.svg"
        line4="/img/line-3.svg"
        navLinkText="Contact Us"
        quickSearchSearchGroupClassName="header-31"
        quickSearchSearchOverlapClassName="header-32"
        quickSearchSearchVector="/img/vector-87.svg"
        text="Home&nbsp;&nbsp;&gt; Contact"
        version="v-2"
      />
      <div className="intro-3">
        <div className="left-8">
          <div className="release-notes-data-wrapper">
            <div className="release-notes-data-3">Contact &amp; Support</div>
          </div>
          <div className="content-13">
            <p className="text-wrapper-158">
              The AGing, Independence, and Disability (AGID) Program Data Portal is an on-line query system based on
              ACL-related data files and surveys, and includes population characteristics from the Census Bureau for
              comparison purposes. Data Portal is an on-line query system based on ACL-related data files and surveys,
              and includes population characteristics from the Census Bureau for comparison purposes.
            </p>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="frame-106">
          <p className="text-wrapper-159">Email feedback, requests and comments to:</p>
          <div className="text-wrapper-160">contact@AGID.gov</div>
          <p className="text-wrapper-161">
            An ACL representative will read your message and respond to your email in 1-5 business days.
          </p>
        </div>
        <div className="frame-107">
          <div className="contact-partners">Contact &amp; Partners</div>
          <div className="contact-block">
            <div className="text-wrapper-162">AGID Related Inquiries</div>
            <p className="text-wrapper-163">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus, placerat a euismod a, fringilla
              in felis. Phasellus porta dui et magna pretium, sit amet venenatis lacus dictum.
            </p>
            <div className="text-wrapper-164">webaddress.gov</div>
            <a className="text-wrapper-165" href="mailto:email@addess.gov" rel="noopener noreferrer" target="_blank">
              email@addess.gov
            </a>
            <div className="text-wrapper-165">(123) 456-7890</div>
          </div>
          <div className="contact-block">
            <div className="text-wrapper-162">ACL</div>
            <p className="text-wrapper-163">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus, placerat a euismod a, fringilla
              in felis. Phasellus porta dui et magna pretium, sit amet venenatis lacus dictum.
            </p>
            <div className="text-wrapper-164">webaddress.gov</div>
            <a className="text-wrapper-165" href="mailto:email@addess.gov" rel="noopener noreferrer" target="_blank">
              email@addess.gov
            </a>
            <div className="text-wrapper-165">(123) 456-7890</div>
          </div>
          <div className="contact-block">
            <div className="text-wrapper-162">Eldercare Locator</div>
            <p className="text-wrapper-163">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus, placerat a euismod a, fringilla
              in felis. Phasellus porta dui et magna pretium, sit amet venenatis lacus dictum.
            </p>
            <div className="text-wrapper-164">eldercare.acl.gov</div>
            <div className="text-wrapper-165">email@address.gov</div>
            <div className="text-wrapper-165">800-677-1116</div>
          </div>
          <div className="contact-block">
            <div className="text-wrapper-162">Census</div>
            <p className="text-wrapper-163">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus, placerat a euismod a, fringilla
              in felis. Phasellus porta dui et magna pretium, sit amet venenatis lacus dictum.
            </p>
            <div className="text-wrapper-164">webaddress.gov</div>
            <div className="text-wrapper-165">eldercare.acl.gov</div>
            <div className="text-wrapper-165">800-677-1116</div>
          </div>
        </div>
      </div>
      <Footer
        className="design-component-instance-node-5"
        hasReturnToTop={false}
        icon={<Icon icon="facebook" />}
        icon1={<Icon icon="youtube" />}
        icon2={<Icon icon="instagram" />}
        icon3={<Icon icon="rss-feed" />}
        override={<Icon icon="twitter" />}
      />
    </div>
  );
};
