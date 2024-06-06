import styles from "./EstoqueEagles.module.css";
import Logo from "../imagem/image/eagles.43967f06d9e3d7568d7f.png";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function EstoqueEagles() {
  let navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);

  const fetchProdutos = async () => {
    try {
      const response = await axios.get("http://localhost:5010/produto");
      console.log(response.data);
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5010/produto/${id}`);
      console.log("Produto deletado com sucesso!", response.data);
      await fetchProdutos();
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  };
  return (
    <div className={styles.Cont}>
      <div className={styles.Main}>
        <img src={Logo} alt="Logo do Site" title="Logo do Site" />
        <button onClick={() => navigate("/cadastro")}>Cadastrar</button>
        <button onClick={() => navigate("/navegador")}>Navegar</button>
        <button className={styles.Retorno} onClick={() => navigate("/navegador")}>
          Voltar
        </button>
      </div>

      <div className={styles.App}>
        <h1>Estoque</h1>
        <div className={styles.card}>
          <div className={styles.card_content}>
            <p>Nome</p>
            <p>quantidade</p>
            ação
          </div>
        </div>
        {produtos.length > 0 ? (
          produtos.map((produto, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.card_content}>
                <p>{produto.nome_produto}</p>
                <p>{produto.unidade}</p>
                <div className={styles.card_action}>
                  <span onClick={() => handleDelete(produto.codigo_produto)}>deletar</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Sem produtos</p>
        )}
      </div>
    </div>
  );
}

export default EstoqueEagles;
