import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import './seatmatrix.css';

const Seatmatrix = () => {
  const categories = [
    'OPEN', 'OPEN-PwD', 'GEN-EWS', 'GEN-EWS-PwD',
    'OBC-NCL', 'OBC-NCL-PwD', 'SC', 'SC-PwD', 'ST', 'ST-PwD'
  ];
  const genderPools = ['Gender-Neutral', 'Female-only'];

  const fullSeatData =   
    // === PASTE ALL YOUR JSON OBJECTS HERE ===
    [
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 31
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 7
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 20
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 11
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 6
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Female-only",
    "seats": 7
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Female-only",
    "seats": 10
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Female-only",
    "seats": 4
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Computer Science and Engineering (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 34
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 8
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 22
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 13
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 6
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Female-only",
    "seats": 8
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Female-only",
    "seats": 14
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Female-only",
    "seats": 6
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Female-only",
    "seats": 3
  },
  {
    "branch": "Electrical Engineering (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Female-only",
    "seats": 0
  },
     {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 27
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 7
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 17
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 9
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 5
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Female-only",
    "seats": 6
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Female-only",
    "seats": 4
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Female-only",
    "seats": 3
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Mechanical Engineering (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Female-only",
    "seats": 0
  },

  // === Chemical Engineering (4 Years, B.Tech) ===
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 23
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 5
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 16
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 9
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 4
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Female-only",
    "seats": 6
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Female-only",
    "seats": 3
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Chemical Engineering (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Female-only",
    "seats": 0
  },

  // === Civil Engineering (4 Years, B.Tech) ===
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 34
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 8
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 23
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 12
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 6
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Female-only",
    "seats": 9
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Female-only",
    "seats": 5
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Female-only",
    "seats": 3
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Civil Engineering (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Female-only",
    "seats": 0
  },

  // === Biochemical Engineering and Biotechnology (4 Years, B.Tech) ===
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 18
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 5
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 12
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 7
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 4
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Female-only",
    "seats": 4
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Female-only",
    "seats": 3
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Biochemical Engineering and Biotechnology (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Female-only",
    "seats": 0
  },

  // === Engineering and Computational Mechanics (4 Years, B.Tech) ===
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 12
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 3
  },
  {
  "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 9
  },
  {
    "branch": "Engineering and Computational Mechanics极速赛车开奖官网 (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 4
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 2
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "极速赛车开奖官网seats": 0
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Female-only",
    "seats": 3
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Engineering and Computational Mechanics (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Female-only",
    "seats": 0
  },

  // === Materials Engineering (4 Years, B.Tech) ===
  // (Same data as Engineering and Computational Mechanics)
 {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 12
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 3
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 9
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 4
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 2
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Female-only",
    "seats": 3
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Materials Engineering (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Female-only",
    "seats": 0
  },

  // Engineering Physics (4 Years, B.Tech)
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 19
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 4
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 14
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 8
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 3
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Female-only",
    "seats": 5
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Engineering Physics (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Female-only",
    "seats": 0
  },

  // Production and Industrial Engineering (4 Years, B.Tech)
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 26
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 5
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 17
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 10
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 5
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Female-only",
    "seats": 5
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Female-only",
    "seats": 3
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Production and Industrial Engineering (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Female-only",
    "seats": 0
  },

  // Textile Technology (4 Years, B.Tech)
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 27
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 7
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 19
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 10
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 5
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Female-only",
    "seats": 6
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Female-only",
    "seats": 4
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Textile Technology (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  // ... (20 entries identical to Engineering and Computational Mechanics) ...

  // === Mathematics and Computing (4 Years, B.Tech) ===
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 28
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 6
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 18
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 11
 },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 5
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "OPEN",
    "gender": "Female-only",
    "seats": 7
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "OPEN-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "GEN-EWS",
    "gender": "Female-only",
    "seats": 2
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "GEN-EWS-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "OBC-NCL",
    "gender": "Female-only",
    "seats": 4
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "OBC-NCL-PwD",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "SC",
    "gender": "Female-only",
    "seats": 3
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "SC-PwD",
    "gender": "Female-only",
    "seats": 0
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "ST",
    "gender": "Female-only",
    "seats": 1
  },
  {
    "branch": "Mathematics and Computing (4 Years, B.Tech)",
    "category": "ST-PwD",
    "gender": "Female-only",
    "seats": 0
  },
 // Chemical Engineering (5 Years, Dual Degree)
  {
    "branch": "Chemical Engineering (5 Years, Dual Degree)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 15
  },
  {
    "branch": "Chemical Engineering (5 Years, Dual Degree)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Chemical Engineering (5 Years, Dual Degree)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 3
  },
  {
    "branch": "Chemical Engineering (5 Years, Dual Degree)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Chemical Engineering (5 Years, Dual Degree)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 9
  },
  {
    "branch": "Chemical Engineering (5 Years, Dual Degree)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Chemical Engineering (5 Years, Dual Degree)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 4
  },
  {
    "branch": "Chemical Engineering (5 Years, Dual Degree)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Chemical Engineering (5 Years, Dual Degree)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 3
  },
  {
    "branch": "Chemical Engineering (5 Years, Dual Degree)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },

  // Computer Science and Engineering (5 Years, Dual Degree)
  {
    "branch": "Computer Science and Engineering (5 Years, Dual Degree)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 11
  },
  {
    "branch": "Computer Science and Engineering (5 Years, Dual Degree)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Computer Science and Engineering (5 Years, Dual Degree)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 3
  },
  {
    "branch": "Computer Science and Engineering (5 Years, Dual Degree)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Computer Science and Engineering (5 Years, Dual Degree)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 8
  },
  {
    "branch": "Computer Science and Engineering (5 Years, Dual Degree)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Computer Science and Engineering (5 Years, Dual Degree)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 4
  },
  {
    "branch": "Computer Science and Engineering (5 Years, Dual Degree)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Computer Science and Engineering (5 Years, Dual Degree)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 2
  },
  {
    "branch": "Computer Science and Engineering (5 Years, Dual Degree)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },

  // Mathematics and Computing (5 Years, Dual Degree)
  {
    "branch": "Mathematics and Computing (5 Years, Dual Degree)",
    "category": "OPEN",
    "gender": "Gender-Neutral",
    "seats": 10
  },
  {
    "branch": "Mathematics and Computing (5 Years, Dual Degree)",
    "category": "OPEN-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Mathematics and Computing (5 Years, Dual Degree)",
    "category": "GEN-EWS",
    "gender": "Gender-Neutral",
    "seats": 3
  },
  {
    "branch": "Mathematics and Computing (5 Years, Dual Degree)",
    "category": "GEN-EWS-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Mathematics and Computing (5 Years, Dual Degree)",
    "category": "OBC-NCL",
    "gender": "Gender-Neutral",
    "seats": 7
  },
  {
    "branch": "Mathematics and Computing (5 Years, Dual Degree)",
    "category": "OBC-NCL-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  },
  {
    "branch": "Mathematics and Computing (5 Years, Dual Degree)",
    "category": "SC",
    "gender": "Gender-Neutral",
    "seats": 3
  },
  {
    "branch": "Mathematics and Computing (5 Years, Dual Degree)",
    "category": "SC-PwD",
    "gender": "Gender-Neutral",
    "seats": 1
  },
  {
    "branch": "Mathematics and Computing (5 Years, Dual Degree)",
    "category": "ST",
    "gender": "Gender-Neutral",
    "seats": 2
  },
  {
    "branch": "Mathematics and Computing (5 Years, Dual Degree)",
    "category": "ST-PwD",
    "gender": "Gender-Neutral",
    "seats": 0
  }
   // Add the rest of your 50+ entries here from the data you posted
  ];

  const [selectedCategory, setSelectedCategory] = useState('OPEN');
  const [selectedGender, setSelectedGender] = useState('Gender-Neutral');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = fullSeatData.filter(
      (item) =>
        item.category === selectedCategory &&
        item.gender === selectedGender
    );
    setFilteredData(filtered);
  }, [selectedCategory, selectedGender]);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="seat-matrix-section">
        <h2>Seat Matrix - IIT Delhi 2024</h2>

        <div className="filters">
          <div>
            <label>Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Seat Pool:</label>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
            >
              {genderPools.map((pool) => (
                <option key={pool} value={pool}>{pool}</option>
              ))}
            </select>
          </div>
        </div>

        <table className="seat-table">
          <thead>
            <tr>
              <th>Branch</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.branch}</td>
                  <td>{item.seats}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="no-data">No data available for selected filters.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Seatmatrix;
