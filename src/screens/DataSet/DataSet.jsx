import React from "react";
import { ArrowLink } from "../../components/ArrowLink";
import { DataTableFrame } from "../../components/DataTableFrame";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Icon176 } from "../../icons/Icon176";
import { Icon7 } from "../../icons/Icon7";
import { IconShare } from "../../icons/IconShare";
import "./style.css";

export const DataSet = () => {
  return (
    <div className="data-set">
      <Header
        breadcrumbs="on"
        className="design-component-instance-node-2"
        img="/img/line-1.svg"
        line="/img/line.svg"
        line1="/img/line-2.svg"
        line2="/img/line-3.svg"
        line3="/img/line-4.svg"
        line4="/img/line-3.svg"
        quickSearchSearchGroupClassName="header-2-0"
        quickSearchSearchOverlapClassName="header-instance"
        quickSearchSearchVector="/img/vector-9.svg"
        text="Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Data Sets&nbsp;&nbsp; &gt;&nbsp;&nbsp;Center for Independent Living"
        version="v-2"
      />
      <div className="splash">
        <div className="content-2">
          <div className="frame-20">
            <p className="text-wrapper-18">Center for Independent Living Data Set</p>
            <p className="text-wrapper-19">
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
              volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a,
              duis volutpat. Vitae nulla nunc euismod nunc euismod velpretium tellus accumsan nulla nunc euismod ve
              semper.
            </p>
          </div>
          <div className="frame-21">
            <div className="text-wrapper-20">Topics Overview</div>
            <p className="text-wrapper-21">Care Givers, Demographics, Disability, Housing, Services</p>
          </div>
          <div className="frame-22">
            <div className="frame-23">
              <div className="text-wrapper-22">Source</div>
              <div className="text-wrapper-23">ACL Disability Data</div>
            </div>
            <div className="frame-24">
              <div className="text-wrapper-24">Latest Update / Frequency</div>
              <div className="november">November 24, 2022&nbsp;&nbsp;/&nbsp;&nbsp;Yearly</div>
            </div>
          </div>
        </div>
        <img className="adobestock" alt="Adobestock" src="/img/adobestock-302145695-1.png" />
      </div>
      <div className="release-notes-wrapper">
        <div className="release-notes-2">
          <div className="frame-25">
            <div className="frame-26">
              <div className="center-for">Release Notes</div>
              <div className="card">
                <div className="calendar">
                  <div className="SEP-wrapper">
                    <div className="SEP">SEP 23</div>
                  </div>
                  <div className="group-3">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-25">2023</div>
                    </div>
                  </div>
                </div>
                <div className="content-3">
                  <p className="text-wrapper-26">Version 2.64: 2023 NSOAAP LTCOP</p>
                  <p className="this-release">
                    <span className="text-wrapper-27">
                      This release featured the addition of the 14th National Survey of OAA Participants data. Survey
                      data are available in the Custom Tables section of AGID. Additional information related to the
                      data is available in the Data Files section of AGID.
                    </span>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="calendar">
                  <div className="SEP-wrapper">
                    <div className="SEP">SEP 23</div>
                  </div>
                  <div className="group-3">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-25">2023</div>
                    </div>
                  </div>
                </div>
                <div className="content-3">
                  <p className="text-wrapper-26">Version 2.64: 2023 NSOAAP LTCOP</p>
                  <p className="this-release">
                    <span className="text-wrapper-27">
                      This release featured the addition of the 14th National Survey of OAA Participants data. Survey
                      data are available in the Custom Tables section of AGID. Additional information related to the
                      data is available in the Data Files section of AGID.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="release-notes-3">
              <div className="text-wrapper-28">Archives</div>
              <p className="version">
                Version 2.3: 2019 National Survey of Older Americans Act Participants
                <br />
                Version 2.1: 2019 Long-Term Care Ombudsman Programs
                <br />
                Version 1.9: 2019 National Survey of Older Americans Act Participants
                <br />
                Version 2.1: 2019 Long-Term Care Ombudsman Programs
                <br />
                Version 1.9: 2019 National Survey of Older Americans Act Participants
                <br />
                Version 1.9: 2019 National Survey of Older Americans Act Participants
              </p>
              <div className="arrow-link-wrapper">
                <ArrowLink
                  className="design-component-instance-node-2"
                  divClassName="arrow-link-instance"
                  iconClassName="arrow-link-2"
                  text="View All Release Notes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-27">
        <div className="title-and-blurb">
          <div className="title">
            <div className="text-wrapper-29">Data Set</div>
            <p className="text-wrapper-30">Centers for Independent Living Data Set</p>
          </div>
          <p className="text-wrapper-31">
            Below is a view of the entire State Program Reports (SPR) Data Set. To create a custom query, click the
            “Data Explorer View” button on the top right of the table. You will then be taken to a larger view of the
            Data Set where you can customize the table to fit your needs.
          </p>
        </div>
        <DataTableFrame
          className="data-table-frame-instance"
          override={<Icon176 className="icon-5" color="#565C65" />}
          rowsButtonBigIconIcon={<Icon7 className="icon-5" color="white" />}
          rowsButtonBigIconIcon1={<Icon176 className="icon-74" color="#565C65" />}
          rowsButtonBigIconIcon2={<IconShare className="icon-5" color="#565C65" />}
          rowsButtonBigIconIcon3={<Icon176 className="icon-5" color="#565C65" />}
        />
      </div>
      <Footer className="footer-1920" />
    </div>
  );
};
