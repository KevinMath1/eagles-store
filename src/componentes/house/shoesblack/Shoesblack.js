import "./Shoesblack.css";
import Foto from "../img/eagles.png";
import Img from "../img/shoesblack.png";
import Rosa from "../img/black-background.png";
import { useNavigate } from "react-router-dom";

function Shoesblack() {
  let navigate = useNavigate();

  return (
    <div className="app">
      <div>
        <div className="comp-cabecalho">
          <img className="img" src={Foto}></img>{" "}
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
          </div>{" "}
        </div>
      </div>

      <div class="container2">
        <div class="move">
          <img className="img2" src={Img}></img>
        </div>
        <p className="Grupo">Masculino / calçados / Esportivo</p>

        <h1 Class="Grupo2">Tenis Esportivo: Masculino Nubulos AS</h1>
      </div>

      <div class="container3">
        <div className="pc">
          <p>R$ 219,92</p>
          <p>4x de R$ 54,98</p>
        </div>

        <p Class="Grupo5">Cor black</p>
        <br></br>
        <img className="img3" src={Rosa}></img>
      </div>

      <div Class="buttons2">
        <div>
          <button className="button5" onClick={() => navigate("/kinos")}>
            Avançar
          </button>
        </div>
        <div>
          <button className="button6" onClick={() => navigate("/finity")}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Shoesblack;
