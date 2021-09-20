import React from "react";
import headshot from "./headshot.png";

function About() {
    return (
    <section id="about">
        <h2>About</h2>
    <div className="aboutMe">
        <img src={headshot} alt="My Head"/>
        <p>Welcome to my page! My name is Thang. I am a recent graduate from UNC's Coding Bootcamp. I am a Full Stack Web
          Developer with proficiencies in JavaScript, CSS, React, Node.js, and MySQL. <br></br> When I'm not inside coding, I enjoy going hiking or to the park with my dog. My
          hobbies include playing guitar, cooking,running, and driving (drifting).</p>
          </div>
    </section>
    );
}

export default About;