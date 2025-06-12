import React, { useState } from "react";
import "../styles/iit bombay.css"; // Ensure this path is correct

function CourseSelection() {
  const [selectedCourse, setSelectedCourse] = useState("");

  // Course details based on selection
  const courseDetails = {
    "B.Tech / B.E": "B.Tech (Bachelor of Technology) and B.E (Bachelor of Engineering) are four-year undergraduate programs focusing on various engineering disciplines such as Computer Science, Mechanical, Civil, and Electrical Engineering.",
    "B.Sc": "B.Sc (Bachelor of Science) is a three-year undergraduate program in subjects like Physics, Mathematics, Chemistry, and Biotechnology.",
    "B.Tech + M.Tech (Dual Course)": "The B.Tech + M.Tech dual degree program is a five-year integrated course that provides both undergraduate and postgraduate degrees in engineering.",
  };

  return (
    <div className="course-selection">
      {/* Heading and underline */}
      <h3>Courses Offered</h3>
      <div className="underline"></div>

      {/* Dropdown for course selection */}
      <select className="dropdown" onChange={(e) => setSelectedCourse(e.target.value)}>
        <option value="">Select a course category</option>
        <optgroup label="4 Years">
          <option value="B.Tech / B.E">B.Tech / B.E</option>
          <option value="B.Sc">B.Sc</option>
        </optgroup>
        <optgroup label="5 Years">
          <option value="B.Tech + M.Tech (Dual Course)">B.Tech + M.Tech (Dual Course)</option>
        </optgroup>
      </select>

      {/* Display selected course details */}
      {selectedCourse && (
        <div className="course-content">
          <h4>{selectedCourse}</h4>
          <p>{courseDetails[selectedCourse]}</p>
        </div>
      )}
    </div>
  );
}

export default CourseSelection;
