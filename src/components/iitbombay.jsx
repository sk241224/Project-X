import iitBombayLogo from "/img/iit bombay logo.png"; // Ensure correct path
import appLogo from "/img/clgpravesh logo.jpg"; // Ensure correct path
import "../styles/iit bombay.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Footer from "./footer";
import "../styles/footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";




const newColleges = [
  
  {
    name: "IIT Jammu",
    location: "Jammu, Jammu and Kashmir",
    img: "../img/iitjammu.jpg", // Replace with actual logo URL
    link: "https://www.iitjammu.ac.in/",
  },
  {
    name: "SPCE Mumbai",
    location: "Mumbai, Maharashtra",
    img: "../img/spcemumbai.jpg", // Replace with actual logo URL
    link: "https://www.spce.ac.in/",
  },
  {
    name: "IIT (ISM) Dhanbad",
    location: "Dhanbad, Jharkhand",
    img: "../img/iitdhanbad.jpg", // Replace with actual logo URL
    link: "https://www.iitism.ac.in/",
  },
  {
    name: "SPIT Mumbai",
    location: "Mumbai, Maharashtra",
    img: "../img/spit.jpg", // Replace with actual logo URL
    link: "https://www.spit.ac.in/",
  },
  {
    name: "IIT Tirupati",
    location: "Tirupati, Andhra Pradesh",
    img: "../img/iittirupati.jpg", // Replace with actual logo URL
    link: "https://www.iittp.ac.in/",
  },
];


const colleges = [
  { 
    name: "IISc Bangalore", 
    location: "Bangalore, Karnataka", 
    img: "../img/IIsc.jpg",
    link: "https://www.iisc.ac.in/"
  },
  { 
    name: "IIPE Visakhapatnam", 
    location: "Visakhapatnam, Andhra Pradesh", 
    img: "../img/iipe.jpg",
    link: "https://www.iipe.ac.in/"
  },
  { 
    name: "UPES Dehradun", 
    location: "Dehradun, Uttarakhand", 
    img: "../img/UPES.jpg",
    link: "https://www.upes.ac.in/"
  },
  { 
    name: "AUCE Visakhapatnam", 
    location: "Visakhapatnam, Andhra Pradesh", 
    img: "../img/AUCE.jpg",
    link: "http://www.andhrauniversity.edu.in/"
  },
  { 
    name: "ADGITM Delhi", 
    location: "New Delhi, Delhi", 
    img: "../img/adgitm.jpg",
    link: "https://www.adgitmdelhi.ac.in/"
  }
];
const exams = [
  {
    name: "Joint Entrance Examination (Main)",
    image: "../img/jeemains.jpeg",
    link: "#",
  },
  {
    name: "Joint Entrance Examination (Advanced)",
    image: "../img/jeeadvanced.jpg",
    link: "#",
  },
  {
    name: "BITS Admission Test",
    image: "../img/bits.jpg",
    link: "#",
  },
  {
    name: "Manipal Entrance Test",
    image: "../img/manipalentrance.jpg",
    link: "#",
  },
  {
    name: "SRM Joint Engineering Entrance Exam",
    image: "../img/srmjeee.jpg",
    link: "#",
  },
];


const IITBombay = () => {
  const rightPaneRef = useRef(null);
  const leftPaneRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!rightPaneRef.current || !leftPaneRef.current) return;

      const rightPane = rightPaneRef.current;
      const leftPane = leftPaneRef.current;

      const rightMaxScroll = rightPane.scrollHeight - rightPane.clientHeight;

      if (rightPane.scrollTop >= rightMaxScroll) {
        // Right pane has reached the bottom, stop scrolling
        rightPane.style.overflowY = "hidden";
      } else {
        // Sync left pane with right pane
        leftPane.scrollTop = rightPane.scrollTop;
      }
    };

    const syncScroll = () => {
      if (!rightPaneRef.current || !leftPaneRef.current) return;

      const rightPane = rightPaneRef.current;
      const leftPane = leftPaneRef.current;

      // If the right pane is still scrollable, sync scrolling
      if (rightPane.style.overflowY !== "hidden") {
        rightPane.scrollTop = leftPane.scrollTop;
      }
    };

    if (rightPaneRef.current && leftPaneRef.current) {
      rightPaneRef.current.addEventListener("scroll", handleScroll);
      leftPaneRef.current.addEventListener("scroll", syncScroll);
    }

    return () => {
      if (rightPaneRef.current && leftPaneRef.current) {
        rightPaneRef.current.removeEventListener("scroll", handleScroll);
        leftPaneRef.current.removeEventListener("scroll", syncScroll);
      }
    };
  }, []);
  return (
    <div className="iit-bombay-page">
      <div className="nav-structure">
        <div className="section section1">
          {/* Navbar with app logo */}
          <div className="navbar">
            <img src={appLogo} alt="App Logo" className="app-logo" />
            <div className="nav-links">
              <a href="#">News</a>
              <a href="#">Colleges</a>
              <a href="#">Exam</a>
              <a href="#">Admissions</a>
              <a href="#">Tools</a>
              <a href="#">Forum</a>
              <input type="text" placeholder="Search..." className="search-bar" />
            </div>
          </div>

          {/* Centered Image with Text */}
          <div className="center-content">
            <img src={iitBombayLogo} alt="IIT Bombay logo" className="center-image" />
            <p className="text-line large-text">Indian Institute of Technology, Bombay</p>
            <p className="text-line small-text">Indian Institute of Technology, Powai, Mumbai, Maharashtra - 400076</p>
            </div>

        </div>

        <div className="section section2">
            <div className="horizontal-links">
                <button  className="link-item">
                <i className="fas fa-map-marker-alt icon"></i>
                <span>How to Reach</span>
                </button >
                <button  className="link-item">
                <i className="fas fa-chart-line icon"></i>
                <span>Ranking</span>
                </button >
                <button  className="link-item">
                <i className="fas fa-user-graduate icon"></i>
                <span>Admission</span>
                </button >
                <button  className="link-item">
                <i className="fas fa-book icon"></i>
                <span>Courses</span>
                </button >
                <button  className="link-item">
                <i className="fas fa-users icon"></i>
                <span>Seats</span>
                </button >
                <button  className="link-item">
                <i className="fas fa-cut icon"></i>
                <span>Cutoff</span>
                </button >
                <button  className="link-item">
                <i className="fas fa-dollar-sign icon"></i>
                <span>Fees</span>
                </button >
                <button className="link-item">
                <i className="fas fa-briefcase icon"></i>
                <span>Placements</span>
                </button>
            </div>
            </div>

        <div className="section section3">
        <p className="subscribe-text">Subscribe to Exam Updates</p>
        </div>

      </div>

      {/* New Section with Left and Right Panes */}
      <div className="content-container">
        <div className="left-pane">
        <h2>Overview</h2>
          <table className="overview-table">
            <tbody>
              <tr><td>Institute Name</td><td>Indian Institute of Technology, Bombay</td></tr>
              <tr><td>Also Known As</td><td>IITB</td></tr>
              <tr><td>Institute Type</td><td>Government</td></tr>
              <tr><td>Established</td><td>1958</td></tr>
              <tr><td>Location</td><td>Mumbai, Maharashtra</td></tr>
            </tbody>
          </table>
          <p className="info-text">
    IIT Bombay:  
    <a href="#" className="blue-link"> Admission </a> |  
    <a href="#" className="blue-link"> Ranking </a> |  
    <a href="#" className="blue-link"> Fees </a>
  </p>
  <div className="also-known-as">
    <h3>ALSO KNOWN AS</h3>
    <div className="underline"></div>
    <p>Also known as IITB, IIT Bombay and IIT Mumbai.</p>
  </div>

  
<div className="address-section">
  <h3>ADDRESS</h3>
  <div className="underline"></div>
  <p>Indian Institute of Technology, Powai, Mumbai, Maharashtra - 400076</p>
</div>
<div className="nearest-transport">
  <h3>Nearest Airport and Railway Station</h3>
  <div className="underline"></div>
  
  <div className="transport-list">
    <div className="transport-item">
      <i className="fas fa-plane icon"></i>
      <div className="separator"></div>
      <p>Chhatrapati Shivaji Maharaj International Airport, Mumbai<br /><span>7 km</span></p>
    </div>

    <div className="transport-item">
      <i className="fas fa-train icon"></i>
      <div className="separator"></div>
      <p>Kanjurmarg Railway Station<br /><span>2 km</span></p>
    </div>

    <div className="transport-item">
      <i className="fas fa-train icon"></i>
      <div className="separator"></div>
      <p>Mumbai Central Railway Station<br /><span>26 km</span></p>
    </div>

    <div className="transport-item">
      <i className="fas fa-train icon"></i>
      <div className="separator"></div>
      <p>Chhatrapati Shivaji Terminus<br /><span>29 km</span></p>
    </div>
  </div>
</div>
<div className="campus-facilities">
  <h3>CAMPUS FACILITIES</h3>
  <div className="underline"></div>
  <div className="facility-icons">
    <div className="ficon"><i className="fas fa-dollar-sign"></i></div>
    <div className="ficon"><i className="fas fa-book"></i></div>
    <div className="ficon"><i className="fas fa-wifi"></i></div>
    <div className="ficon"><i className="fas fa-utensils"></i></div>
    <div className="ficon"><i className="fas fa-male"></i></div>
    <div className="ficon"><i className="fas fa-female"></i></div>
    <div className="ficon"><i className="fas fa-futbol"></i></div>
    <div className="ficon"><i className="fas fa-first-aid"></i></div>
  </div>
</div>
<div className="ranking-section">
  <h3>RANKING</h3>
  <div className="underline"></div>

  <table className="ranking-table">
  <thead>
    <tr>
      <th>Body</th>
      <th>Category</th>
      <th>Latest Rank (Year)</th>
      <th>Previous Rank (Year)</th>
    </tr>
  </thead>
  <tbody>
    {/* International Ranking */}
    <tr className="ranking-header"><td colSpan="4">International Ranking</td></tr>
    <tr>
      <td rowSpan="3"><img src="/img/qs.jpg" alt="QS Logo" /></td>
      <td>QS World University Rankings</td>
      <td>118 (2025)</td>
      <td>149 (2024)</td>
    </tr>
    <tr>
      <td>QS World University Rankings - Engineering & Technology</td>
      <td>45 (2024)</td>
      <td>47 (2023)</td>
    </tr>
    <tr>
      <td>QS Asia University Rankings</td>
      <td>48 (2025)</td>
      <td>40 (2024)</td>
    </tr>

    {/* National Ranking */}
    <tr className="ranking-header"><td colSpan="4">National Ranking</td></tr>
    <tr>
      <td rowSpan="3"><img src="/img/nirf.jpg" alt="NIRF Logo" /></td>
      <td>NIRF Overall Rankings</td>
      <td>3 (2024)</td>
      <td>4 (2023)</td>
    </tr>
    <tr>
      <td>NIRF Engineering Rankings</td>
      <td>3 (2024)</td>
      <td>3 (2023)</td>
    </tr>
    <tr>
      <td>NIRF Research Rankings</td>
      <td>4 (2024)</td>
      <td>4 (2023)</td>
    </tr>
    <tr>
      <td><img src="/img/nirfino.jpg" alt="NIRF Innovation Logo" /></td>
      <td>NIRF Innovation Rankings</td>
      <td>1 (2024)</td>
      <td>7 (2023)</td>
    </tr>
    <tr>
      <td rowSpan="2"><img src="/img/the week.jpg" alt="The Week Logo" /></td>
      <td>The Week Best Technical Universities India</td>
      <td>1 (2023)</td>
      <td>--</td>
    </tr>
    <tr>
      <td>The Week Top Engineering Colleges India</td>
      <td>2 (2024)</td>
      <td>2 (2023)</td>
    </tr>
    <tr>
      <td rowSpan="2"><img src="/img/outlook.jpg" alt="Outlook India Logo" /></td>
      <td>Outlook India’s Top Govt. Technical Universities</td>
      <td>3 (2024)</td>
      <td>3 (2023)</td>
    </tr>
    <tr>
      <td>Outlook India's Top Govt. Engineering Colleges</td>
      <td>3 (2024)</td>
      <td>3 (2023)</td>
    </tr>
    <tr>
      <td rowSpan="2"><img src="/img/india today.jpg" alt="India Today Logo" /></td>
      <td>India Today Top Engineering Colleges</td>
      <td>2 (2024)</td>
      <td>2 (2023)</td>
    </tr>
    <tr>
      <td>India Today Top Govt. Engineering Colleges</td>
      <td>2 (2022)</td>
      <td>--</td>
    </tr>
  </tbody>
</table>
</div>

<div className="mode-of-admission">
<h3>MODE OF ADMISSION</h3>
    <div className="underline"></div>
    <ul style={{ listStyleType: 'none', paddingLeft: '0'  }}>
    <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
      <span style={{ marginRight: '10px', color: 'gold', fontSize: '18px' }}>★</span>
      <span>Candidates must qualify the JEE (Main) exam and then appear for the JEE (Advanced) exam.</span>
    </li>
    <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
      <span style={{ marginRight: '10px', color: 'gold', fontSize: '18px' }}>★</span>
      <span>Candidates must secure at least 75% marks (65% for SC/ST/PwD) in Class XII OR be within the category-wise top 20 percentile in their respective Class XII board examination. For more details, refer to the JEE Advanced Performance Criteria in Class XII.</span>
    </li>
    <li style={{ display: 'flex', alignItems: 'flex-start' }}>
      <span style={{ marginRight: '10px', color: 'gold', fontSize: '18px' }}>★</span>
      <span>Admissions are based on the rank obtained in JEE (Advanced) through JoSAA Counselling.</span>
    </li>
  </ul>
</div>
<div className="course-selection">
<h3>COURSE OFFERED</h3>
<div className="underline"></div>
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
      </div>
<div className="seat-matrix">
  <h3>SEAT MATRIX</h3>
  <div className="underline"></div>
  <p>
  <a href="https://www.iitb.ac.in" className="blue-link" target="_blank" rel="noopener noreferrer">IIT Bombay Seat matrix</a>.
</p>

</div>
<div className="cutoff">
  <h3>CUTOFF</h3>
  <div className="underline"></div>

  {/* Tabs for Latest and Older */}
  <div className="cutoff-container">
  <div className="cutoff-tabs">
    <button className="cutoff-tab active">Latest</button>
    <button className="cutoff-tab">Older</button>
  </div>

  <div className="cutoff-list">
    {["2024", "2023", "2022"].map((year, index) => (
      <div key={year} className="cutoff-item">
        <button className="cutoff-button">
          Cutoff {year}
          <span className="arrow">›</span>
        </button>
        {index !== 2 && <hr className="cutoff-divider" />}
      </div>
    ))}
  </div>
</div>
    </div>
    <div className="fees">
      <h3>FEES</h3>
  <div className="underline"></div> 
  <div className="fees-container">
  <div className="fee-section">
    <h2>Institute Fee</h2>
    <div className="sm-underline"></div>
    <table className="fee-table">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Caution Money (One-Time, Refundable)</td>
          <td>₹6,000</td>
        </tr>
        <tr>
          <td>One-Time Fees</td>
          <td>₹10,000</td>
        </tr>
        <tr>
          <td>Tuition Fee (per Semester)</td>
          <td>₹1,00,000</td>
        </tr>
        <tr>
          <td>Other Fees (per Semester)</td>
          <td>₹7,350</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>₹1,23,350</strong></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="fee-section">
    <h2>Hostel Fee</h2>
    <div className="sm-underline"></div>
    <table className="fee-table">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mess Caution Money (One-Time, Refundable)</td>
          <td>₹3,000</td>
        </tr>
        <tr>
          <td>Hostel Seat Rent (per Semester)</td>
          <td>₹2,500</td>
        </tr>
        <tr>
          <td>Electricity & Water Charges (per Semester)</td>
          <td>₹4,000</td>
        </tr>
        <tr>
          <td>Other Fees (per Semester)</td>
          <td>₹7,400</td>
        </tr>
        <tr>
          <td>Mess Advance (per Semester)</td>
          <td>₹22,500</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>₹39,400</strong></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="fee-section">
    <h2>Fee Waivers</h2>
    <div className="sm-underline"></div>
    <ul className="fee-waivers">
    <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
      <span style={{ marginRight: '10px', color: 'gold', fontSize: '18px' }}>★</span>100% Tuition Fee waiver for SC/ST/PwD students.</li>
      <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}><span style={{ marginRight: '10px', color: 'gold', fontSize: '18px' }}>★</span>100% Tuition Fee remission for Most Economically Backward students with family income less than ₹1 lakh per annum.</li>
      <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}><span style={{ marginRight: '10px', color: 'gold', fontSize: '18px' }}>★</span>2/3rd Tuition Fee remission for Other Economically Backward students with family income between ₹1 lakh to ₹5 lakh per annum.</li>
    </ul>
  </div>
</div>

    </div>
    <div className="placements">
  <h3>PLACEMENTS</h3>
  <div className="underline"></div>

  {/* Placement Statistics */}
  <div className="placement-section">
    <h2>Placement Statistics</h2>
    <div className="sm-underline"></div>
    <img src="../img/placementStatistics2024.jpg" alt="Placement Statistics" className="placement-img" />
    <table className="placement-table">
      <thead>
        <tr>
          <th>Department/Center</th>
          <th>Placed (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td colspan="2"><strong>4-Year B.E./B.Tech. Course</strong></td></tr>
        <tr><td>Aerospace Engineering</td><td>66.67%</td></tr>
        <tr><td>Chemical Engineering</td><td>82.03%</td></tr>
        <tr><td>Civil Engineering</td><td>82.47%</td></tr>
        <tr><td>Computer Science and Engineering</td><td>90.74%</td></tr>
        <tr><td>Electrical Engineering</td><td>90.80%</td></tr>
        <tr><td>Engineering Physics</td><td>71.05%</td></tr>
        <tr><td>Mechanical Engineering</td><td>90.91%</td></tr>
        <tr><td>Metallurgical Engineering and Materials Science</td><td>70.37%</td></tr>
        <tr><td><strong>Overall (B.Tech.)</strong></td><td><strong>83.39%</strong></td></tr>

        <tr><td colspan="2"><strong>4-Year B.S. Course</strong></td></tr>
        <tr><td>Chemistry</td><td>47.37%</td></tr>
        <tr><td>Economics</td><td>71.43%</td></tr>
        <tr><td>Mathematics</td><td>76.92%</td></tr>
        <tr><td><strong>Overall (B.S.)</strong></td><td><strong>65.00%</strong></td></tr>

        <tr><td colspan="2"><strong>5-Year B.Tech + M.Tech. (Dual Degree) Course</strong></td></tr>
        <tr><td>Electrical Engineering</td><td>85.51%</td></tr>
        <tr><td>Energy Science and Engineering</td><td>58.33%</td></tr>
        <tr><td>Environmental Science and Engineering</td><td>65.00%</td></tr>
        <tr><td>Mechanical Engineering</td><td>97.50%</td></tr>
        <tr><td>Metallurgical Engineering and Materials Science</td><td>66.67%</td></tr>
        <tr><td><strong>Overall (Dual Degree)</strong></td><td><strong>79.66%</strong></td></tr>
      </tbody>
    </table>
  

  {/* Median Package */}
  
    <h2>Median Package Offered</h2>
    <div className="sm-underline"></div>
    <p>Rs. 17.92 lakhs per annum</p>
  

  {/* Average Package */}
 
    <h2>Average Package Offered</h2>
    <div className="sm-underline"></div>
    <p>Rs. 23.50 lakhs per annum</p>


  {/* Past Recruiters */}
  
    <h2>Past Recruiters</h2>
    <div className="sm-underline"></div>
    <img src="../img/pastRecruiters.jpg" alt="Past Recruiters" className="placement-img" />
  </div>
</div>
<div className="website">
  <h3>WEBSITE</h3>
  <div className="underline"></div>
  <a href="https://www.iitb.ac.in/" target="_blank" rel="noopener noreferrer">
    <button className="ash-button">IIT Bombay website</button>
  </a>
</div>

<div className="Similar Colleges">
  <h3>SIMILAR COLLEGES</h3>
  <div className="underline"></div>
  
</div>
<div className="nearby Colleges">
  <h3>NEARBY COLLEGES</h3>
  <div className="underline"></div>
  
</div>

        </div>



        <div className="right-pane">
        <div className="social-bar">
      <FaFacebook className="social-icon" />
      <div className="divider"></div>
      <FaTwitter className="social-icon" />
      <div className="divider"></div>
      <FaInstagram className="social-icon" />
    </div>
    <div className="popular-exams">
      <h3>POPULAR EXAMS</h3>
      <div className="underline"></div>
      <div className="exam-list">
        {exams.map((exam, index) => (
          <a href={exam.link} className="exam-item" key={index}>
            <img src={exam.image} alt={exam.name} className="exam-logo" />
            <span className="exam-name">{exam.name}</span>
            <div className="sm-underline"></div>
          </a>
          
        ))}
      </div>
    </div>

    <div className="popular-exams">
      <h2>EXPLORE COLLEGES</h2>
      <div className="underline"></div>
      <div className="exam-list">
        {colleges.map((college, index) => (
          <a href={college.link} className="exam-item" key={index} target="_blank" rel="noopener noreferrer">
            <img src={college.img} alt={college.name} className="exam-logo" />
            <div className="exam-details">
              <span className="exam-name">{college.name}</span>
              <span className="exam-location">{college.location}</span>
            </div>
          </a>
        ))}
      </div>
      </div>
      <div className="latest-news">
        <h2>LATEST NEWS</h2>
        <div className="underline"></div>
      </div>

      <div className="related-colleges">
  <h2>RELATED COLLEGES</h2>
  <div className="college-list">
    {newColleges.map((college, index) => (
      <div key={index}>
        <a href={college.link} className="college-item" target="_blank" rel="noopener noreferrer">
          <img src={college.img} alt={college.name} className="b-college-logo" />
          <div className="b-college-details">
            <span className="b-college-name">{college.name}</span>
            <span className="b-college-location">{college.location}</span>
          </div>
        </a>
        <div className="sm-underline"></div>  {/* Placed outside the <a> tag */}
      </div>
    ))}
  </div>
</div>
        </div>
        
      </div>

      <div className="footer">
      <Footer />
      </div>
    </div>
  );
}

export default IITBombay;