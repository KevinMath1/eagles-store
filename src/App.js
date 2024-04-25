import "./App.css";
import Logo from "./img/eagles.png";
import Capa from "./img/CapaEagles.jpg";
import Heart from "./img/heart.svg";
import Bell from "./img/bell.svg";
import Shopping from "./img/shopping-bag.svg";
import User from "./img/user.svg";
import Seach from "./img/seach.svg";

export function App() {
  return (
    <header>
      <body>
        <section className="secao">
          <div className="header-logo">
            <img className="eagles" src={Logo} />
            <h2>Eagles</h2>

            <div className="header-search">
              <div>
                <input className="search" placeholder="O que você procura ? " ></input>
                <img className="icon-search" src={Seach} />
                
              </div>
              <div className="button-enter">
                <img className="icon " src={User} alt="Ícone do usuário" />
                <p>Entrar</p>
              </div>
            </div>
          </div>

          <div className="header-icons">
            <img className="icon" src={Shopping} />
            <img className="icon" src={Bell} />
            <img className="icon" src={Heart} />
          </div>
        </section>

        <div className="container">
          <img className="CapaEaglese" src={Capa} />
        </div>
      </body>
    </header>
  );
}

export default App;
