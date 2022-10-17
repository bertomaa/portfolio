import React from "react";
import "./About.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { Fade } from "react-reveal";
import Section from "../section/Section";
import Skills from "../skills/Skills";

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Quick life summary:</h2>
            <>
              Hello, I am Marco, I am 22 years old, during my bachelor(18 to 20)
              I workded as an independent developer for different small
              companies around my area.
            </>
            <br></br>
            <>
              I got involved in various projects, that I worked on alone or with
              some collaborators.
            </>
            <br></br>
            <>
              My biggest strenghts were mobile development with Flutter and Web
              development with React, Firebase has always been my go-to backend.
            </>
            <br></br>
            <p>
              After my bachelor I continued my path with a <u>Cybersecurity</u>{" "}
              double degree program managed by the
              <a href="https://masterschool.eitdigital.eu/" target="_blank">
                European Institute of Tecnology
              </a>{" "}
              and I am currently enrolled in the second and last year.
            </p>
            <br></br>
            <>
              EIT gave me the chance to move from Italy to Finland for my first
              year, and to France for the current one, giving me an amazing
              international experience.
            </>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  );
};

export default About;
