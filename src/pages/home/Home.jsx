import React from "react";
import "./Home.scss"
import "../../components/Footer/Footer.scss"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (

    <div className="home-bgImg-container">
  {/* HOME NAV */}
 <Navbar/>
  {/* HOME MAIN */}
  <main className="home">
    <h2>Hi! My Name Is</h2>
    <h1 className="home__name">
      Wednesday <span className="home__name--last">Addams</span>
    </h1>
    <h2>Full Stack Web Developer</h2>
  </main>
  {/* HOME FOOTER */}
  <footer className="horizontal">
    <Footer/>
  </footer>
</div>
  );
};

export default Home;
