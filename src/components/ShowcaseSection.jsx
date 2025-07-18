import React from "react";
import { Link } from "react-router-dom";

// Sample data for the showcase section
const showcaseItems = [
  {
    title: "Colleges",
    image: "https://img.collegepravesh.com/home-images/colleges-showcase.jpg",
    link: "/colleges",
  },
  {
    title: "Cutoff",
    image: "https://img.collegepravesh.com/home-images/cutoff-showcase.jpg",
    link: "/cutoff",
  },
  {
    title: "News",
    image: "https://img.collegepravesh.com/home-images/news-showcase.jpg",
    link: "/news",
  },
  {
    title: "Exams",
    image: "https://img.collegepravesh.com/home-images/exams-showcase.jpg",
    link: "/exams",
  },
  {
    title: "Tools",
    image: "https://img.collegepravesh.com/home-images/tools-showcase.jpg",
    link: "/tools",
  },
  {
    title: "Forum",
    image: "https://img.collegepravesh.com/home-images/forum-showcase.jpg",
    link: "/forum",
  },
];

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
        {showcaseItems.map((item, index) => (
          <Link to={item.link} className="cp-showcase-link" key={index}>
            <div
              className="ic-image cps-animate cps-overlay"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>
            <div className="cps-info">{item.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ShowcaseSection;
