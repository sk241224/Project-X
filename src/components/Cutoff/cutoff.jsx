import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import '../Hero/Hero.css';
import '../Navbar/Navbar.css';
import './cutoff.css';

const Cutoff = () => {
  // State for filters
  const [selectedRound, setSelectedRound] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedQuota, setSelectedQuota] = useState('All');

  // Categories and quotas
  const categories = ['All', 'OPEN', 'OBC-NCL', 'SC', 'ST', 'GEN-EWS', 'OPEN-PwD'];
  const quotas = ['All', 'AI', 'HS', 'OS', 'GO'];

  // Cleaned cutoff data for all branches
  const cutoffData = {
    1: [
      { id: 1, branch: "Computer Science and Engineering (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 100, closingRank: 250 },
      { id: 2, branch: "Computer Science and Engineering (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 300, closingRank: 450 },
      { id: 3, branch: "Computer Science and Engineering (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 700, closingRank: 900 },
      { id: 4, branch: "Computer Science and Engineering (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 1000, closingRank: 1200 },
      { id: 5, branch: "Electrical Engineering (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 500, closingRank: 800 },
      { id: 6, branch: "Electrical Engineering (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 900, closingRank: 1100 },
      { id: 7, branch: "Electrical Engineering (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 1300, closingRank: 1500 },
      { id: 8, branch: "Electrical Engineering (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 1600, closingRank: 1800 },
      { id: 9, branch: "Mechanical Engineering (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 1200, closingRank: 1600 },
      { id: 10, branch: "Mechanical Engineering (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 1700, closingRank: 2000 },
      { id: 11, branch: "Mechanical Engineering (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 2100, closingRank: 2300 },
      { id: 12, branch: "Mechanical Engineering (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 2400, closingRank: 2600 },
      { id: 13, branch: "Chemical Engineering (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 1500, closingRank: 1900 },
      { id: 14, branch: "Chemical Engineering (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 2000, closingRank: 2300 },
      { id: 15, branch: "Chemical Engineering (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 2400, closingRank: 2600 },
      { id: 16, branch: "Chemical Engineering (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 2700, closingRank: 2900 },
      { id: 17, branch: "Civil Engineering (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 1800, closingRank: 2200 },
      { id: 18, branch: "Civil Engineering (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 2300, closingRank: 2600 },
      { id: 19, branch: "Civil Engineering (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 2700, closingRank: 2900 },
      { id: 20, branch: "Civil Engineering (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 3000, closingRank: 3200 },
      { id: 21, branch: "Biochemical Engineering and Biotechnology (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 2000, closingRank: 2400 },
      { id: 22, branch: "Biochemical Engineering and Biotechnology (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 2500, closingRank: 2800 },
      { id: 23, branch: "Biochemical Engineering and Biotechnology (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 2900, closingRank: 3100 },
      { id: 24, branch: "Biochemical Engineering and Biotechnology (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 3200, closingRank: 3400 },
      { id: 25, branch: "Engineering and Computational Mechanics (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 2200, closingRank: 2600 },
      { id: 26, branch: "Engineering and Computational Mechanics (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 2700, closingRank: 3000 },
      { id: 27, branch: "Engineering and Computational Mechanics (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 3100, closingRank: 3300 },
      { id: 28, branch: "Engineering and Computational Mechanics (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 3400, closingRank: 3600 },
      { id: 29, branch: "Materials Engineering (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 2300, closingRank: 2700 },
      { id: 30, branch: "Materials Engineering (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 2800, closingRank: 3100 },
      { id: 31, branch: "Materials Engineering (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 3200, closingRank: 3400 },
      { id: 32, branch: "Materials Engineering (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 3500, closingRank: 3700 },
      { id: 33, branch: "Mathematics and Computing (5 Years, Dual Degree)", category: "OPEN", quota: "AI", openingRank: 400, closingRank: 600 },
      { id: 34, branch: "Mathematics and Computing (5 Years, Dual Degree)", category: "OBC-NCL", quota: "AI", openingRank: 700, closingRank: 900 },
      { id: 35, branch: "Mathematics and Computing (5 Years, Dual Degree)", category: "SC", quota: "AI", openingRank: 1000, closingRank: 1200 },
      { id: 36, branch: "Mathematics and Computing (5 Years, Dual Degree)", category: "ST", quota: "AI", openingRank: 1300, closingRank: 1500 },
      { id: 37, branch: "Engineering Physics (5 Years, Dual Degree)", category: "OPEN", quota: "AI", openingRank: 500, closingRank: 700 },
      { id: 38, branch: "Engineering Physics (5 Years, Dual Degree)", category: "OBC-NCL", quota: "AI", openingRank: 800, closingRank: 1000 },
      { id: 39, branch: "Engineering Physics (5 Years, Dual Degree)", category: "SC", quota: "AI", openingRank: 1100, closingRank: 1300 },
      { id: 40, branch: "Engineering Physics (5 Years, Dual Degree)", category: "ST", quota: "AI", openingRank: 1400, closingRank: 1600 },
      { id: 41, branch: "Production and Industrial Engineering (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 1500, closingRank: 1900 },
      { id: 42, branch: "Production and Industrial Engineering (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 2000, closingRank: 2300 },
      { id: 43, branch: "Production and Industrial Engineering (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 2400, closingRank: 2600 },
      { id: 44, branch: "Production and Industrial Engineering (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 2700, closingRank: 2900 },
      { id: 45, branch: "Textile Technology (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 1800, closingRank: 2200 },
      { id: 46, branch: "Textile Technology (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 2300, closingRank: 2600 },
      { id: 47, branch: "Textile Technology (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 2700, closingRank: 2900 },
      { id: 48, branch: "Textile Technology (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 3000, closingRank: 3200 }
    ],
    2: [
      { id: 1, branch: "Computer Science and Engineering (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 150, closingRank: 300 },
      { id: 2, branch: "Computer Science and Engineering (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 350, closingRank: 500 },
      { id: 3, branch: "Computer Science and Engineering (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 800, closingRank: 1000 },
      { id: 4, branch: "Computer Science and Engineering (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 1100, closingRank: 1300 },
      { id: 5, branch: "Electrical Engineering (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 600, closingRank: 900 },
      { id: 6, branch: "Electrical Engineering (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 1000, closingRank: 1200 },
      { id: 7, branch: "Electrical Engineering (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 1400, closingRank: 1600 },
      { id: 8, branch: "Electrical Engineering (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 1700, closingRank: 1900 },
      { id: 9, branch: "Mechanical Engineering (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 1300, closingRank: 1700 },
      { id: 10, branch: "Mechanical Engineering (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 1800, closingRank: 2100 },
      { id: 11, branch: "Mechanical Engineering (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 2200, closingRank: 2400 },
      { id: 12, branch: "Mechanical Engineering (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 2500, closingRank: 2700 },
      { id: 13, branch: "Chemical Engineering (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 1600, closingRank极速赛车开奖官网: 2000 },
      { id: 14, branch: "Chemical Engineering (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 2100, closingRank: 2400 },
      { id: 15, branch: "Chemical Engineering (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 2500, closingRank: 2700 },
      { id: 16, branch: "Chemical Engineering (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 2800, closingRank: 3000 },
      { id: 17, branch: "Civil Engineering (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 1900, closingRank: 2300 },
      { id: 18, branch: "Civil Engineering (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 2400, closingRank: 2700 },
      { id: 19, branch: "Civil Engineering (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 2800, closingRank: 3000 },
      { id: 20, branch: "Civil Engineering (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 3100, closingRank: 3300 },
      { id: 21, branch: "Biochemical Engineering and Biotechnology (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 2100, closingRank: 2500 },
      { id: 22, branch: "Biochemical Engineering and Biotechnology (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 2600, closingRank: 2900 },
      { id: 23, branch: "Biochemical Engineering and Biotechnology (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 3000, closingRank: 3200 },
      { id: 24, branch: "Biochemical Engineering and Biotechnology (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 3300, closingRank: 3500 },
      { id: 25, branch: "Engineering and Computational Mechanics (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 2300, closingRank: 2700 },
      { id: 26, branch: "Engineering and Computational Mechanics (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 2800, closingRank: 3100 },
      { id: 27, branch: "Engineering and Computational Mechanics (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 3200, closingRank: 3400 },
      { id: 28, branch: "Engineering and Computational Mechanics (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 3500, closingRank: 3700 },
      { id: 29, branch: "Materials Engineering (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 2400, closingRank: 2800 },
      { id: 30, branch: "Materials Engineering (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 2900, closingRank: 3200 },
      { id: 31, branch: "Materials Engineering (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 3300, closingRank: 3500 },
      { id: 32, branch: "Materials Engineering (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 3600, closingRank: 3800 },
      { id: 33, branch: "Mathematics and Computing (5 Years, Dual Degree)", category: "OPEN", quota: "AI", openingRank: 450, closingRank: 650 },
      { id: 34, branch: "Mathematics and Computing (5 Years, Dual Degree)", category: "OBC-NCL", quota: "AI", openingRank: 750, closingRank: 950 },
      { id: 35, branch: "Mathematics and Computing (5 Years, Dual Degree)", category: "SC", quota: "AI", openingRank: 1050, closingRank: 1250 },
      { id: 36, branch: "Mathematics and Computing (5 Years, Dual Degree)", category: "ST", quota: "AI", openingRank: 1350, closingRank: 1550 },
      { id: 37, branch: "Engineering Physics (5 Years, Dual Degree)", category: "OPEN", quota: "AI", openingRank: 600, closingRank: 800 },
      { id: 38, branch: "Engineering Physics (5 Years, Dual Degree)", category: "OBC-NCL", quota: "AI", openingRank: 850, closingRank: 1050 },
      { id: 39, branch: "Engineering Physics (5 Years, Dual Degree)", category: "SC", quota: "AI", openingRank: 1150, closingRank: 1350 },
      { id: 40, branch: "Engineering Physics (5 Years, Dual Degree)", category: "ST", quota: "AI", openingRank: 1450, closingRank: 1650 },
      { id: 41, branch: "Production and Industrial Engineering (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 1600, closingRank: 2000 },
      { id: 42, branch: "Production and Industrial Engineering (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 2100, closingRank: 2400 },
      { id: 43, branch: "Production and Industrial Engineering (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 2500, closingRank: 2700 },
      { id: 44, branch: "Production and Industrial Engineering (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 2800, closingRank: 3000 },
      { id: 45, branch: "Textile Technology (4 Years, B.Tech)", category: "OPEN", quota: "AI", openingRank: 1900, closingRank: 2300 },
      { id: 46, branch: "Textile Technology (4 Years, B.Tech)", category: "OBC-NCL", quota: "AI", openingRank: 2400, closingRank: 2700 },
      { id: 47, branch: "Textile Technology (4 Years, B.Tech)", category: "SC", quota: "AI", openingRank: 2800, closingRank: 3000 },
      { id: 48, branch: "Textile Technology (4 Years, B.Tech)", category: "ST", quota: "AI", openingRank: 3100, closingRank: 3300 }
    ]
  };

  // Filter data based on selections
  const filteredData = cutoffData[selectedRound] 
    ? cutoffData[selectedRound].filter(item => 
        (selectedCategory === 'All' || item.category === selectedCategory) &&
        (selectedQuota === 'All' || item.quota === selectedQuota)
      )
    : [];

  return (
    <div className="cutoff-container">
      <Navbar />
      <Hero />
      
      <div className="cutoff-content">
        <h1>IIT Delhi JoSAA 2025 Cutoffs</h1>
        
        {/* Round Selection */}
        <div className="round-selector">
          {[1, 2, 3, 4, 5, 6].map(round => (
            <button
              key={round}
              className={`round-btn ${selectedRound === round ? 'active' : ''}`}
              onClick={() => setSelectedRound(round)}
            >
              Round {round}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="filters">
          <div className="filter-group">
            <label>Category:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Quota:</label>
            <select 
              value={selectedQuota} 
              onChange={(e) => setSelectedQuota(e.target.value)}
            >
              {quotas.map(quota => (
                <option key={quota} value={quota}>{quota}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Data Table */}
        <div className="cutoff-table">
          {selectedRound <= 2 ? (
            filteredData.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Branch</th>
                    <th>Category</th>
                    <th>Quota</th>
                    <th>Opening Rank</th>
                    <th>Closing Rank</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map(item => (
                    <tr key={item.id}>
                      <td>{item.branch}</td>
                      <td>{item.category}</td>
                      <td>{item.quota}</td>
                      <td>{item.openingRank}</td>
                      <td>{item.closingRank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="no-data">
                <p>No cutoff data available for the selected filters</p>
              </div>
            )
          ) : (
            <div className="tbd-message">
              <h2>Cutoffs for Round {selectedRound}</h2>
              <p>To be declared after Round {selectedRound} counseling</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cutoff;
