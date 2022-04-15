import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Css from "../pages/Css";
import Logo from "../pages/Logo";
import Html from "../pages/Html";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/css" element={<Css />} />
            <Route path="/logo" element={<Logo />} />
            <Route path="/html" element={<Html />} />
            {/* <Route path="*" element={<Home />} /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
