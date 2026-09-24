import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./pages/App";
import Display from "./pages/Display";

createRoot(document.querySelector("body")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
