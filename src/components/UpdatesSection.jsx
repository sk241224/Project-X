import React from "react";

const updates = [
  { text: "JEE Main 2025 April Session Admit Card Released: Download Now" },
  { text: "Engineering Entrance Exams/Admissions 2025: Applications Open" },
  { text: "IIITH UGEE 2025: Application Deadline Extended" },
  {
    text: "MIT Manipal B.Tech Admissions 2025: Eligibility, Dates & Application",
  },
  { text: "JEE Main 2025 Session-II: Test City Allotted" },
  { text: "COMEDK UGET 2025: Application Deadline Extended to March 20th" },
  { text: "More ➜" },
];

function UpdatesSection() {
  return (
    <section id="latest-news" className="section-full">
      <div className="col-sm-12">
        <div className="col-sm-8 col-sm-offset-2">
          <div className="updates-container">
            <h2 className="updates-title">KEEP YOURSELF UPDATED</h2>
            <div className="updates-grid">
              {updates.map((update, i) => (
                <div className="update-card" key={i}>
                  {update.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdatesSection;
