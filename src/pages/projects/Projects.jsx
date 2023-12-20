import React from "react";
import "./Projects.scss";
import bg from "../../assets/img/model-1.jpg";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProjectCards from "../../components/ProjectCards";

const Projects = () => {
  return (
    <>
      <div className="project-bgImg-container">
        <Navbar />
        <div className="projects__bio-image">
          <h1>My Projects</h1>
        </div>

        <ProjectCards />

        <footer className="vertical">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Projects;
