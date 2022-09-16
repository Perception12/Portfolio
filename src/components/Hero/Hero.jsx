import React from "react";
import "../../styles/Hero.css";
import Nav from "../Nav/Nav";
import linkedIn from "../../assets/linkedIn.svg";
import twitter from "../../assets/twitter.svg";
import programmer from '../../assets/programmer.png';

const Hero = ({tLink, lnLink}) => {
  return (
    <div className="hero">
      <Nav tLink={tLink} lnLink={lnLink} />
      <div className="hero-l">
        <span className="greeting">Hi There 👋</span>
        <div className="name">I am kehinde Adejumobi</div>
        <div className="title">
          A Frontend Developer, Embedded Software Engineer and Content
          Creator.
        </div>
        <div className="social-links">
          <a href={lnLink}
          target="_blank"
          rel="noreferrer"
          >
            <img src={linkedIn} alt="linkedIn" />
          </a>

          <a href={tLink}
          target="_blank"
          rel="noreferrer"
          >
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
