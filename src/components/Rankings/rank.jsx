import React from "react";
import "./rank.css";
import nirfLogo from "../../assets/nirf-logo.png"; 
import QS from "../../assets/QS-Logo.jpg"; 
import indtod from "../../assets/indtod.png"

const rankings = [
  {
    title: "NIRF Ranking",
    sub: "Engineering",
    rank: "#3",
    image: nirfLogo
  },
  {
    title: "NIRF Ranking",
    sub: "Overall",
    rank: "#4",
    image: nirfLogo
  },
  {
    title: "QS Rankings",
    sub: "World University Ranking",
    rank: "#123",
    image: QS,
     className: "qs-logo"
  },
  {
    title: "India Today",
    sub: "Top Engineering Colleges",
    rank: "#2",
     image: indtod,
     className: "india-today-logo" 
  }
];

const Ranking = () => {
  return (
    <div className="extra-container">
      {rankings.map((item, index) => (
        <div className="extra-box" key={index}>
          <img
  src={item.image}
  alt={`${item.title} logo`}
  className={`rank-logo ${item.className || ""}`}
/>



          <h3>{item.title}</h3>
          <p className="subheading">{item.sub}</p>
          <p className="rank-number">{item.rank}</p>
          <p className="know-more">Know more</p>
        </div>
      ))}
    </div>
  );
};

export default Ranking;
