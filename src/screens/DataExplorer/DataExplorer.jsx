import React from "react";
import { ButtonBigIcon } from "../../components/ButtonBigIcon";
import { DataTable } from "../../components/DataTable";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Icon } from "../../components/Icon";
import { Icon176 } from "../../icons/Icon176";
import "./style.css";

export const DataExplorer = () => {
  return (
    <div className="data-explorer">
      <Header
        breadcrumbs="on"
        className="design-component-instance-node-7"
        img="/img/line-1.svg"
        line="/img/line.svg"
        line1="/img/line-2.svg"
        line2="/img/line-3.svg"
        line3="/img/line-4.svg"
        line4="/img/line-3.svg"
        navLinkText="Contact"
        quickSearchSearchGroupClassName="header-39"
        quickSearchSearchOverlapClassName="header-40"
        quickSearchSearchVector="/img/vector-87.svg"
        text="Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Data Explorer"
        version="MVP"
      />
      <div className="frame-126">
        <div className="filter-set-horiz-wrapper">
          <div className="filter-set-horiz">
            <div className="data-filter-headings-2">
              <div className="text-wrapper-185">Data Explorer</div>
              <p className="text-wrapper-186">Use the filters to create a custom query.</p>
            </div>
            <div className="frame-127">
              <div className="data-filter-headings-2">
                <div className="text-wrapper-187">Select Data Set</div>
                <p className="use-the-filters-to-5">Use the filters to select a Data Set</p>
              </div>
              <div className="filter-horiz">
                <div className="frame-128">
                  <div className="text-wrapper-188">Data Set(s)</div>
                  <div className="text-wrapper-188">[1]</div>
                </div>
                <Icon icon="arrow-forward" />
              </div>
              <div className="frame-129">
                <div className="topic-12">
                  <div className="data-element-name-5">State Performance Reports (SPR)</div>
                  <Icon icon="close" />
                </div>
              </div>
            </div>
            <div className="frame-127">
              <div className="data-filter-headings-2">
                <div className="text-wrapper-187">Select Years</div>
                <p className="use-the-filters-to-5">Use the filters to select year(s)</p>
              </div>
              <div className="filter-horiz">
                <div className="frame-128">
                  <div className="text-wrapper-188">Year(s)</div>
                  <div className="text-wrapper-188">[3]</div>
                </div>
                <Icon icon="arrow-forward" />
              </div>
              <div className="frame-129">
                <div className="topic-13">
                  <div className="data-element-name-5">2020</div>
                  <Icon icon="close" />
                </div>
                <div className="topic-14">
                  <div className="data-element-name-5">2021</div>
                  <Icon icon="close" />
                </div>
                <div className="topic-15">
                  <div className="data-element-name-5">2022</div>
                  <Icon icon="close" />
                </div>
              </div>
              <div className="frame-130">
                <div className="text-wrapper-189">Clear Selections</div>
              </div>
            </div>
            <div className="frame-127">
              <div className="data-filter-headings-2">
                <div className="text-wrapper-187">Select States &amp; Territories</div>
                <p className="use-the-filters-to-5">Use the filters to select States &amp; Territories</p>
              </div>
              <div className="filter-horiz">
                <div className="frame-128">
                  <div className="text-wrapper-188">States &amp; Territories</div>
                  <div className="text-wrapper-188">[3]</div>
                </div>
                <Icon icon="arrow-forward" />
              </div>
              <div className="frame-129">
                <div className="topic-16">
                  <div className="data-element-name-5">UT</div>
                  <Icon icon="close" />
                </div>
                <div className="topic-17">
                  <div className="data-element-name-5">CO</div>
                  <Icon icon="close" />
                </div>
                <div className="topic-15">
                  <div className="data-element-name-5">AZ</div>
                  <Icon icon="close" />
                </div>
              </div>
              <div className="frame-130">
                <div className="text-wrapper-189">Clear Selections</div>
              </div>
            </div>
            <div className="frame-127">
              <div className="data-filter-headings-2">
                <div className="text-wrapper-187">Select Data Elements</div>
                <p className="use-the-filters-to-5">Use the filters to data elements</p>
              </div>
              <div className="filter-horiz-2">
                <div className="frame-131">
                  <div className="text-wrapper-188">Data Elements</div>
                  <div className="text-wrapper-188">[3]</div>
                </div>
                <Icon icon="arrow-forward" />
              </div>
              <div className="frame-132">
                <div className="topic-18">
                  <div className="data-element-name-5">Nutrition Education</div>
                  <Icon icon="close" />
                </div>
                <div className="topic-19">
                  <div className="data-element-name-5">Home Delivered Meals</div>
                  <Icon icon="close" />
                </div>
                <div className="topic-15">
                  <div className="data-element-name-5">Congregate Meals</div>
                  <Icon icon="close" />
                </div>
              </div>
              <div className="frame-130">
                <div className="text-wrapper-189">Clear Selections</div>
              </div>
            </div>
            <div className="frame-133">
              <ButtonBigIcon
                className="button-big-icon-8"
                divClassName="button-big-icon-9"
                size="big-icon"
                state="default"
                text="Run Query"
              />
              <div className="text-wrapper-190">Clear All Selections</div>
            </div>
          </div>
        </div>
        <div className="frame-134">
          <div className="save-bar-wrapper">
            <div className="save-bar-9">
              <div className="frame-135">
                <div className="button-big-icon-wrapper">
                  <ButtonBigIcon
                    className="button-big-icon-10"
                    divClassName="button-big-icon-11"
                    size="big-icon"
                    state="default"
                    text="Table"
                  />
                </div>
                <ButtonBigIcon
                  className="button-big-icon-12"
                  divClassName="button-big-icon-13"
                  size="big-icon"
                  state="default"
                  text="Visualizations"
                />
              </div>
            </div>
          </div>
          <div className="data-table-instance-wrapper">
            <DataTable
              categoryClassName="data-table-2"
              cellText="2019"
              cellText1="2018"
              cellText2="2017"
              cellText3="2019"
              cellText4="2018"
              cellText5="2017"
              cellText6="2019"
              cellText7="2018"
              cellText8="2017"
              className="data-table-instance"
              property1="three-states-3-years"
              tableClassName="data-table-2"
            />
          </div>
        </div>
      </div>
      <div className="frame-136">
        <div className="frame-137">
          <ButtonBigIcon
            className="button-big-icon-14"
            divClassName="button-big-icon-15"
            icon={<Icon176 className="icon-158-instance" color="white" />}
            size="big-icon"
            state="default"
            text="Definitions"
          />
          <ButtonBigIcon
            className="button-big-icon-14"
            divClassName="button-big-icon-9"
            icon={<Icon176 className="icon-6" color="white" />}
            size="big-icon"
            state="default"
            text="Meta Data"
          />
        </div>
        <div className="frame-138">
          <ButtonBigIcon
            className="button-big-icon-16"
            divClassName="button-big-icon-9"
            size="big-icon"
            state="default"
            text="Print"
          />
          <ButtonBigIcon
            className="button-big-icon-16"
            divClassName="button-big-icon-9"
            icon={<Icon176 className="icon-6" color="white" />}
            size="big-icon"
            state="default"
            text="Save"
          />
          <ButtonBigIcon
            className="button-big-icon-16"
            divClassName="button-big-icon-9"
            size="big-icon"
            state="default"
            text="Share"
          />
        </div>
      </div>
      <Footer
        className="design-component-instance-node-7"
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
