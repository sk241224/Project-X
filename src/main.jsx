import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Colleges from "./pages/Colleges";
import Collegeinfo from "./components/Collegeinfo/Collegeinfo";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/colleges" element={<Colleges />} />
    </Routes>
  </BrowserRouter>
);
