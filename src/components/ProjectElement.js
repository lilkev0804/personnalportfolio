import React from "react";

export default function ProjectElement(props) {
  return (
    <div className="Project-element">
      <div className="Project-img">
        <img
          className="thumbnail-projet"
          alt="illustration de mon projet"
          src={`img/${props.img}.png`}
          id={`photo${props.id}`}
        ></img>
      </div>
      <div className="Project-texte">
        <h3>{props.title}</h3>
        <div className="secondInfo">
          <p className="presentation-type">{props.type}</p>
          <p className="presentation-date">{props.date}</p>
        </div>
        <p className="presentation-project">{props.text}</p>
        <p className="presentation-stack">{props.stack}</p>
        <a
          className="presentation-url"
          href={props.url}
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Visitez
        </a>
      </div>
    </div>
  );
}
