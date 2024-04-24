import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/Home';
import About from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/myProject';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Capitalize the component name
const Pages = () => {
  return (
    <div className="sections">
      <Home />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
};

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Pages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
