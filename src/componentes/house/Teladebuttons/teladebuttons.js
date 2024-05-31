import './App.css';

import Logo from './img/eagles.png'

function App() {
  return (
    <div className="App">

      <div className="comp-cabecalho">
        <img class="img" src={Logo} width={150} height={100}></img>
      </div>
      
      <div className="buttons">
      <button class="button">Controle de Estoque</button>

      <button class="ppp">Tênis Masculino</button>

      <button class="ttt">Tênis Feminino</button>

      <button class="bbb">Voltar</button>
      </div>
      
      <div className="eagles">
       <h1 class="a">E</h1>

       <h1 class="b">A</h1>

       <h1 class="c">G</h1>

       <h1 class="d">L</h1>

       <h1 class="e">E</h1>

       <h1 class="f">S</h1>
      </div>
    </div>
  );
}

export default App;
