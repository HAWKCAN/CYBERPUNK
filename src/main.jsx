import React from "react";
import ReactDOM from "react-dom/client"; // ✅ gunakan ini untuk createRoot
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ import router

import "./index.css";
import App from "./App.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
