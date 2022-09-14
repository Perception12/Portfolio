import React from "react";
import "../../styles/Footer.css";
import linkedIn from "../../assets/linkedIn-white.svg";
import twitter from "../../assets/twitter-white.svg";
import message from "../../assets/message-white.svg";

const Footer = ({tLink, lnLink}) => {
  return (
    <div className="footer">
      <div className="footer-name">
        <span>
          Kehinde Adejumobi
          <span style={{ color: "var(--primaryColor)" }}>.</span>
        </span>
      </div>
      <div className="social-links">
        <a
          href={lnLink}
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt="" />
        </a>
        <a href={tLink}
        target="_blank"
        rel="noreferrer"
        >
          <img src={twitter} alt="" />
        </a>
        <a href="/">
          <img src={message} alt="" />
        </a>
      </div>
      <div style={{ color: "white", letterSpacing: "2px" }}>
        copyright &copy; 2022 <span style={{ padding: "0 1rem" }}>|</span> All
        rights reserved
      </div>
    </div>
  );
};

export default Footer;
