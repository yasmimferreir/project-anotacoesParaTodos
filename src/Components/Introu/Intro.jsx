import React from "react";
import "./Intro.css";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import vetor1 from "../../img/Vector1.png";
import vetor2 from "../../img/Vector2.png";
import vetor3 from "../../img/astronauta.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
//import emoji from "../../img/emoji.png";
import javascript from "../../img/javascript.png";
//import nodejs from "../../img/nodejs-.png";

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

        <div>
          <FloatingDiv
            image={{ javascript }}
            txt1="Linguagem"
            txt2="Javascript"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
