import React from "react";
import { projet } from "../components/projet";
import ProjetElement from "../components/ProjectElement";
import "./styles/Project.css";

export default function Project() {
  return (
    <div id="projet" className="Project">
      <h2 className="Title-section">Découvrez mes projets</h2>
      {projet.map((pro, i) => (
        <ProjetElement
          key={i}
          title={pro.projet}
          type={pro.type}
          date={pro.date}
          id={pro.id}
          img={pro.img}
          text={pro.texte}
          url={pro.url}
          stack={pro.stack}
          link={pro.url === "" ? "Bientot" : "Découvrir"}
        ></ProjetElement>
      ))}
    </div>
  );
}
