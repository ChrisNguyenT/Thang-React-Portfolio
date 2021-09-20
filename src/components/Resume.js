import React from "react";
import ResumeThang from "./ResumeThang.pdf"

function Resume() {
    return (
    
        <section id="resume">
        <h2>Resume</h2>
        <div className="resumeStyle">
          <h4><a href={ResumeThang} target="_blank">View Resume</a></h4>
        </div>
          
      </section>
    );
}

export default Resume;