import React from "react";
import Navbar from "../componentes/navbar/navbar";
import Cards from "../componentes/cards/cards";
import Logo from "../img/eagles.png";
import Capa from "../img/CapaEagles.jpg";
import Heart from "../img/heart.svg";
import Bell from "../img/bell.svg";
import Shopping from "../img/shopping-bag.svg";
import User from "../img/user.svg";
import Seach from "../img/seach.svg";
import Pro from "../img/pro.jpg";

function Home() {
  return (
    <div className="App">
      <Navbar
        logo={Logo}
        search={Seach}
        user={User}
        shopping={Shopping}
        bell={Bell}
        heart={Heart}
      />

      <section className="container">
        <div>
          <img className="CapaEaglese" src={Capa} alt="capa da tela 1" />
        </div>
        <div>
          <Cards></Cards>
        </div>
        <div>
          <img className="CapaEaglese" src={Pro} alt="capa da tela 1" />
        </div>
      </section>
    </div>
  );
}

export default Home;
