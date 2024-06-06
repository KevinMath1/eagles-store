import "./Minus.css";
import { useNavigate } from "react-router-dom";
import Foto from "../img/eagles.png";
import Img from "../img/shoespink.png";
import Rosa from "../img/Rosa.jpg";

function Minus() {
  let navigate = useNavigate();

  return (
    <div className="app">
      <div>
        <div className="comp-cabecalho">
          <img className="img" src={Foto} alt="Cabeçalho"></img>
          <div className="buttons1">
            <button className="button" onClick={() => navigate("/finity")}>
              Masculino
            </button>
            <button className="button2" onClick={() => navigate("/minus")}>
              Feminino
            </button>
            <button className="button4" onClick={() => navigate("/navegador")}>
              Navegar
            </button>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="move">
          <img className="img2" src={Img} alt="Tênis Pink"></img>
        </div>
        <p className="Grupo">Feminino / Calçados / Esportivo</p>
        <h1 className="Grupo2">Tênis Esportivo: Feminino Minus</h1>
      </div>

      <div className="container3">
        <div className="pc">
          <p>R$ 279,00</p>
          <p>5x de R$ 55,98</p>
        </div>
        <p className="Grupo5">Cor pink</p>
        <img className="img3" src={Rosa} alt="Cor Rosa"></img>
      </div>

      <div className="buttons2">
        <div>
          <button className="button5" onClick={() => navigate("/flowers")}>
            Avançar
          </button>
        </div>
        <div>
          <button className="button6" onClick={() => navigate("/flowers")}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Minus;
