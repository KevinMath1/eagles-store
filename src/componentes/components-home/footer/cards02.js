import React from "react";
import "./cards02.css";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <header>
      <body>
        <div className="container2">
          <div className="container2-title">
            <h1>Meus Dados</h1>
            <br></br>
            <Link className="link">Minha Conta</Link>
            <Link className="link">Meus Pedidos</Link>
            <Link className="link">Favoritos</Link>
          </div>

          <div className="container2-title">
            <h1>Políticas</h1>
            <br></br>
            <Link className="link">Privacidade</Link>
            <Link className="link">Termos de Uso</Link>
            <Link className="link">Trocas e Devolução</Link>
            <Link className="link">Entrega e Frete</Link>
            <Link className="link">Pagamento</Link>
          </div>

          <div className="container2-title">
            <h1>Sobre</h1>
            <br></br>
            <Link className="link">Quem Somos</Link>
            <Link className="link">Central de Ajuda</Link>
            <Link className="link">Perguntas Frequentes</Link>
            <Link className="link">Nossas lojas</Link>
          </div>

          <div className="container2-title">
            <h1>Fale Conosco</h1>
            <br></br>
            <p>WhatsApp 11 9 8888-4040</p>
            <p>Telefone 11 3333-2222</p>
            <p>sac@eagles.com.br</p>
            <p>Horários de Atendimento: de segunda à quinta-feira, das 8h às 18h.</p>
            <p>Prazo para respostas: 72h úteis.</p>
          </div>
        </div>
      </body>
    </header>
  );
}

export default Footer;
