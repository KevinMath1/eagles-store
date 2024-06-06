import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import Logo from "../imagem/image/eagles.43967f06d9e3d7568d7f.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erroMensagem, setErroMensagem] = useState(""); // Definição correta do estado

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://20.206.240.6:5010/login", {
        usuario: usuario,
        senha: senha,
      });
      console.log("Login bem-sucedido:", response.data);
      setErroMensagem("");
      navigate("/navegador");
    } catch (error) {
      setErroMensagem(
        "Falha no login: " +
          (error.response ? error.response.data.mensagem : "O servidor não está respondendo")
      );
    }
  };

  return (
    <div className={styles.App}>
      <div className={styles.Esquerdo}>
        <img src={Logo} alt="Logo do Site" title="Logo do Site" />
        <p>EAGLES</p>
      </div>
      <div className={styles.Main}>
        <h1>Seja Bem Vindo</h1>
        <form onSubmit={handleLogin}>
          <div className={styles.Login}>
            <input
              type="text"
              placeholder="E-mail"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            {erroMensagem && <p className={styles.ErroMensagem}>{erroMensagem}</p>}
          </div>

          <div className={styles.Botoes}>
            <button type="submit">Login</button>
            <button type="button" onClick={() => navigate("/")}>
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
