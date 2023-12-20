import React from "react";
import "./Projects.scss";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Projects = () => {
  return (
    <>
      <div classname="project-bgImg-container">
        {"{"}/* PROJECT NAV */{"}"}
       <Navbar/>
        <div classname="projects__bio-image">
          <h1>My Projects</h1>
        </div>
      </div>
      {"{"}/* PROJECT MAIN */{"}"}
      <main classname="projects">
        <div classname="projects__items">
          
        </div>
      </main>
    
      <footer classname="vertical">
       <Footer/>
      </footer>
     
    </>
  );
};

export default Projects;
