import React from "react";

function Projects() {
    return (
    
        <section id="work">
        <h2>Projects</h2>
        <content className="container">
        <div className="fouricons">
            <content className="container0">
          <div className="Project1">
            <a href="https://github.com/thangnt336/-tock-News" target="_blank">
              <img src="/Thang-React-Portfolio/images/stocknew.png" style={{width:262 , height:150}} className="firstPic" alt="$tock News"/>
              <div className="overlay1">
                <div className="text">$tock News</div>
              </div>
            </a>
          </div>
          <div className="Project1">
            <a href="https://github.com/thangnt336/Employee-Management-System" target="_blank">
              <img src="/Thang-React-Portfolio/images/employee.png" style={{width:262 , height:150}} className="firstPic" alt="Employee"/>
              <div className="overlay1">
                <div className="text">Employee Management</div>
              </div>
            </a>
          </div>
          </content>
          
            <content className="container1">
              <div className="Project2">
                <a href="https://thangnt336.github.io/Weather-Dashboard/" target="_blank">
                  <img src="/Thang-React-Portfolio/images/weather.png" alt="Weather Dashboard" style={{width:262 , height:150}}></img>
                  <div className="overlay1">
                    <div className="text">Weather Dashboard</div>
                  </div>
                </a>
              </div>
              <div className="Project3">
                <a href="https://thangnt336.github.io/Code-Quiz/" target="_blank">
                  <img src="/Thang-React-Portfolio/images/codequiz.png" alt="Coding Quiz" style={{width:262 , height:150}}></img>
                  <div className="overlay1">
                    <div className="text">Coding Quiz</div>
                  </div>
                </a>
              </div>
            </content>
            <content className="container2">
              <div className="Project4">
                <a href="https://thangnt336.github.io/Password-Generator/" target="_blank">
                  <img src="/Thang-React-Portfolio/images/password.png" alt="Password Generator" style={{width:262 , height:150}}></img>
                  <div className="overlay1">
                    <div className="text">Password Generator</div>
                  </div>
                </a>
              </div>
              <div className="Project5">
                <a href="https://thangnt336.github.io/Work-Day-Scheduler/" target="_blank">
                  <img src="/Thang-React-Portfolio/images/workday.png" alt="Work Day Scheduler" style={{width:262 , height:150}}></img>
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
            <li><a href="https://github.com/thangnt336/-tock-News" target="_blank">/$tock News</a></li>
            <li><a href="https://github.com/thangnt336/Employee-Management-System" target="_blank">/Employee Management</a></li>
            <li><a href="https://github.com/thangnt336/Weather-Dashboard" target="_blank">/Weather Dashboard</a></li>
            <li><a href="https://github.com/thangnt336/Code-Quiz" target="_blank">/Coding Quiz</a></li>
            <li><a href="https://github.com/thangnt336/Password-Generator" target="_blank">/Password Generator</a></li>
            <li><a href="https://github.com/thangnt336/Work-Day-Scheduler" target="_blank">/Work Day Scheduler</a></li>
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