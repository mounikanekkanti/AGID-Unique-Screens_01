import React from "react";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Icon } from "../../components/Icon";
import "./style.css";

export const TopicNavigatorgrid = () => {
  return (
    <div className="topic-navigatorgrid">
      <Header
        breadcrumbs="on"
        className="header-3"
        img="/img/line-1.svg"
        line="/img/line.svg"
        line1="/img/line-2.svg"
        line2="/img/line-3.svg"
        line3="/img/line-4.svg"
        line4="/img/line-3.svg"
        quickSearchSearchGroupClassName="header-4"
        quickSearchSearchOverlapClassName="header-5"
        quickSearchSearchVector="/img/vector-36.svg"
        text="Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Search by Topics"
        version="MVP"
      />
      <div className="div-5">
        <div className="left-3">
          <div className="div-6">
            <div className="state-profiles">Search by Topics</div>
          </div>
          <div className="content-8">
            <p className="text-wrapper-61">
              The AGing, Independence, and Disability (AGID) Program Data Portal is an on-line query system based on
              ACL-related data files and surveys, and includes population characteristics from the Census Bureau for
              comparison purposes. Data Portal is an on-line query system based on ACL-related data files and surveys,
              and includes population characteristics from the Census Bureau for comparison purposes.
            </p>
          </div>
        </div>
      </div>
      <div className="standard-topics">
        <div className="topic-navigator">
          <div className="topic-filters">
            <div className="text-wrapper-62">Search for Content</div>
            <p className="text-wrapper-63">Use the filters below to search for content.</p>
            <div className="frame-36">
              <div className="date-input">
                <div className="text-input">
                  <div className="text-input-label">Start Data</div>
                  <div className="input-2" />
                </div>
                <div className="icon-instance-wrapper">
                  <ConcreteComponentNode icon="calendar-today" />
                </div>
              </div>
              <div className="date-input">
                <div className="text-input">
                  <div className="text-input-label">End Data</div>
                  <div className="input-2" />
                </div>
                <div className="icon-instance-wrapper">
                  <ConcreteComponentNode icon="calendar-today" />
                </div>
              </div>
            </div>
            <div className="topic-filter">
              <div className="div-7">
                <div className="select-data-set">Select Topics and Sub-topics</div>
                <p className="use-the-filters-to">Use the filters to show related content</p>
              </div>
              <div className="quick-search-filter">
                <div className="div-7">
                  <p className="text-wrapper-64">Type to filter topics (132)</p>
                  <img className="vector-3" alt="Vector" src="/img/vector-39.svg" />
                </div>
              </div>
              <div className="div-6">
                <div className="topic">
                  <div className="frame-37">
                    <div className="text-wrapper-65">Content Types</div>
                    <div className="text-wrapper-66">[8/8]</div>
                    <Icon icon="add" />
                  </div>
                </div>
                <div className="div-6">
                  <div className="div-6">
                    <div className="topic-wrapper">
                      <div className="topic-2">
                        <div className="data-element-name-3">All Content Types</div>
                        <Icon icon="close" />
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-67">Clear Selections</div>
                </div>
              </div>
              <div className="data-element">
                <div className="topic-3">
                  <div className="frame-37">
                    <div className="text-wrapper-65">Geography</div>
                    <div className="text-wrapper-66">[0/3]</div>
                    <Icon icon="add" />
                  </div>
                </div>
              </div>
              <div className="data-element">
                <div className="topic-3">
                  <div className="frame-37">
                    <div className="text-wrapper-65">Services</div>
                    <div className="text-wrapper-66">[0/43]</div>
                    <Icon icon="add" />
                  </div>
                </div>
              </div>
              <div className="data-element-2">
                <div className="topic-3">
                  <div className="frame-37">
                    <div className="text-wrapper-65">Programs</div>
                    <div className="text-wrapper-66">[0/59]</div>
                    <Icon icon="add" />
                  </div>
                </div>
              </div>
              <div className="data-element">
                <div className="topic-3">
                  <div className="frame-37">
                    <div className="text-wrapper-65">Demographics</div>
                    <div className="text-wrapper-66">[0/86]</div>
                    <Icon icon="add" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-38">
            <div className="frame-39">
              <div className="types-and-sort">
                <div className="text-wrapper-68">76 Results</div>
                <div className="view">
                  <div className="results-filter">
                    <div className="check-label">
                      <div className="text-wrapper-69">List View</div>
                      <Icon icon="list" />
                    </div>
                  </div>
                  <div className="check-label-wrapper">
                    <div className="check-label">
                      <div className="text-wrapper-70">Grid View</div>
                      <Icon icon="grid-view" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sort-by">
                <div className="text-wrapper-71">Sort by Type</div>
                <Icon icon="arrow-drop-up" />
              </div>
            </div>
            <div className="frame-40">
              <div className="div-8">
                <div className="topic-card-grid">
                  <div className="frame-41">
                    <div className="div-6">
                      <div className="frame-42">
                        <div className="text-wrapper-72">Data Set</div>
                        <p className="text-wrapper-73">American Community Survey (ACS) Special Tabulations on Aging</p>
                      </div>
                      <p className="text-wrapper-63">
                        Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere, Aliquam
                        scelerisque fringilla diam.
                      </p>
                    </div>
                    <div className="frame-43">
                      <div className="frame-42">
                        <div className="text-wrapper-74">Years</div>
                        <div className="text-wrapper-75">2019-2022</div>
                      </div>
                      <div className="frame-44">
                        <div className="text-wrapper-74">Topics</div>
                        <p className="text-wrapper-63">Aging, Elder Care, Meal Services, Community Living</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="topic-card-grid">
                  <div className="frame-41">
                    <div className="div-6">
                      <div className="frame-42">
                        <div className="text-wrapper-72">Data Set</div>
                        <p className="text-wrapper-73">American Community Survey (ACS) Special Tabulations on Aging</p>
                      </div>
                      <p className="text-wrapper-63">
                        Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere, Aliquam
                        scelerisque fringilla diam.
                      </p>
                    </div>
                    <div className="frame-43">
                      <div className="frame-42">
                        <div className="text-wrapper-74">Years</div>
                        <div className="text-wrapper-75">2019-2022</div>
                      </div>
                      <div className="frame-44">
                        <div className="text-wrapper-74">Topics</div>
                        <p className="text-wrapper-63">Aging, Elder Care, Meal Services, Community Living</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="topic-card-grid">
                  <div className="frame-41">
                    <div className="div-6">
                      <div className="frame-42">
                        <div className="text-wrapper-72">Data Set</div>
                        <p className="text-wrapper-73">American Community Survey (ACS) Special Tabulations on Aging</p>
                      </div>
                      <p className="text-wrapper-63">
                        Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere, Aliquam
                        scelerisque fringilla diam.
                      </p>
                    </div>
                    <div className="frame-43">
                      <div className="frame-42">
                        <div className="text-wrapper-74">Years</div>
                        <div className="text-wrapper-75">2019-2022</div>
                      </div>
                      <div className="frame-44">
                        <div className="text-wrapper-74">Topics</div>
                        <p className="text-wrapper-63">Aging, Elder Care, Meal Services, Community Living</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-8">
                <div className="topic-card-grid-2">
                  <div className="frame-45">
                    <div className="div-6">
                      <div className="frame-42">
                        <div className="text-wrapper-72">Data Report</div>
                        <div className="text-wrapper-76">Data Report Name</div>
                      </div>
                      <p className="text-wrapper-63">
                        Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere, Aliquam
                        scelerisque fringilla diam.
                      </p>
                    </div>
                    <div className="frame-43">
                      <div className="frame-42">
                        <div className="text-wrapper-77">Years</div>
                        <div className="text-wrapper-75">2019-2022</div>
                      </div>
                      <div className="frame-44">
                        <div className="text-wrapper-77">Topics</div>
                        <p className="text-wrapper-63">Aging, Elder Care, Meal Services, Community Living</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="topic-card-grid-2">
                  <div className="frame-45">
                    <div className="div-6">
                      <div className="frame-42">
                        <div className="text-wrapper-72">Data Report</div>
                        <div className="text-wrapper-76">Data Report Name</div>
                      </div>
                      <p className="text-wrapper-63">
                        Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere, Aliquam
                        scelerisque fringilla diam.
                      </p>
                    </div>
                    <div className="frame-43">
                      <div className="frame-42">
                        <div className="text-wrapper-77">Years</div>
                        <div className="text-wrapper-75">2019-2022</div>
                      </div>
                      <div className="frame-44">
                        <div className="text-wrapper-77">Topics</div>
                        <p className="text-wrapper-63">Aging, Elder Care, Meal Services, Community Living</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="topic-card-grid-3">
                  <div className="frame-45">
                    <div className="div-6">
                      <div className="frame-42">
                        <div className="text-wrapper-72">Codebook</div>
                        <p className="text-wrapper-76">National Survey of Older Americans Act Participants (NSOAAP)</p>
                      </div>
                      <p className="text-wrapper-63">
                        Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere, Aliquam
                        scelerisque fringilla diam.
                      </p>
                    </div>
                    <div className="frame-43">
                      <div className="frame-42">
                        <div className="text-wrapper-77">Years</div>
                        <div className="text-wrapper-75">2019-2022</div>
                      </div>
                      <div className="frame-42">
                        <div className="text-wrapper-77">Data Set</div>
                        <div className="text-wrapper-75">NSOAAP</div>
                      </div>
                    </div>
                    <div className="div-5">
                      <div className="text-wrapper-72">Download Codebook:</div>
                      <div className="div-8">
                        <div className="text-wrapper-78">PDF</div>
                        <div className="text-wrapper-78">DOCX</div>
                        <div className="text-wrapper-78">CSV</div>
                        <div className="text-wrapper-78">XLSML</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-8">
                <div className="topic-card-grid-2">
                  <div className="frame-45">
                    <div className="div-6">
                      <div className="frame-42">
                        <div className="text-wrapper-72">Release Notes</div>
                        <p className="text-wrapper-76">Version 2.64: 2023 NSOAAP LTCOP</p>
                      </div>
                      <p className="text-wrapper-63">
                        Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere, Aliquam
                        scelerisque fringilla diam.
                      </p>
                    </div>
                    <div className="frame-43">
                      <div className="frame-42">
                        <div className="text-wrapper-77">Date</div>
                        <div className="text-wrapper-75">1/24/23</div>
                      </div>
                      <div className="frame-42">
                        <div className="text-wrapper-77">Data Set</div>
                        <div className="text-wrapper-75">ACL Special Tabulations</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="topic-card-grid-2">
                  <div className="frame-45">
                    <div className="div-6">
                      <div className="frame-42">
                        <div className="text-wrapper-72">Release Notes</div>
                        <p className="text-wrapper-76">Version 2.64: 2023 NSOAAP LTCOP</p>
                      </div>
                      <p className="text-wrapper-63">
                        Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere, Aliquam
                        scelerisque fringilla diam.
                      </p>
                    </div>
                    <div className="frame-43">
                      <div className="frame-42">
                        <div className="text-wrapper-77">Date</div>
                        <div className="text-wrapper-75">1/24/23</div>
                      </div>
                      <div className="frame-42">
                        <div className="text-wrapper-77">Data Set</div>
                        <div className="text-wrapper-75">ACL Special Tabulations</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="topic-card-grid-3">
                  <div className="frame-45">
                    <div className="div-6">
                      <div className="frame-42">
                        <div className="text-wrapper-72">Codebook</div>
                        <p className="text-wrapper-76">National Survey of Older Americans Act Participants (NSOAAP)</p>
                      </div>
                      <p className="text-wrapper-63">
                        Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere, Aliquam
                        scelerisque fringilla diam.
                      </p>
                    </div>
                    <div className="frame-43">
                      <div className="frame-42">
                        <div className="text-wrapper-77">Years</div>
                        <div className="text-wrapper-75">2019-2022</div>
                      </div>
                      <div className="frame-42">
                        <div className="text-wrapper-77">Data Set</div>
                        <div className="text-wrapper-75">NSOAAP</div>
                      </div>
                    </div>
                    <div className="div-5">
                      <div className="text-wrapper-72">Download Codebook:</div>
                      <div className="div-8">
                        <div className="text-wrapper-78">PDF</div>
                        <div className="text-wrapper-78">DOCX</div>
                        <div className="text-wrapper-78">CSV</div>
                        <div className="text-wrapper-78">XLSML</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-8">
                <div className="topic-card-grid-3">
                  <div className="frame-45">
                    <div className="div-6">
                      <div className="frame-42">
                        <div className="text-wrapper-72">Codebook</div>
                        <p className="text-wrapper-76">National Survey of Older Americans Act Participants (NSOAAP)</p>
                      </div>
                      <p className="text-wrapper-63">
                        Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere, Aliquam
                        scelerisque fringilla diam.
                      </p>
                    </div>
                    <div className="frame-43">
                      <div className="frame-42">
                        <div className="text-wrapper-77">Years</div>
                        <div className="text-wrapper-75">2019-2022</div>
                      </div>
                      <div className="frame-42">
                        <div className="text-wrapper-77">Data Set</div>
                        <div className="text-wrapper-75">NSOAAP</div>
                      </div>
                    </div>
                    <div className="div-5">
                      <div className="text-wrapper-72">Download Codebook:</div>
                      <div className="div-8">
                        <div className="text-wrapper-78">PDF</div>
                        <div className="text-wrapper-78">DOCX</div>
                        <div className="text-wrapper-78">CSV</div>
                        <div className="text-wrapper-78">XLSML</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="topic-card-grid-3">
                  <div className="frame-45">
                    <div className="div-6">
                      <div className="frame-42">
                        <div className="text-wrapper-72">Codebook</div>
                        <p className="text-wrapper-76">National Survey of Older Americans Act Participants (NSOAAP)</p>
                      </div>
                      <p className="text-wrapper-63">
                        Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere, Aliquam
                        scelerisque fringilla diam.
                      </p>
                    </div>
                    <div className="frame-43">
                      <div className="frame-42">
                        <div className="text-wrapper-77">Years</div>
                        <div className="text-wrapper-75">2019-2022</div>
                      </div>
                      <div className="frame-42">
                        <div className="text-wrapper-77">Data Set</div>
                        <div className="text-wrapper-75">NSOAAP</div>
                      </div>
                    </div>
                    <div className="div-5">
                      <div className="text-wrapper-72">Download Codebook:</div>
                      <div className="div-8">
                        <div className="text-wrapper-78">PDF</div>
                        <div className="text-wrapper-78">DOCX</div>
                        <div className="text-wrapper-78">CSV</div>
                        <div className="text-wrapper-78">XLSML</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="topic-card-grid-3">
                  <div className="frame-45">
                    <div className="div-6">
                      <div className="frame-42">
                        <div className="text-wrapper-72">Codebook</div>
                        <p className="text-wrapper-76">National Survey of Older Americans Act Participants (NSOAAP)</p>
                      </div>
                      <p className="text-wrapper-63">
                        Brief dataset summary Lacinia in quis nisl, Ut mattis turpis in, massa dapibus posuere, Aliquam
                        scelerisque fringilla diam.
                      </p>
                    </div>
                    <div className="frame-43">
                      <div className="frame-42">
                        <div className="text-wrapper-77">Years</div>
                        <div className="text-wrapper-75">2019-2022</div>
                      </div>
                      <div className="frame-42">
                        <div className="text-wrapper-77">Data Set</div>
                        <div className="text-wrapper-75">NSOAAP</div>
                      </div>
                    </div>
                    <div className="div-5">
                      <div className="text-wrapper-72">Download Codebook:</div>
                      <div className="div-8">
                        <div className="text-wrapper-78">PDF</div>
                        <div className="text-wrapper-78">DOCX</div>
                        <div className="text-wrapper-78">CSV</div>
                        <div className="text-wrapper-78">XLSML</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="load-more-2">
                <div className="text-wrapper-79">Load More</div>
                <Icon icon="expand-more" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        className="footer-1920-instance"
        icon={<Icon icon="facebook" />}
        icon1={<Icon icon="youtube" />}
        icon2={<Icon icon="instagram" />}
        icon3={<Icon icon="rss-feed" />}
        override={<Icon icon="twitter" />}
        returnToTopClassName="footer-instance"
      />
    </div>
  );
};
