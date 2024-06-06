import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Cadastrar from "./componentes/Telacadastro/telacadastro";
import Kinos from "./componentes/house/Kinos/kinos";
import Minus from "./componentes/house/minus/Minus";
import Shoesblack from "./componentes/house/shoesblack/Shoesblack";
import Flower from "./componentes/house/tenisflowers/Tenisflowers";
import Navigator from "./componentes/house/Teladebuttons/teladebuttons";
import Finity from "./componentes/house/Tenisbranco/tenisbranco";
import Login from "./componentes/main/Login/logar";
import EstoqueEagles from "./componentes/main/EstoqueEagles/index";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/estoque" element={<EstoqueEagles />} />
        <Route path="/cadastro" element={<Cadastrar />} />
        <Route path="/kinos" element={<Kinos />} />
        <Route path="/minus" element={<Minus />} />
        <Route path="/finity" element={<Finity />} />
        <Route path="/nubulos" element={<Shoesblack />} />
        <Route path="/flowers" element={<Flower />} />
        <Route path="/navegador" element={<Navigator />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
