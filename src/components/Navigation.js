import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"


function Navigation() {
    return (
        <Router>
        <header>
        <nav>
          <div className="menu">
            <h3>Thang Nguyen</h3>
          </div>
          <ul className="links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="mobileview">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
      
      <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/work"><Projects /></Route>
          <Route path="/resume"><Resume /></Route>
          <Route path="/contact"><Contact /></Route>
      </Switch>
      </Router>
    );
}

export default Navigation;