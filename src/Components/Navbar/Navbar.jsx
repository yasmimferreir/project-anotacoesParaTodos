import { SlGraduation } from "react-icons/sl";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Dev Yasmim Ferreira</div>
        <div className="n-title">
          <SlGraduation /> Anotações para todos
        </div>
        <span>toggle</span>
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Início</li>
            <li>Sobre</li>
            <li>Livros</li>
            <li>Outros Conteúdos</li>
          </ul>
        </div>

        <button className="button">Contato</button>
      </div>
    </div>
  );
};

export default Navbar;
