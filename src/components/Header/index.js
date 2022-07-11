import React, {Component} from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../../components/Nav';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Project from '../../components/Project';
import Resume from '../../components/Resume';

class Header extends Component {   
    render() {
    return (
        <div className="App">
        <Router>
          <Navigation />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
            
         </Router>
         </div>
    )
}
}

export default Header;