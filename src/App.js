import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import Intro from "./Components/Intro"; // Your Intro component
import AboutMe from "./Components/Aboutme"; // Your AboutMe component
import ContactMe from "./Components/contactme"; // Your ContactMe component
import Projects from "./Components/Project"; // Your Projects component
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
