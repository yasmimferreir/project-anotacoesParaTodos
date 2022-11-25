import React from "react";
import "./Navbar.css";
import { TiPencil } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Dev Yasmim Ferreira Costa</div>
        <div className="n-title">
          Anotações para todos <TiPencil className="icon" />
        </div>
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Início</li>
            <li>Sobre</li>
            <li>Livros</li>
            <li>Outros Conteúdos</li>
          </ul>
        </div>

        <button className="button n-button">Contato</button>
      </div>
    </div>
  );
};

export default Navbar;
