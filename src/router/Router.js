import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/about/About.jsx";
import Home from "../pages/home/Home.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Projects from "../pages/projects/Projects.jsx";
import NotFound from "../components/Error/NotFound.jsx"
import Footer from "../components/Footer/Footer.jsx"

const Router = () => {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    
    </div>
  );
};

export default Router;
