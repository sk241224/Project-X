import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#111111", // black theme
        color: "#FFD700",
        paddingTop: "48px",
        paddingBottom: "32px",
      }}
    >
      <div
        className="footer-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "0 24px",
          gap: "24px",
        }}
      >
        {/* College Section with Two Columns */}
        <div
          style={{
            flex: "1 1 300px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h4 style={headingStyle}>COLLEGE</h4>
          <div style={{ display: "flex", gap: "32px" }}>
            <ul style={ulStyle}>
              <li><a href="/statewise-colleges" style={linkStyle}>Statewise Colleges</a></li>
              <li><a href="/explore-all-iits" style={linkStyle}>Explore All IITs</a></li>
              <li><a href="/explore-all-nits" style={linkStyle}>Explore All NITs</a></li>
              <li><a href="/explore-all-iiits" style={linkStyle}>Explore All IIITs</a></li>
              <li><a href="/explore-all-iisers" style={linkStyle}>Explore All IISERs</a></li>
            </ul>
            <ul style={ulStyle}>
              <li><a href="/colleges-delhi-ncr" style={linkStyle}>Colleges in Delhi NCR</a></li>
              <li><a href="/colleges-maharashtra" style={linkStyle}>Colleges in Maharashtra</a></li>
              <li><a href="/colleges-karnataka" style={linkStyle}>Colleges in Karnataka</a></li>
              <li><a href="/colleges-uttar-pradesh" style={linkStyle}>Colleges in Uttar Pradesh</a></li>
              <li><a href="/colleges-andhra-pradesh" style={linkStyle}>Colleges in Andhra Pradesh</a></li>
              <li><a href="/colleges-telangana" style={linkStyle}>Colleges in Telangana</a></li>
            </ul>
          </div>
        </div>

        {/* Exam */}
        <FooterColumn
          heading="EXAM"
          links={[
            ["JEE (Main)", "/jee-main"],
            ["JEE (Advanced)", "/jee-advanced"],
            ["BITSAT", "/bitsat"],
            ["MHT-CET", "/mht-cet"],
            ["UPSEE", "/upsee"],
            ["WBJEE", "/wbjee"],
          ]}
        />

        {/* Tools */}
        <FooterColumn
          heading="TOOLS"
          links={[
            ["College Finder", "/college-finder"],
            ["JEE (Main) Rank Predictor", "/jee-main-rank-predictor"],
            ["JEE (Main) College Predictor", "/jee-main-college-predictor"],
            ["JEE (Advanced) College Predictor", "/jee-advanced-college-predictor"],
            ["BITSAT College Predictor", "/bitsat-college-predictor"],
            ["JAC Delhi College Predictor", "/jac-delhi-college-predictor"],
          ]}
        />

        {/* Company */}
        <FooterColumn
          heading="COMPANY"
          links={[
            ["About Us", "/about-us"],
            ["Media Kit", "/media-kit"],
            ["Privacy Policy", "/privacy-policy"],
            ["Terms of Use", "/terms-of-use"],
            ["Contact Us", "/contact-us"],
            ["Support Us", "/support-us"],
          ]}
        />
      </div>

      {/* Centered Bottom */}
      <div style={{ textAlign: "center", marginTop: "48px" }}>
        <div
          className="footer-logo-anim"
          style={{
            fontSize: "2.2rem",
            fontWeight: "900",
            letterSpacing: "2px",
            marginBottom: "16px",
            textShadow: "0 2px 12px #FFD70055",
            display: "inline-block",
          }}
          tabIndex={0}
          title="Back to Top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <span style={{ color: "#FFD700" }}>S</span>
          <span style={{ color: "#FFD700AA" }}>s</span>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "12px" }}>
          {[
            {
              href: "https://www.facebook.com/CollegePravesh",
              icon: faFacebook,
              label: "Facebook",
              color: "#4267B2",
            },
            {
              href: "https://twitter.com/collegepravesh",
              icon: faTwitter,
              label: "Twitter",
              color: "#1DA1F2",
            },
            {
              href: "https://www.linkedin.com/company/college-pravesh",
              icon: faLinkedin,
              label: "LinkedIn",
              color: "#0077B5",
            },
            {
              href: "https://www.instagram.com/college.pravesh/",
              icon: faInstagram,
              label: "Instagram",
              color: "#E1306C",
            },
          ].map(({ href, icon, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              style={{ ...iconLinkStyle, position: "relative" }}
              aria-label={label}
              tabIndex={0}
              onMouseEnter={e => {
                e.currentTarget.style.color = color;
                e.currentTarget.style.transform = "scale(1.25) rotate(-8deg)";
                e.currentTarget.style.boxShadow = `0 2px 16px ${color}55`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "#FFD700";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
              onFocus={e => {
                e.currentTarget.style.color = color;
                e.currentTarget.style.transform = "scale(1.25) rotate(-8deg)";
                e.currentTarget.style.boxShadow = `0 2px 16px ${color}55`;
              }}
              onBlur={e => {
                e.currentTarget.style.color = "#FFD700";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <FontAwesomeIcon icon={icon} />
              <span style={{
                position: "absolute",
                left: "50%",
                top: "110%",
                transform: "translateX(-50%)",
                background: "#222",
                color: color,
                fontSize: "0.8rem",
                padding: "2px 8px",
                borderRadius: "6px",
                opacity: 0,
                pointerEvents: "none",
                transition: "opacity 0.2s",
                zIndex: 2,
              }}
                className="footer-tooltip"
              >{label}</span>
            </a>
          ))}
        </div>

        <p style={{ fontSize: "0.95rem", color: "#FFD700BB" }}>
          Shiksha Saathi © Copyright 2025
        </p>
      </div>
      {/* Add global style for uniform section spacing */}
      <style>{`
        .footer-tooltip {
          opacity: 0;
        }
        a[aria-label]:hover .footer-tooltip,
        a[aria-label]:focus .footer-tooltip {
          opacity: 1 !important;
        }
        .footer-link-hover:hover,
        .footer-link-hover:focus {
          color: #FFD700 !important;
          text-shadow: 0 2px 12px #FFD70099;
          transition: color 0.18s, text-shadow 0.18s;
        }
        .footer-logo-anim {
          transition: transform 0.2s, text-shadow 0.2s;
          cursor: pointer;
        }
        .footer-logo-anim:hover,
        .footer-logo-anim:focus {
          transform: scale(1.08) rotate(-2deg);
          text-shadow: 0 4px 24px #FFD70099;
        }
        .footer-social-link {
          transition: color 0.12s, transform 0.12s, box-shadow 0.12s;
          position: relative;
        }
        .footer-social-link:focus {
          outline: 2px solid #FFD700;
        }
        /* Uniform section spacing for showcase and updates */
        .section-spacing {
          margin-top: 48px !important;
          margin-bottom: 48px !important;
        }
        @media (max-width: 900px) {
          .footer-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
          .footer-column {
            text-align: left !important;
            align-items: flex-start !important;
          }
          .section-spacing {
            margin-top: 80px !important;
            margin-bottom: 32px !important;
          }
        }
        @media (max-width: 820px) and (min-width: 601px) {
          .footer, .footer * {
            font-size: 1.18rem !important;
          }
          .footer-logo-anim {
            font-size: 2.6rem !important;
          }
        }
        @media (max-width: 600px) {
          .footer-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
          .footer-column {
            text-align: left !important;
            align-items: flex-start !important;
          }
          .section-spacing {
            margin-top: 20px !important;
            margin-bottom: 20px !important;
          }
        }
      `}</style>
    </footer>
  );
};

// Footer column component
const FooterColumn = ({ heading, links }) => (
  <div className="footer-column" style={{ flex: "1 1 180px", minWidth: "180px" }}>
    <h4 style={headingStyle}>{heading}</h4>
    <ul style={ulStyle}>
      {links.map(([text, href]) => (
        <li key={href}>
          <a href={href} style={linkStyle} className="footer-link-hover">{text}</a>
        </li>
      ))}
    </ul>
  </div>
);

// Styles
const headingStyle = {
  color: "#FFD700",
  marginBottom: "16px",
  fontSize: "1.35rem",
  fontWeight: "900",
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  textShadow: "0 2px 12px #FFD70044",
};

const linkStyle = {
  color: "#FFD700BB",
  textDecoration: "none",
  marginBottom: "8px",
  display: "inline-block",
  fontSize: "0.95rem",
  transition: "color 0.3s, text-shadow 0.3s",
  position: "relative",
  cursor: "pointer",
};

const iconLinkStyle = {
  color: "#FFD700",
  fontSize: "1.2rem",
  transition: "color 0.12s",
};

const ulStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

export default Footer;
