import React, { useState } from "react";
import "./placement.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const placementData = {
  2024: {
    chart: [
      { branch: "BCBT", Registered: 60, Placed: 37 },
      { branch: "CE", Registered: 82, Placed: 46 },
      { branch: "CHE", Registered: 68, Placed: 49 },
      { branch: "CSE", Registered: 107, Placed: 93 },
      { branch: "ECM", Registered: 31, Placed: 23 },
      { branch: "EE", Registered: 121, Placed: 99 },
      { branch: "EE(P&A)", Registered: 57, Placed: 46 },
      { branch: "EP", Registered: 48, Placed: 25 },
      { branch: "ME", Registered: 86, Placed: 60 },
      { branch: "MNC", Registered: 90, Placed: 74 },
      { branch: "MTE", Registered: 30, Placed: 24 },
      { branch: "PIE", Registered: 67, Placed: 54 },
      { branch: "TT", Registered: 89, Placed: 53 },
      { branch: "DD-CHE", Registered: 46, Placed: 33 },
      { branch: "DD-CSE", Registered: 41, Placed: 40 },
      { branch: "DD-MNC", Registered: 32, Placed: 25 },
    ],
    percentage: [
      { branch: "Computer Science and Engineering", percentage: "86.92%" },
      { branch: "Electrical Engineering", percentage: "81.82%" },
      { branch: "Mechanical Engineering", percentage: "69.77%" },
      { branch: "Civil Engineering", percentage: "56.10%" },
      { branch: "Engineering Physics", percentage: "52.08%" },
      { branch: "Mathematics and Computing", percentage: "82.22%" },
      { branch: "Textile Technology", percentage: "59.55%" },
      { branch: "Chemical Engineering", percentage: "72.06%" },
      { branch: "Production and Industrial Engineering", percentage: "80.60%" },
      { branch: "Engineering and Computational Mechanics", percentage: "74.19%" },
      { branch: "Materials Engineering", percentage: "80.00%" },
      { branch: "Overall B.Tech.", percentage: "72.97%" },
      { branch: "DD-CHE", percentage: "71.74%" },
      { branch: "DD-CSE", percentage: "97.56%" },
      { branch: "DD-MNC", percentage: "78.13%" },
      { branch: "Overall Dual Degree", percentage: "82.35%" },
    ],
    salary: {
      medianDomestic: "₹18 LPA",
      averageDomestic: "₹23.1 LPA",
      medianInternational: "₹20 LPA",
      averageInternational: "₹28.6 LPA",
    },
  },

  2023: {
    chart: [
      { branch: "BCBT", Registered: 46, Placed: 38 },
      { branch: "CE", Registered: 63, Placed: 53 },
      { branch: "CHE", Registered: 67, Placed: 61 },
      { branch: "CSE", Registered: 95, Placed: 94 },
      { branch: "EE", Registered: 95, Placed: 92 },
      { branch: "EE(P&A)", Registered: 49, Placed: 47 },
      { branch: "ME", Registered: 70, Placed: 58 },
      { branch: "PIE", Registered: 68, Placed: 62 },
      { branch: "MNC", Registered: 67, Placed: 65 },
      { branch: "EP", Registered: 41, Placed: 34 },
      { branch: "TT", Registered: 90, Placed: 72 },
      { branch: "DD-CHE", Registered: 38, Placed: 32 },
      { branch: "DD-CSE", Registered: 29, Placed: 27 },
      { branch: "DD-MNC", Registered: 24, Placed: 23 },
      { branch: "DD-BCBT", Registered: 8, Placed: 7 },
    ],
    percentage: [
      { branch: "Computer Science and Engineering", percentage: "98.95%" },
      { branch: "Electrical Engineering", percentage: "96.84%" },
      { branch: "Mechanical Engineering", percentage: "82.86%" },
      { branch: "Civil Engineering", percentage: "84.13%" },
      { branch: "Engineering Physics", percentage: "82.93%" },
      { branch: "Mathematics and Computing", percentage: "97.01%" },
      { branch: "Textile Technology", percentage: "80.00%" },
      { branch: "Chemical Engineering", percentage: "91.04%" },
      { branch: "Production and Industrial Engineering", percentage: "91.18%" },
      { branch: "Overall B.Tech.", percentage: "90.01%" },
      { branch: "DD-BCBT", percentage: "87.50%" },
      { branch: "DD-CHE", percentage: "84.21%" },
      { branch: "DD-CSE", percentage: "93.10%" },
      { branch: "DD-MNC", percentage: "95.83%" },
      { branch: "Overall Dual Degree", percentage: "89.90%" },
    ],
    salary: {
      medianDomestic: "₹18 LPA",
      averageDomestic: "₹21.9 LPA",
      medianInternational: "₹18.5 LPA",
      averageInternational: "₹27 LPA",
    },
  },

  2022: {
    chart: [
      { branch: "BTBC", Registered: 34, Placed: 29 },
      { branch: "CE", Registered: 72, Placed: 54 },
      { branch: "CHE", Registered: 66, Placed: 58 },
      { branch: "CSE", Registered: 84, Placed: 83 },
      { branch: "EE", Registered: 93, Placed: 85 },
      { branch: "EE(P&A)", Registered: 47, Placed: 43 },
      { branch: "ME", Registered: 70, Placed: 61 },
      { branch: "PIE", Registered: 70, Placed: 62 },
      { branch: "MNC", Registered: 45, Placed: 44 },
      { branch: "EP", Registered: 45, Placed: 32 },
      { branch: "TT", Registered: 81, Placed: 69 },
      { branch: "DD-BTBC", Registered: 13, Placed: 13 },
      { branch: "DD-CE", Registered: 40, Placed: 38 },
      { branch: "DD-CSE", Registered: 22, Placed: 21 },
      { branch: "DD-MNC", Registered: 20, Placed: 17 },
    ],
    percentage: [
      { branch: "Computer Science and Engineering", percentage: "98.81%" },
      { branch: "Electrical Engineering", percentage: "91.40%" },
      { branch: "Mechanical Engineering", percentage: "87.14%" },
      { branch: "Civil Engineering", percentage: "75.00%" },
      { branch: "Engineering Physics", percentage: "71.11%" },
      { branch: "Mathematics and Computing", percentage: "97.78%" },
      { branch: "Textile Technology", percentage: "85.19%" },
      { branch: "Chemical Engineering", percentage: "87.88%" },
      { branch: "Production and Industrial Engineering", percentage: "88.57%" },
      { branch: "Overall B.Tech.", percentage: "87.69%" },
      { branch: "DD-BTBC", percentage: "100.00%" },
      { branch: "DD-CE", percentage: "95.00%" },
      { branch: "DD-CSE", percentage: "95.45%" },
      { branch: "DD-MNC", percentage: "85.00%" },
      { branch: "Overall Dual Degree", percentage: "93.68%" },
    ],
    salary: {
      medianDomestic: "₹16 LPA",
      averageDomestic: "₹20.5 LPA",
      medianInternational: "₹20 LPA",
      averageInternational: "₹28 LPA",
    },
  },
};

const Placement = () => {
  const [year, setYear] = useState(2024);
  const data = placementData[year];

  return (
    <div id="placement" className="placement-wrapper">
      <div className="placement-container">
        <h2>IIT Delhi Placement Statistics</h2>

        <div className="year-selector">
          {[2024, 2023, 2022].map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={year === y ? "active" : ""}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data.chart}
              margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="branch" angle={-45} textAnchor="end" interval={0} height={90} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Registered" fill="#1f77b4" />
              <Bar dataKey="Placed" fill="#ff7f0e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <h3>Placement Percentages</h3>
        <table className="stats-table">
          <thead>
            <tr>
              <th>Branch</th>
              <th>Placement %</th>
            </tr>
          </thead>
          <tbody>
            {data.percentage.map((item, index) => (
              <tr key={index}>
                <td>{item.branch}</td>
                <td>{item.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Median & Average Salaries</h3>
        <table className="stats-table salary-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Domestic</th>
              <th>International</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Median</td>
              <td>{data.salary.medianDomestic}</td>
              <td>{data.salary.medianInternational}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{data.salary.averageDomestic}</td>
              <td>{data.salary.averageInternational}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Placement;
