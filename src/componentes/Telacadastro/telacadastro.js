import React, { useState } from "react";
import axios from "axios"; // Importação do Axios
import styles from "./telacadastro.module.css";
import foto from "./img/eagles.png";
import { useNavigate } from "react-router-dom";

function Cadastrar() {
  let navigate = useNavigate();

  const [codigoProduto, setCodigoProduto] = useState("");
  const [marcaProduto, setMarcaProduto] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [preco, setPreco] = useState("");
  const [unidade, setUnidade] = useState("");

  const handleSubmit = async () => {
    const produto = {
      codigo_produto: codigoProduto,
      marca_produto: marcaProduto,
      nome_produto: nomeProduto,
      preco: preco,
      unidade: unidade,
      faturamento: "",
      tamanho: "",
      cor: "",
      peso: "",
    };

    try {
      const response = await axios.post("http://20.206.240.6:3000/produto", produto);
      console.log("Produto cadastrado:", response.data);
      setCodigoProduto("");
      setMarcaProduto("");
      setNomeProduto("");
      setPreco("");
      setUnidade("");
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
    }
  };

  return (
    <div className={styles.mae}>
      <div className={styles.play}>
        <br></br>
        <br></br>
        <img class="imgs" src={foto} width={150} height={100} alt="login"></img>
        <div className={styles.buttons}>
          <button className={styles.botao0} onClick={() => navigate("/estoque")}>
            Estoque
          </button>
          <button className={styles.botao01} onClick={() => navigate("/navegador")}>
            Navegar
          </button>
        </div>
      </div>
      <div className={styles.App}>
        <h1>Cadastrar Novo Produto</h1>
        <br></br>
        <br></br>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className={styles["form-group"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="codigo_produto">Código do produto:</label>
            </div>
            <input
              type="text"
              id="codigo_produto"
              value={codigoProduto}
              onChange={(e) => setCodigoProduto(e.target.value)}
            />
          </div>
          <div className={styles["form-group"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="marca_produto">Marca de produto:</label>
            </div>
            <input
              type="text"
              id="marca_produto"
              value={marcaProduto}
              onChange={(e) => setMarcaProduto(e.target.value)}
            />
          </div>
          <div className={styles["form-group"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="nome_produto">Nome do produto:</label>
            </div>
            <input
              type="text"
              id="nome_produto"
              value={nomeProduto}
              onChange={(e) => setNomeProduto(e.target.value)}
            />
          </div>
          <div className={styles["form-group"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="preco">Preço:</label>
            </div>
            <input
              type="text"
              id="preco"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>
          <div className={styles["form-group"]}>
            <div className={styles["label-container"]}>
              <label htmlFor="unidade">Unidade:</label>
            </div>
            <input
              type="text"
              id="unidade"
              value={unidade}
              onChange={(e) => setUnidade(e.target.value)}
            />
          </div>
          <div className={styles.botoes}>
            <button type="submit" className={styles.botao}>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastrar;
