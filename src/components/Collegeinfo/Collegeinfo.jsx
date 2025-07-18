import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Hero from "../Hero/Hero.jsx";
import Programs from "../Programs/Programs";
import Title from "../Title/Title";
import Extra from "../extratemp/extra";
import Navbar2 from "../navbar2/navbar2";
import Location from "../Locationtemp/location";
import Overview from "../Overview/overview";
import About from "../About/About";
import Campus from "../Campus/Campus";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Seatmatrix from "../Seatmatrix/seatmatrix";
import Cutoff from "../Cutoff/cutoff";
import Ranking from "../Rankings/rank";
import Placement from "../placement/placement"; // now embedded in home

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <Hero />
            <Navbar2 />
            <Extra />
            <Overview />
            <Location />
            <Ranking />
            <div id="placement">
              <Placement />
            </div>
            <Title subTitle="Gallery" title="Campus Photos" />
            <Campus />
            <About setPlayState={setPlayState} />
            <Title subTitle="Our PROGRAM" title="What We Offer" />
            <Programs />
            <Title subTitle="TESTIMONIALS" title="What Student Says" />
            <Testimonials />
            <Title subTitle="Contact Us" title="Get in Touch" />
            <Contact />
            <Footer />
            <VideoPlayer playState={playState} setPlayState={setPlayState} />
          </div>
        }
      />
      <Route path="/Seatmatrix" element={<Seatmatrix />} />
      <Route path="/Cutoff" element={<Cutoff />} />
    </Routes>
  );
};

export default App;
