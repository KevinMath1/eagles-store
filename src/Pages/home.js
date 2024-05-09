import React from "react";
import Navbar from "../componentes/home/navbar/navbar";
import Cards from "../componentes/home/cards/cards";
import Content from "../componentes/home/content/cards01";
import Footer from "../componentes/home/footer/cards02";

import Logo from "../componentes/home/img/eagles.png";
import Capa from "../componentes/home/img/CapaEagles.jpg";
import Heart from "../componentes/home/img/heart.svg";
import Bell from "../componentes/home/img/bell.svg";
import Shopping from "../componentes/home/img/shopping-bag.svg";
import User from "../componentes/home/img/user.svg";
import Seach from "../componentes/home/img/seach.svg";
import Pro from "../componentes/home/img/pro.jpg";

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
        <div>
          <Content></Content>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </section>
    </div>
  );
}

export default Home;
