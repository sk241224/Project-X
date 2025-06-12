import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Colleges from "./components/colleges";
import IITBombay from "./components/iitbombay.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/colleges" element={<Colleges />} />
      <Route path="/iitbombay" element={<IITBombay />} /> 
    </Routes>
  </BrowserRouter>
);
