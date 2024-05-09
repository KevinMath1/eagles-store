// Navbar.js

import React from "react";
import "../navbar/navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <header>
      <body>
        <nav className="secao">
          <div className="header-logo">
            <img className="eagles" src={props.logo} alt="imagen aguia" />
            <h2>Eagles</h2>

            <div className="header-search">
              <div>
                <input className="search" placeholder="O que você procura ? "></input>
                <img className="icon-search" src={props.search} alt="icone de pesquisa" />
              </div>
              <div className="button-enter">
                <img className="icon " src={props.user} alt="Ícone do usuário" />
                <Link className="link" to="/login">
                  Entrar
                </Link>
              </div>
            </div>
          </div>
          <div className="header-icons">
            <img className="icon" src={props.shopping} alt="icone de carrinho" />
            <img className="icon" src={props.bell} alt="icone de sino" />
            <img className="icon" src={props.heart} alt="icone de coração" />
          </div>
        </nav>
      </body>
    </header>
  );
}

export default Navbar;
