import React from "react";

function ShowcaseSection() {
  return (
    <section id="our-services" className="section-full">
      <div className="col-sm-12">
        <div className="col-sm-8 col-sm-offset-2">
          <div className="center-heading">
            <h2>Take Informed Decisions</h2>
            <span className="center-line"></span>
          </div>
        </div>
      </div>
      <div className="cp-showcase">
        <a href="college.html" className="cp-showcase-link cps-1">
          <div
            className="ic-image cps-animate cps-overlay"
            style={{
              backgroundImage: `url(https://img.collegepravesh.com/home-images/colleges-showcase.jpg)`,
            }}
          />
          <div className="cps-info">Colleges</div>
        </a>
        {/* Add Cutoff, News, Exams links similarly */}
      </div>
    </section>
  );
}

export default ShowcaseSection;
