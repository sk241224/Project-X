import React from "react";
import "./App.css";
import SEOHelmet from "./components/SEOHelmet";
import Header from "./components/Header";
import ShowcaseSection from "./components/ShowcaseSection";
import UpdatesSection from "./components/UpdatesSection";
import TopCollegesSection from "./components/TopCollegesSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <SEOHelmet />
      <div className="wrapper-outer">
        <div className="background-cover"></div>

        <div id="wrapper" className="wide-layout">
          <div className="inner-wrapper">
            {/* Header */}
            <div className="header-back">
              <Header />

              {/* Featured Section */}
              <div id="cp-home-featured">
                <div className="cp-home-featured">
                  <div className="caption">
                    <div className="container caption-table">
                      <div className="caption-table-cell">
                        <h1>Know More, Do More</h1>
                        <form
                          className="search-form"
                          role="search"
                          action="https://www.collegepravesh.com/"
                        >
                          <div className="form-group">
                            <button
                              className="icon-search"
                              aria-label="Search"
                              type="submit"
                            >
                              <i className="fa fa-search"></i>
                            </button>
                            <input
                              autoComplete="off"
                              className="form-control"
                              placeholder="Search for Colleges, Courses or Exams"
                              name="s"
                              id="autocomplete-featured"
                              type="text"
                            />
                            <button className="search-button" type="submit">
                              <i className="fa fa-search"></i> Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cp-header-featured">
                <a
                  style={{ color: "#eee", padding: "5px" }}
                  rel="noopener"
                  href="https://notify.collegepravesh.com"
                  target="_blank"
                >
                  Subscribe to Exam Updates
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div id="main-content" className="container full-width">
              <div className="content">
                <div className="post-inner">
                  <ShowcaseSection />
                  <UpdatesSection />
                  <TopCollegesSection />
                </div>
              </div>
              <div className="clear"></div>
            </div>

            {/* Footer */}
            <Footer />

            <div className="clear"></div>
            <div className="footer-bottom">
              <div className="container">
                <div className="alignright"></div>
                <div className="alignleft"></div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="topcontrol"
          className="fa fa-angle-up"
          title="Scroll To Top"
        ></div>
        <div id="fb-root"></div>
      </div>
    </>
  );
}

export default App;
