import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Sample data for the top colleges section
const colleges = [
  {
    title: "IIT Kharagpur",
    image: "src/assets/clg/IIT-Kharagpur.jpg",
    link: "/iit-kharagpur",
  },
  {
    title: "COEP Tech Pune",
    image: "src/assets/clg/COEP-Pune.jpg",
    link: "/coep-tech-pune",
  },
  {
    title: "IIT (BHU) Varanasi",
    image: "src/assets/clg/IIT-BHU.jpg",
    link: "/iit-bhu-varanasi",
  },
  {
    title: "VNIT Nagpur",
    image: "src/assets/clg/VNIT.jpg",
    link: "/vnit-nagpur",
  },
  {
    title: "NIT Warangal",
    image: "src/assets/clg/NIT-WARANGAL.jpg",
    link: "/nit-warangal",
  },
  {
    title: "IIIT Allahabad",
    image: "src/assets/clg/IIIT-Allahabad.jpg",
    link: "/iiit-allahabad",
  },
  {
    title: "BITS PILANI",
    image: "src/assets/clg/BITS-Pilani.jpg",
    link: "/bits-pilani",
  },
  {
    title: "IISC BANGALORE",
    image: "src/assets/clg/IISc.jpg",
    link: "/iisc-bangalore",
  },
  {
    title: "NITK SURATHKAL",
    image: "src/assets/clg/NITK-SURATHKAL.jpg", 
    link: "/nitk-surathkal",
  },
];

function TopCollegesSection() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false, // Hide dots for navigation
    infinite: true, // Infinite loop of slides
    speed: 500, // Speed of transition
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 3, // Number of slides to scroll per click
    responsive: [
      {
        breakpoint: 1024, // At 1024px, show 2 slides
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // At 600px, show 1 slide
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: false, // Hide default arrows
  };

  return (
    <section id="top-colleges" style={{ position: "relative" }}>
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <div className="center-heading">
            <h2 >Top Colleges</h2>
            <span className="center-line"></span>
          </div>
        </div>
      </div>

      {/* Navigation arrows outside the carousel */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", margin: "20px 0 0 0" }}>
        <button
          onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
          aria-label="Previous"
          style={{ fontSize: "2rem", background: "none", border: "none", cursor: "pointer", color: "#FFD700", transition: "color 0.2s" }}
          onMouseOver={e => e.currentTarget.style.color = '#bfa100'}
          onMouseOut={e => e.currentTarget.style.color = '#FFD700'}
        >
          &#8592;
        </button>
        <div style={{ flex: 1, maxWidth: "80vw", width: "80%" }}>
          <Slider ref={sliderRef} {...settings}>
            {colleges.map((college, index) => (
              <div className="college-card" key={index}>
                <Link to={college.link}>
                  <div
                    className="college-image"
                    style={{
                      backgroundImage: `url(${college.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="college-info">
                    <h3>{college.title}</h3>
                    <ul>
                      <li>How to reach</li>
                      <li>Courses</li>
                      <li>Seats</li>
                      <li>Cutoff</li>
                      <li>Fee Structure</li>
                      <li>Placements</li>
                    </ul>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        <button
          onClick={() => sliderRef.current && sliderRef.current.slickNext()}
          aria-label="Next"
          style={{ fontSize: "2rem", background: "none", border: "none", cursor: "pointer", color: "#FFD700", transition: "color 0.2s" }}
          onMouseOver={e => e.currentTarget.style.color = '#bfa100'}
          onMouseOut={e => e.currentTarget.style.color = '#FFD700'}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}

export default TopCollegesSection;
