import React from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Aboutme from "./Components/Aboutme";
import Projects from "./Components/Project";
import ContactMe from "./Components/contactme";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Aboutme />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Home;
