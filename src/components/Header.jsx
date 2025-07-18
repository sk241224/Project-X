import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const handleHamburgerClick = () => {
    setNavOpen((prev) => {
      const next = !prev;
      if (next) {
        // When opening nav, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return next;
    });
  };

  // Close nav on link click (mobile UX)
  const handleNavLinkClick = () => {
    setNavOpen(false);
  };

  // Responsive: hamburger fixed only on small screens
  const hamburgerButtonStyle = {
    position: navOpen ? "fixed" : "absolute", // Fixed when nav is open, absolute otherwise
    top: navOpen ? 0 : 4,
    left: navOpen ? 0 : 4,
    zIndex: 1100,
    width: 44,
    height: 44,
    background: "none",
    border: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <header id="theme-header" className="theme-header">
      <div className="header-content" style={{ position: "relative" }}>
        <button
          className="hamburger responsive-hamburger"
          aria-label="Toggle navigation menu"
          onClick={handleHamburgerClick}
          style={hamburgerButtonStyle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="logo" style={{ marginLeft: 60 }}>
          <h1>
            <a
              href="https://www.collegepravesh.com/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                textDecoration: "none",
              }}
            >
              <img
                src="src/assets/ShikshaSaathi_logo.png"
                alt="College Pravesh"
                style={{
                  height: "40px",
                  width: "auto",
                  objectFit: "contain",
                  margin: 0,
                  filter: "drop-shadow(0 2px 8px #FFD70088)",
                }}
              />
              <strong
                style={{
                  color: "#FFD700",
                  fontSize: "1.18rem",
                  fontWeight: 900,
                  letterSpacing: "1.2px",
                  fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
                  textShadow: "0 2px 12px #FFD70044",
                }}
              >
                College Pravesh - Your personal guide in the World of
                Engineering
              </strong>
            </a>
          </h1>
        </div>
        <nav
          id="main-nav"
          className={navOpen ? "open responsive-nav" : "responsive-nav"}
          style={
            navOpen
              ? {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "90vw",
                  minWidth: "220px",
                  maxWidth: "100vw",
                  height: "100vh",
                  background: "#181818",
                  zIndex: 1099,
                  boxShadow: "2px 0 16px #0008",
                  transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  padding: "0 0 0 0",
                  overflowY: "auto",
                }
              : {
                  position: "",
                  width: "",
                  height: "",
                  background: "",
                  boxShadow: "",
                  display: "",
                  padding: "",
                  overflowY: "",
                }
          }
          onClick={() => navOpen && setNavOpen(false)}
        >
          <ul
            className="menu responsive-menu"
            onClick={(e) => e.stopPropagation()}
            style={
              navOpen
                ? {
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "120px 0 0 0", // Increased top padding to move News link further down
                    margin: 0,
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    gap: "0",
                  }
                : {}
            }
          >
            <li>
              <a
                href="/news"
                style={{
                  fontSize: "1.15em",
                  fontWeight: 700,
                  padding: "8px 18px",
                  borderRadius: "8px",
                  color: "#FFD700",
                  background: "rgba(24,24,24,0.2)",
                  margin: "0 6px",
                  letterSpacing: "1px",
                  transition: "background 0.2s, color 0.2s",
                  display: "block",
                  textAlign: "left",
                }}
                onClick={handleNavLinkClick}
              >
                News
              </a>
            </li>
            <li>
              <Link
                to="/colleges"
                style={{
                  fontSize: "1.15em",
                  fontWeight: 700,
                  padding: "8px 18px",
                  borderRadius: "8px",
                  color: "#FFD700",
                  background: "rgba(24,24,24,0.2)",
                  margin: "0 6px",
                  letterSpacing: "1px",
                  transition: "background 0.2s, color 0.2s",
                  display: "block",
                  textAlign: "left",
                }}
                onClick={handleNavLinkClick}
              >
                Colleges
              </Link>
            </li>
            <li>
              <a
                href="/entrance-exams"
                style={{
                  fontSize: "1.15em",
                  fontWeight: 700,
                  padding: "8px 18px",
                  borderRadius: "8px",
                  color: "#FFD700",
                  background: "rgba(24,24,24,0.2)",
                  margin: "0 6px",
                  letterSpacing: "1px",
                  transition: "background 0.2s, color 0.2s",
                  display: "block",
                  textAlign: "left",
                }}
                onClick={handleNavLinkClick}
              >
                Exams
              </a>
            </li>
            <li>
              <a
                href="/admissions"
                style={{
                  fontSize: "1.15em",
                  fontWeight: 700,
                  padding: "8px 18px",
                  borderRadius: "8px",
                  color: "#FFD700",
                  background: "rgba(24,24,24,0.2)",
                  margin: "0 6px",
                  letterSpacing: "1px",
                  transition: "background 0.2s, color 0.2s",
                  display: "block",
                  textAlign: "left",
                }}
                onClick={handleNavLinkClick}
              >
                Admissions
              </a>
            </li>
            <li>
              <a
                href="http://tools.collegepravesh.com/"
                style={{
                  fontSize: "1.15em",
                  fontWeight: 700,
                  padding: "8px 18px",
                  borderRadius: "8px",
                  color: "#FFD700",
                  background: "rgba(24,24,24,0.2)",
                  margin: "0 6px",
                  letterSpacing: "1px",
                  transition: "background 0.2s, color 0.2s",
                  display: "block",
                  textAlign: "left",
                }}
                onClick={handleNavLinkClick}
              >
                Tools
              </a>
            </li>
            <li>
              <a
                href="http://forum.collegepravesh.com/"
                style={{
                  fontSize: "1.15em",
                  fontWeight: 700,
                  padding: "8px 18px",
                  borderRadius: "8px",
                  color: "#FFD700",
                  background: "rgba(24,24,24,0.2)",
                  margin: "0 6px",
                  letterSpacing: "1px",
                  transition: "background 0.2s, color 0.2s",
                  display: "block",
                  textAlign: "left",
                }}
                onClick={handleNavLinkClick}
              >
                Forum
              </a>
            </li>
          </ul>
          {/* Footer logo and copyright for mobile nav */}
          <div
            className="mobile-nav-footer"
            style={{
              width: "100%",
              marginTop: "32px",
              padding: "0 0 24px 8px",
              display: navOpen ? "block" : "none",
            }}
          >
            <h1
              className="footer-logo"
              style={{
                color: "#FFD700",
                fontSize: "1.5rem",
                margin: 0,
                fontWeight: 900,
                letterSpacing: "2px",
              }}
            >
              Ss
            </h1>
            <p
              style={{
                color: "#FFD700AA",
                margin: 0,
                fontSize: "0.95rem",
              }}
            >
              ShikshaSaathi © Copyright 2025
            </p>
          </div>
        </nav>
      </div>
      <style>{`
        /* Hamburger only visible <=820px */
        .responsive-hamburger {
          display: none !important;
        }
        @media (max-width: 820px) {
          .responsive-hamburger {
            display: flex !important;
          }
        }
        /* Nav menu: show as horizontal bar on desktop, vertical on mobile/tablet */
        .responsive-nav {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          position: static;
          background: none;
          box-shadow: none;
          width: auto;
          height: auto;
          padding: 0;
        }
        .responsive-menu {
          display: flex;
          flex-direction: row;
          gap: 12px;
          align-items: center;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .responsive-menu li {
          display: flex;
          align-items: center;
          height: 48px;
        }
        .responsive-menu a, .responsive-menu .nav-link {
          display: flex !important;
          align-items: center !important;
          font-size: 1.08em;
          font-weight: 700;
          padding: 0 24px;
          height: 44px;
          border-radius: 8px;
          color: #FFD700;
          background: rgba(24,24,24,0.2);
          margin: 0 6px;
          letter-spacing: 1px;
          transition: background 0.2s, color 0.2s;
          text-align: center;
          position: relative;
        }
        .responsive-menu a:after, .responsive-menu .nav-link:after {
          content: '';
          display: block;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #FFD700 0%, #fffbe6 100%);
          border-radius: 2px;
          margin-top: 4px;
          opacity: 0.7;
          position: absolute;
          left: 0;
          bottom: -6px;
        }
        @media (max-width: 820px) {
          .responsive-nav {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            position: fixed !important;
            top: 80px;
            left: 0;
            width: 90vw;
            min-width: 220px;
            max-width: 100vw;
            height: calc(100vh - 80px);
            background: #181818;
            z-index: 1099;
            box-shadow: 2px 0 16px #0008;
            transition: transform 0.3s cubic-bezier(.4,0,.2,1);
            display: flex;
            padding: 0;
            overflow-y: auto;
          }
          .responsive-menu {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 56px 0 0 0;
            margin: 0;
            height: 100%;
            width: 100%;
            display: flex;
            gap: 0;
          }
          .responsive-menu li {
            width: 100%;
            justify-content: flex-start;
            height: 56px;
          }
          .responsive-menu a, .responsive-menu .nav-link {
            font-size: 1.35em !important;
            padding: 0 32px !important;
            height: 48px;
            width: 100%;
            text-align: left;
            margin: 0;
            border-radius: 0;
            background: none;
          }
          .responsive-menu a:after, .responsive-menu .nav-link:after {
            left: 0;
            right: 0;
            margin: 0;
            width: 100%;
            height: 2.5px;
            background: linear-gradient(90deg, #FFD700 0%, #fffbe6 100%);
            border-radius: 2px;
            bottom: -2px;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
