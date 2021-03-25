import React from "react";
import "./styles/Contact.css";
import { social } from "../components/social";

export default function Contact() {
  return (
    <div id="contact" className="Contact">
      <div className="contact-box">
      <h2 className="title-section">Contactez  moi</h2>
      
      <div className="box-social-link">
        {social.map((soc, i) => (
          <a key={i} href={soc.link} target="blanck">
            <img
              src={`img/${soc.name}.svg`}
              className="logo-social-form"
              alt={`visuel du social link ${soc.name}`}
            />
          </a>
        ))}
        <p>
          {" "}
          <img
            src="img/email.svg"
            className="logo-social-form"
            alt="visuel d'email"
          />
        </p>
      </div>
      </div>
    </div>
  );
}
