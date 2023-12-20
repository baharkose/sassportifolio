import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="home-bgImg-container">
        {/* HOME NAV */}
        
        {/* HOME MAIN */}
        <main className="home">
          <h2>Hi! My Name Is</h2>
          <h1 className="home__name">
            Wednesday <span className="home__name--last">Addams</span>
          </h1>
          <h2>Full Stack Web Developer</h2>
          <h3>Projects</h3>
        </main>
        {/* HOME FOOTER */}
        <footer className="horizontal">
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-twitter fa-2x" />
            </a>
            <a href="#">
              <i className="fab fa-facebook fa-2x" />
            </a>
            <a href="#">
              <i className="fab fa-instagram fa-2x" />
            </a>
            <a href="#">
              <i className="fab fa-github fa-2x" />
            </a>
          </div>
          <div className="copyright">© Copyright 2023</div>
        </footer>
      </div>
    </div>
  );
};

export default Projects;
