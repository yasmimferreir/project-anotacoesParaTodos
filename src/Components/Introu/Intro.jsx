import React from "react";
import "./Intro.css";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import vetor1 from "../../img/Vector1.png";
import vetor2 from "../../img/Vector2.png";
import vetor3 from "../../img/astronauta.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import javasc from "../../img/javascript.png";
import nodejs from "../../img/nodejs-1-logo.png";
import react from "../../img/react.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Bem vindo Devs!</span>
          <span>Dúvidas sobre algum conteúdo?</span>
          <span>
            Plataforma com diversos conteúdos diferentes, direcionados a
            Linguagem de Programação JavaScript, back-end NodeJs, biblioteca
            ReactJs entre outros.
          </span>
        </div>

        <div className="i-icons">
          <a href="https://github.com/yasmimferreir">
            <DiGithubBadge />
          </a>
          <a href="https://www.linkedin.com/in/yasmim-ferreira-costa-186852229/">
            <AiFillLinkedin />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={vetor1} alt="" />
        <img src={vetor2} alt="" />
        <img src={vetor3} alt="" />

        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={javasc} txt1="Linguagem" txt2="JavaScript" />
        </div>

        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={nodejs} txt1="Servidor" txt2="NodeJs" />
        </div>

        <div style={{ top: "-4%", left: "-10%" }}>
          <FloatingDiv
            image={react}
            txt1="Biblioteca"
            txt2="ReactJs"
            className="react-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
