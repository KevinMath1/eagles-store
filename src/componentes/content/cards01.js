import React from "react";
import "../content/cards01.css";
import Eagles from "../../img/eagles.png";

function Cards01(props) {
  return (
    <header>
      <body>
        <div className="container1">
          <div className="card01">
            <div className="card01-img">
              <img className="eagles01" src={Eagles} alt="imagem logo" />
            </div>

            <p className="text01">
              A maior e mais conceituada rede de lojas do país, presente em todas as regiões e nas
              melhores redes de shopping centers.
            </p>
          </div>
        </div>

        <div className="container02">
          <div className="container02-title">
            <h1>Assine nossa Newsletter</h1>
            <br></br>
            <div className="header-email">
              <input className="email" placeholder="E-mail... "></input>
            </div>
          </div>
        </div>
      </body>
    </header>
  );
}

export default Cards01;
