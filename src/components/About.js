import React from "react";
import headshot from "./headshot.png";

function About() {
    return (
    <section id="about">
        <h2>About</h2>
    <div className="aboutMe">
        <img src={headshot} alt="My Head"/>
        <p>Welcome to my page! My name is Chris and I'm currently a freelance web developer. <br></br>If you need any websites designed and built, I'm your guy.</p>
          </div>
    </section>
    );
}

export default About;