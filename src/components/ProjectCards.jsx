import React from "react";
import project1 from "../assets/img/project-1.jpg";
import project2 from "../assets/img/project-2.jpg";
import project3 from "../assets/img/project-3.jpg";
import project4 from "../assets/img/project-4.jpg";
import project5 from "../assets/img/project-5.jpg";
import project6 from "../assets/img/project-6.jpg";
import "../pages/projects/Projects.scss";
const ProjectCards = () => {
  return (
    <>
    <main className="projects">
      <div className="projects__items">
        <div className="projects__item">
          <img src={project1} alt="My Project" />
        </div>
        <div className="projects__item">
          <img src={project2} alt="My Project" />
        </div>
        <div className="projects__item">
          <img src={project3} alt="My Project" />
        </div>
        <div className="projects__item">
          <img src={project4} alt="My Project" />
        </div>
        <div className="projects__item">
          <img src={project5} alt="My Project" />
        </div>
        <div className="projects__item">
          <img src={project6} alt="My Project" />
        </div>
      </div>
      </main>
    </>
  );
};

export default ProjectCards;
