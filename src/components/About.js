import React from "react";
import headshot from "./headshot.png";

function About() {
    return (
    <section id="about">
        <h2>About</h2>
    <div className="aboutMe">
        <img src={headshot} alt="My Head"/>
        <p>Welcome to my page! My name is Chris and I am a recent graduate from UNC's Coding Bootcamp. I am currently a Full Stack Web
          Developer with a focus on Front End Development using React.<br></br> When I'm not inside coding, I enjoy going hiking or to the park with my dog. My
          hobbies include playing guitar, cooking,running, and drifting.</p>
          </div>
    </section>
    );
}

export default About;