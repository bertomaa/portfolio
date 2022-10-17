import React, { useState } from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";
import { Bounce } from "react-reveal";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import Navbar from "../navbar/Navbar";
import config from "../../config";
import profile from "../../images/profile-bgdark.png";
import linkedinLogo from "../../images/social/linkedin.png";
import githubLogo from "../../images/social/github.png";
import cvLogo from "../../images/social/curriculum-vitae.png";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="home-wrapper">
      <div className="home">
        <Particles
          className="particles"
          params={config.particles}
          init={particlesInit}
        />
        <div className={`greeting${!imageLoaded ? " hide" : ""}`}>
          <Fade bottom distance="40px">
            <img
              className="profile"
              alt="m.jigalin profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              HTB Hi, I'm <span className="name">Marco Bertolino</span>.{" "}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    "I like to design things.",
                    "I love learning new tech.",
                    "I love meeting new people.",
                    "I create unique digital experiences.",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: "<",
                  delay: 100,
                }}
              />
            </h1>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Bounce cascade>
                <div className="links">
                  <a
                    href="https://www.linkedin.com/in/marco-bertolino-/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logoImage"
                      src={linkedinLogo}
                      alt="Linkedin Logo"
                      width="50px"
                    />
                  </a>
                </div>
              </Bounce>
              <Bounce cascade>
                <div className="links">
                  <a
                    href="https://github.com/bertomaa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logoImage"
                      src={githubLogo}
                      alt="Github Logo"
                      width="50px"
                    />
                  </a>
                </div>
              </Bounce>
              <Bounce cascade>
                <div className="links">
                  <a
                    href="./MarcoBertolino-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logoImage"
                      src={cvLogo}
                      alt="CV Logo"
                      width="50px"
                    />
                  </a>
                </div>
              </Bounce>
            </div>
            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{
                    pointerEvents: "fill",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </div>
          </Fade>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
