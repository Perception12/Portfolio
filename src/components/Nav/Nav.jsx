import React from "react";
import "../../styles/Nav.css";
import linkedIn from "../../assets/linkedIn.svg";
import twitter from "../../assets/twitter.svg";
import { useState } from "react";
import Bars from "../../assets/bars.png";
import { Link as Scroll } from "react-scroll";

const Nav = ({ tLink, lnLink }) => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="nav">
      <div className="nav-l">
        <div className="logo">
          Kehinde Adejumobi<span>.</span>
        </div>

        {menuOpened === false && mobile === true ? (
          <div
            style={{
              backgroundColor: "var(--primaryColor)",
              border: "1px solid var(--secondaryColor)",
              borderRadius: "5px",
              padding: "0.5rem",
              position: "fixed",
              right: "2rem",
              top: "2rem",
              zIndex: 99,
            }}
            onClick={() => {
              setMenuOpened(true);
            }}
          >
            <img
              src={Bars}
              alt=""
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </div>
        ) : (
          <div onClick={() => setMenuOpened(false)} className="dropdown">
            <ul className="menu">
              <li>
                <Scroll
                  onClick={() => setMenuOpened(false)}
                  to="about"
                  span={true}
                  smooth={true}
                >
                  About Me
                </Scroll>
              </li>
              <li>
                <Scroll
                  onClick={() => setMenuOpened(false)}
                  to="services"
                  span={true}
                  smooth={true}
                >
                  Services
                </Scroll>
              </li>
              <li>
                <Scroll
                  onClick={() => setMenuOpened(false)}
                  to="projects"
                  span={true}
                  smooth={true}
                >
                  Projects
                </Scroll>
              </li>
              <li>
                <Scroll
                  onClick={() => setMenuOpened(false)}
                  to="contact"
                  span={true}
                  smooth={true}
                >
                  Contact Me
                </Scroll>
              </li>
            </ul>

            {mobile === true ? (
              <div className="social-links">
                <a href={lnLink} target="_blank" rel="noreferrer">
                  <img src={linkedIn} alt="icon" />
                </a>
                <a href={tLink} target="_blank" rel="noreferrer">
                  <img src={twitter} alt="icon" />
                </a>
              </div>
            ) : null}
          </div>
        )}
      </div>

      {mobile === true ? null : (
        <div className="nav-r">
          <a href={lnLink} target="_blank" rel="noreferrer">
            <img src={linkedIn} alt="icon" />
          </a>
          <a href={tLink} target="_blank" rel="noreferrer">
            <img src={twitter} alt="icon" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
