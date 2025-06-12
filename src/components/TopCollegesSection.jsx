import React from "react";

function TopCollegesSection() {
  return (
    <section id="top-colleges">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <div className="center-heading">
            <h2>Top Colleges</h2>
            <span className="center-line"></span>
          </div>
        </div>
      </div>
      <div className="top-clg-slick">
        {/* Add dynamic or static college cards */}
      </div>
    </section>
  );
}

export default TopCollegesSection;
