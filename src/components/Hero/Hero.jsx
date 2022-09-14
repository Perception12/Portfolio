import React from "react";
import "../../styles/Hero.css";
import Nav from "../Nav/Nav";
import linkedIn from "../../assets/linkedIn.svg";
import twitter from "../../assets/twitter.svg";
import programmer from '../../assets/programmer.png';

const Hero = () => {
  return (
    <div className="hero">
      <Nav />
      <div className="hero-l">
        <span className="greeting">Hi There</span>
        <div className="name">I am kehinde Adejumobi</div>
        <div className="title">
          A Full-Stack Developer, Embedded Software Engineer and Content
          Creator.
        </div>
        <div className="social-links">
          <a href="#">
            <img src={linkedIn} alt="linkedIn" />
          </a>

          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
      <div className="hero-r">
        <img src={programmer} alt="programmer" />
      </div>
    </div>
  );
};

export default Hero;
