import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import Navbar from '../Navbar/Navbar';
import Navbar2 from '../navbar2/navbar2';
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Indian Institute of Technology, Delhi</h1>
        <p>     </p>
        <button className='btn'>
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
     <Navbar2/>
    </div>
  );
};

export default Hero;
