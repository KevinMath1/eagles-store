import "./App.css";
import Navbar from "./componentes/navbar";
import Cards from "./componentes/cards";
import Logo from "./img/eagles.png";
import Capa from "./img/CapaEagles.jpg";
import Heart from "./img/heart.svg";
import Bell from "./img/bell.svg";
import Shopping from "./img/shopping-bag.svg";
import User from "./img/user.svg";
import Seach from "./img/seach.svg";
import ReactDOM from "react-dom/client";
import ShoesCapa from "./img/shoes02.jpg";

import Pro from "./img/pro.jpg";

function App() {
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

export default App;
//export const root = ReactDOM.createRoot(document.getElementById("root"));
