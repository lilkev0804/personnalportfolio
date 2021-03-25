import React, { useState } from "react";
import "./styles/Navbar.css";

export default function Navbar() {
  const [scroll, setScroll] = useState();
  const [visible, setVisible] = useState(false);
  const [screen, setScreen] = useState(true);
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  const handleClick = () => {
    if (window.innerWidth > 765) {
      setVisible(false);
      setScreen(false);
    } else {
      setVisible(!visible);
      setScreen(!screen);
    }
  };
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: `${scroll ? "#01011b" : ""}`,
        height: `${scroll ? "6vh" : ""}`,
      }}
    >
      <ul
        className="navbar-list"
        style={{
          display: `${window.innerWidth > 765 ? "flex" : `${visible ? "flex" : "none"}`}`,
          overflow: `${scroll ? "hidden" : ""}`,
        }}
      >
        <li>
          <a onClick={window.innerWidth > 765 ? "" : handleClick}  className="navbar-link" href="#home">
            Accueil
          </a>
        </li>
        <li>
          <a  onClick={window.innerWidth > 765 ? "" : handleClick} className="navbar-link" href="#projet">
            Projets
          </a>
        </li>
        <li>
          <a  onClick={window.innerWidth > 765 ? "" : handleClick} className="navbar-link" href="#about">
            A propos
          </a>
        </li>
        <li>
          <a  onClick={window.innerWidth > 765 ? "" : handleClick} className="navbar-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <button
        className="buttonBurger"
        onClick={handleClick}
        style={{
          width: `${scroll ? "30px" : ""}`,
          height: `${scroll ? "3vh" : ""}`,
          top: `${scroll ? "1.5vh" : ""}`,
          backgroundColor: `${scroll ? "white" : ""}`,
          color: `${scroll ? "#01011b" : ""}`,
        }}
      >
        <img
          src={visible ? "img/hamburger.svg" : "img/close.svg"}
          alt="burger menu logo"
        ></img>
      </button>
      <div className="shadow"></div>
    </div>
  );
}
