import React from "react";
import "./extra.css";
import { Link } from 'react-router-dom';

const Extra = () => {
  return (
    <div className="extra-container">
      <div className="extra-box">
        <h3>Seat Matrix</h3>
        <p>
  <Link to="/Seatmatrix" className="know-more">Know more</Link>
</p>

      </div>

      <div className="extra-box">
        <h3>Cutoffs</h3>
         <p>
  <Link to="/Cutoff" className="know-more">Know more</Link>
</p>
      </div>
    </div>
  );
};

export default Extra;
