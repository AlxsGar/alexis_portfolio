import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Body/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Components/Body/Portfolio/Portfolio";
import Hobbies from "./Components/Body/Hobbies/Hobbies";
import About from "./Components/Body/AboutMe/About";
import Contact from "./Components/Body/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
