import React from "react";
import "../cards/Cards.css";
import ShoesPink from "../../img/shoespink.png";
import ShoesBlack from "../../img/shoesblack.png";
import ShoesWith from "../../img/shoeswith.png";

function Cards(props) {
  return (
    <header>
      <body>
        <div className="container-card">
          <div className="card">
            <div className="card-img card-pink">
              <img className="eagles" src={ShoesPink} alt="imagen aguia" />
            </div>
            <div className="contaier-title">
              <h2>Tenis Minus - Feminino Pink</h2>
            </div>
            <div className="text">
              <p>R$ 279,90</p>
              <p>5x de R$ 55,98 sem juros</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img card-yellow ">
              <img className="eagles" src={ShoesBlack} alt="imagen aguia" />
            </div>
            <div className="contaier-title">
              <h2>Tenis Nubulos AS - Masculino Black</h2>
            </div>
            <div className="text">
              <p>R$ 219,92</p>
              <p>4x de R$ 54,98 sem juros</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img card-blue">
              <img className="eagles" src={ShoesWith} alt="imagen aguia" />
            </div>
            <div className="contaier-title">
              <h2>Tenis Finity - Masculino White</h2>
            </div>
            <div className="text">
              <p>R$ 379,90</p>
              <p>6x de R$ 53,49 sem juros</p>
            </div>
          </div>
        </div>
      </body>
    </header>
  );
}

export default Cards;
