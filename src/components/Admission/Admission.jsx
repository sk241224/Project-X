import React from "react";
import "./Admission.css";

const Admission = () => {
  return (
    <div className="admission-container">
      <h2 className="section-title">IIT Delhi Admission 2025</h2>
      <p className="admission-intro">
        IIT Delhi offers admission to UG, PG, and Doctoral programs through national-level entrance exams like JEE Advanced, GATE, JAM, CAT, and others. Here's a quick overview:
      </p>

      <div className="highlight-boxes">
        <div className="highlight-box">
          <h4>Application Status</h4>
          <p>Open</p>
        </div>
        <div className="highlight-box">
          <h4>Popular Programs</h4>
          <p>BTech, MTech, MBA</p>
        </div>
        <div className="highlight-box">
          <h4>Fee Range</h4>
          <p>UG: ₹8L - ₹8.7L<br />PG: ₹30k - ₹12.6L</p>
        </div>
        <div className="highlight-box">
          <h4>Study Mode</h4>
          <p>Full-time</p>
        </div>
      </div>

      <h3>Eligibility & Selection Criteria</h3>
      <table className="admission-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Eligibility</th>
            <th>Selection</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BTech</td>
            <td>75% in Class 12 with PCM</td>
            <td>JEE Advanced + JoSAA</td>
          </tr>
          <tr>
            <td>MTech</td>
            <td>BTech/BE with 60%</td>
            <td>GATE + COAP</td>
          </tr>
          <tr>
            <td>MBA</td>
            <td>Graduation with 60%</td>
            <td>CAT + Interview</td>
          </tr>
          <tr>
            <td>MSc</td>
            <td>Bachelor’s in relevant field</td>
            <td>IIT JAM + CCMN</td>
          </tr>
          <tr>
            <td>PG Diploma</td>
            <td>Relevant Bachelor’s Degree</td>
            <td>Merit Based</td>
          </tr>
        </tbody>
      </table>

      <h3>Fees & Return on Investment (ROI)</h3>
      <table className="admission-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Tuition Fee</th>
            <th>Avg. Package</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BTech</td>
            <td>₹8L</td>
            <td>₹20L - ₹22L</td>
          </tr>
          <tr>
            <td>MTech</td>
            <td>₹3L</td>
            <td>₹14L - ₹22L</td>
          </tr>
          <tr>
            <td>MBA</td>
            <td>₹12L</td>
            <td>₹24.4L</td>
          </tr>
          <tr>
            <td>MSc</td>
            <td>₹30k - ₹3L</td>
            <td>₹17L</td>
          </tr>
        </tbody>
      </table>

      <h3>Seat Intake (2025)</h3>
      <table className="admission-table">
        <thead>
          <tr>
            <th>Program</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BTech</td>
            <td>1,209</td>
          </tr>
          <tr>
            <td>MTech</td>
            <td>1,568</td>
          </tr>
          <tr>
            <td>MSc</td>
            <td>254</td>
          </tr>
          <tr>
            <td>MA</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>

      <h3>Admission Steps</h3>
      <ol className="admission-steps">
        <li>Apply for entrance exams (e.g., JEE, GATE, JAM, CAT)</li>
        <li>Appear for exam and participate in counseling</li>
        <li>Shortlisting and merit list</li>
        <li>Confirm admission by paying the fee</li>
      </ol>

      <p className="ncert-tip">
        <strong>Tip:</strong> Prepare with NCERT + Previous Year Papers. Click to&nbsp;
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Know More</a>
      </p>
    </div>
  );
};

export default Admission;
