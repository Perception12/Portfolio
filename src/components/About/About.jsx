import React from 'react';
import '../../styles/About.css';
import linkedIn from "../../assets/linkedIn.svg";
import twitter from "../../assets/twitter.svg";

const About = () => {
  return (
    <div className="about">
        <h1>About Me</h1>
        <p>Kehinde Adejumobi is a self-motivated and impact driven individual with proven leadership and organizational skills. Adept in working with technologies in software development. Possesses ability to work with a cross-functional team to help different organizations achieve its goals. A computer engineering student aiming to build a career in embedded systems and Software Engineering</p>
        <div className="social-links">
        <a href="#">
            <img src={linkedIn} alt="linkedIn" />
          </a>

          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
    </div>
  )
}

export default About