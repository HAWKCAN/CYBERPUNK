// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import "./index.css";
import App from "./App.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Side from "./pages/Side.jsx";
import Police from "./pages/Police.jsx";
import StreetRace from "./pages/StreetRace.jsx";




ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Side" element={<Side />} />
      <Route path="/Police" element={<Police />} />
      <Route path="/StreetRace" element={<StreetRace />} />

    </Routes>
  </BrowserRouter>
);
