import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="theme-header" className="theme-header">
      <div className="header-content">
        <a
          id="slide-out-open"
          aria-label="Mobile Menu"
          className="slide-out-open"
          href="#"
        >
          <span></span>
        </a>
        <div className="logo">
          <h1>
            <a href="https://www.collegepravesh.com/">
              <img
                src="https://www.collegepravesh.com/cpdata/themes/sahifa/images/Logo_Light_Transparent_250x40.png"
                alt="College Pravesh"
                width="250"
                height="40"
              />
              <strong>
                College Pravesh - Your personal guide in the World of
                Engineering
              </strong>
            </a>
          </h1>
        </div>
        <nav id="main-nav">
          <ul className="menu">
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <Link to="/colleges">Colleges</Link>
            </li>
            <li>
              <a href="/entrance-exams">Exams</a>
            </li>
            <li>
              <a href="/admissions">Admissions</a>
            </li>
            <li>
              <a href="http://tools.collegepravesh.com/">Tools</a>
            </li>
            <li>
              <a href="http://forum.collegepravesh.com/">Forum</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
