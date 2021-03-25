import React from "react";
import "./styles/About.css";

import { lang } from "../components/lang";
import { tools } from "../components/tools";

export default function About() {
  return (
    <div id="about" className="about-section">
      <div className="container-parcours">
        <h3 className="Titleabout">mon parcours</h3>
        <div className="containerlogo">
          <div className="boxschool">
            <img alt="logo organisme de formation Wild Code School" id="school-logo-2" src="img/school/wcs-logo.png"></img>
            <p>Formation Développeur Web et Mobile  <br></br>Decembre 2020 - Avril 2021</p>
          </div>
        </div>
        <div className="containerlogo">
          <div className="boxschool">
            <img alt="logo organisme de formation Codecademy" id="school-logo-3" src="img/school/codecademy.svg"></img>
            <p>Parcours Javascript / React JS <br></br>Septembre - Novembre 2020</p>
          </div>
        </div>
        <div className="containerlogo">
          <div className="boxschool">
            <img alt="logo organisme de formation Udemy" id="school-logo-1" src="img/school/udemy.svg"></img>
            <p>Parcours Academind - React-JS <br></br>Mars - Juillet 2020</p>
          </div>
        </div>
        <div className="containerlogo">
          <div className="boxschool">
            <img alt="logo organisme de formation OpenClassRoom" id="school-logo-1" src="img/school/open.svg"></img>
            <p>Parcours HTML / CSS / SASS / PHP <br></br>Janvier - Juin 2020</p>
          </div>
        </div>
      </div>
      <div className="container-myself">
        <div className="lang-container">
          <h3>Mes langages</h3>
          <div className="container-lang">
            {lang.map((language) => (
              <img
                className="logolang"
                key={language.id}
                src={`img/lang/${language.title}.svg`}
                alt={`Logo ${language.title}`}
              ></img>
            ))}
          </div>
        </div>
        <div className="tools-container">
          <h3>Mes outils</h3>
          <div className="container-lang">
            {tools.map((tool) => (
              <img
                className="logolang"
                key={tool.id}
                src={`img/outils/${tool.title}.svg`}
                alt={`Logo ${tool.title}`}
              ></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
