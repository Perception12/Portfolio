import React from 'react'
import '../../styles/Nav.css';
import linkedIn from '../../assets/linkedIn.svg';
import twitter from '../../assets/twitter.svg';

const Nav = () => {
  return (
    <div className="nav">
        <div className="nav-l">
            <div className="logo">
                Kehinde Adejumobi<span>.</span>
            </div>
            <ul className="menu">
                <li>About Me</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact Me</li>
            </ul>
        </div>
        <div className="nav-r">
            <a href="#">
                <img src={linkedIn} alt="icon" />
            </a>
            <a href="#">
                <img src={twitter} alt="icon" />
            </a>
        </div>
    </div>
  )
}

export default Nav