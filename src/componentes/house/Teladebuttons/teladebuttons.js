import styles from "./Navigator.module.css";
import Logo from "../img/eagles.png";
import { useNavigate } from "react-router-dom";

function Navigator() {
  let navigate = useNavigate();
  return (
    <div className={styles.App}>
      <div className={styles["comp-cabecalho"]}>
        <img className={styles.img} src={Logo} width={150} height={100} alt="Logo" />
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => navigate("/estoque")}>
          Controle de Estoque
        </button>
        <button className={styles["button-navigator"]} onClick={() => navigate("/kinos")}>
          Tênis Masculino
        </button>
        <button className={styles["button-navigator"]} onClick={() => navigate("/flowers")}>
          Tênis Feminino
        </button>
        <button className={styles["button-navigator"]} onClick={() => navigate("/login")}>
          Sair
        </button>
      </div>

      <div className={styles.eagles}>
        <h1>E</h1>
        <h1>A</h1>
        <h1>G</h1>
        <h1>L</h1>
        <h1>E</h1>
        <h1>S</h1>
      </div>
    </div>
  );
}

export default Navigator;
