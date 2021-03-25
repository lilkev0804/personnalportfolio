import React,{useState} from "react";
import "./styles/Contact.css";
import { social } from "../components/social";

export default function Contact() {
const [messageCopy, setMessageCopy] = useState('')
  const emailPaste = (e) => {
    const btnvalue = document.querySelector('.buttonEmail').value
    setMessageCopy('E-mail copié dans le presse papier')
    let fullLink = document.createElement('input');
    document.body.appendChild(fullLink);
    fullLink.value = btnvalue
    fullLink.select();
    document.execCommand("copy");
    fullLink.remove();
}
  return (
    <div id="contact" className="Contact">
      <div className="contact-box">
      <h2 className="title-section">Contactez  moi</h2>
      {messageCopy}
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
        <button className="buttonEmail" onClick={emailPaste} value="contact@kevinlemarie.fr">
          {" "}
          <img
            src="img/email.svg"
            className="logo-social-form email-img"
            alt="visuel d'email"
          />
        </button>
      </div>
      </div>
    </div>
  );
}
