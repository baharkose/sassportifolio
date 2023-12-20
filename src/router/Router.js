import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/about/About.jsx";
import Home from "../pages/home/Home.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Projects from "../pages/projects/Projects.jsx";

const Router = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
};

export default Router;
