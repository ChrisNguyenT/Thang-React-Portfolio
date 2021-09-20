import React from "react";
import ResumeThang from "./ResumeThang.pdf"

function Navigation() {
    return (
      <header>
      <nav>
        <div class="menu">
          <h3>Thang Nguyen</h3>
        </div>
        <ul class="links">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Projects</a></li>
          <li><a href={ResumeThang} target="_blank">Resume</a></li>
        </ul>
        <div class="mobileview">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </header>
    );
}

export default Navigation;