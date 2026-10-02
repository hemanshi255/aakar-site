import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Pricing from "./pages/pricing/Pricing";
import Work from "./pages/work/Work";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import TermsCondition from "./pages/terms-condition/TermsCondition";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
