import React from "react";
import stocknew from "./stocknew.png";
import weather from "./weather.png";
import vinyl from "./vinyl.png";
import codequiz from "./codequiz.png";
import password from "./password.png";
import workday from "./workday.png";

function Projects() {
    return (
    
        <section id="work">
        <h2>Projects</h2>
        <content className="container">
        <div className="fouricons">
            <content className="container0">
          <div className="Project1">
            <a href="https://chrisnguyent.github.io/-tock-News/" target="_blank">
              <img src={stocknew} style={{width:262 , height:150}} className="firstPic" alt="$tock News"/>
              <div className="overlay1">
                <div className="text">$tock News</div>
              </div>
            </a>
          </div>
          <div className="Project1">
            <a href="https://vinylispluralforvinyl.herokuapp.com/" target="_blank">
              <img src={vinyl} style={{width:262 , height:150}} className="firstPic" alt="Vinyl"/>
              <div className="overlay1">
                <div className="text">Vinyl is Plural for Vinyl</div>
              </div>
            </a>
          </div>
          </content>
          
            <content className="container1">
              <div className="Project2">
                <a href="https://chrisnguyent.github.io/Weather-Dashboard/" target="_blank">
                  <img src={weather} alt="Weather Dashboard" style={{width:262 , height:150}}></img>
                  <div className="overlay1">
                    <div className="text">Weather Dashboard</div>
                  </div>
                </a>
              </div>
              <div className="Project3">
                <a href="https://chrisnguyent.github.io/Code-Quiz/" target="_blank">
                  <img src={codequiz} alt="Coding Quiz" style={{width:262 , height:150}}></img>
                  <div className="overlay1">
                    <div className="text">Coding Quiz</div>
                  </div>
                </a>
              </div>
            </content>
            <content className="container2">
              <div className="Project4">
                <a href="https://chrisnguyent.github.io/Password-Generator/" target="_blank">
                  <img src={password} alt="Password Generator" style={{width:262 , height:150}}></img>
                  <div className="overlay1">
                    <div className="text">Password Generator</div>
                  </div>
                </a>
              </div>
              <div className="Project5">
                <a href="https://chrisnguyent.github.io/Work-Day-Scheduler/" target="_blank">
                  <img src={workday} alt="Work Day Scheduler" style={{width:262 , height:150}}></img>
                  <div className="overlay1">
                    <div className="text">Work Day Scheduler</div>
                  </div>
                </a>
              </div>
            </content>
          </div>
        </content>
        <content className="container3">
          <h4 className="repository" onClick={openList1}>View Repositories</h4>
          <ol id="ollist" style={{display: "none"}}>
            <li><a href="https://github.com/ChrisNguyenT/-tock-News" target="_blank">/$tock News</a></li>
            <li><a href="https://github.com/ChrisNguyenT/Vinyl-Is-Plural-For-Vinyl" target="_blank">/Vinyl is Plural for Vinyl</a></li>
            <li><a href="https://github.com/ChrisNguyenT/Weather-Dashboard" target="_blank">/Weather Dashboard</a></li>
            <li><a href="https://github.com/ChrisNguyenT/Code-Quiz" target="_blank">/Coding Quiz</a></li>
            <li><a href="https://github.com/ChrisNguyenT/Password-Generator" target="_blank">/Password Generator</a></li>
            <li><a href="https://github.com/ChrisNguyenT/Work-Day-Scheduler" target="_blank">/Work Day Scheduler</a></li>
          </ol>
        </content>
      </section>
    );
}

function openList1() {
  var list = document.getElementById("ollist");

  if (list.style.display == "none"){
      list.style.display = "block";
  }else{
      list.style.display = "none";
  }
}

export default Projects;