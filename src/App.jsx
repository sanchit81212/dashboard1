import React from "react";
import { Routes, Route } from "react-router-dom";

import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Footer from "./components/Footer";

import About from "./components/About"; // 👈 Updated single About page
import Hiii from "./components/Hiii";   // Terms of Use
import Faq from "./components/Faq";   // Extra Page
import Iioo from "./components/Iioo";   // Extra Page
import BuyPage from "./components/BuyPage"; // Buy funding account page
import Huuu from "./components/Huuu"; // Affiliate page
import { FaQ } from "react-icons/fa6";

function App() {
  return (
    <Routes>
      {/* ✅ Landing Page */}
      <Route
        path="/"
        element={
          <div>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            <Page6 />
            <Footer />
          </div>
        }
      />

      {/* ✅ About page (has 4 sections inside it) */}
      <Route path="/about" element={<About />} />

      {/* ✅ Other pages */}
      <Route path="/hiii" element={<Hiii />} /> {/* Terms of Use */}
      <Route path="/Faq" element={<Faq />} />
      <Route path="/iioo" element={<Iioo />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/huuu" element={<Huuu />} />
    </Routes>
  );
}

export default App;
