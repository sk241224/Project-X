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
    <section
      className="updates-section"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "0 auto 64px auto",
        padding: "0",
        background: "none",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1100px",
          margin: 0,
          padding: "0 1rem",
          boxSizing: "border-box",
        }}
      >
        <div className="updates-container" style={{ width: "100%", margin: 0 }}>
          <h2
            className="updates-title"
            style={{
              marginTop: 0,
              marginBottom: "24px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "2rem",
              letterSpacing: "1px",
              color: "#222",
            }}
          >
            KEEP YOURSELF UPDATED
          </h2>
          <div
            className="updates-grid"
            style={{
              gap: "16px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {updates.map((update, i) => (
              <div
                className="update-card"
                key={i}
                style={{
                  flex: "1 1 240px",
                  minWidth: "180px",
                  maxWidth: "320px",
                  margin: "8px",
                  padding: "16px 18px",
                  borderRadius: "12px",
                  background: "#fffbe6",
                  color: "#222",
                  boxShadow: "0 2px 12px #FFD70022",
                  fontWeight: 500,
                  fontSize: "1.05rem",
                  textAlign: "center",
                  border: "1px solid #FFD70033",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
              >
                {update.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdatesSection;
