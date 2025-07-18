import React from "react";
import "./navbar2.css";
import { Link } from "react-scroll"; // only if you're using scroll behavior

const Navbar2 = () => {
  const navItems = [
    { name: "Overview", target: "overview" },
    { name: "Location", target: "location" },
    { name: "Ranking", target: "ranking" },
    { name: "Admission", target: "admission" },
    { name: "Placement", target: "placement" },
    { name: "Fees", target: "fees" },
    { name: "Reviews", target: "reviews" }
  ];

  return (
    <nav className="custom-navbar">
      {navItems.map((item) => (
        <div key={item.name} className="nav-item-wrapper">
          {/* Optional scroll behavior with Link */}
          <Link
            to={item.target}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-item"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar2;
