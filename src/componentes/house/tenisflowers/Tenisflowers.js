import './index.css';
import Foto from './img/eagles.png';
import Img from './img/sapatos-de-mulher.png';
import Rosa from './img/Rosa.jpg';


function App() {
  return (
    <div className="app">
     <div>
     <div className="comp-cabecalho"><img className="img" src={Foto}></img> <div class="buttons1"> 
     
     <button className="button">Masculino</button>
     
     <button className="button2">Feminino</button>
     
     <button className="button3">Infantil</button>
     
    <button className="button4">coleções</button>
     
     </div> </div>
    
     </div>
     

     <div class="container2">
     
    <div class="move">
    <img className="img2" src={Img} ></img>
     </div>
    <p className="Grupo">Feminino / calçados / Esportivo</p>

<h1 Class="Grupo2">Tenis Casual: Feminino flowers</h1>





     

     </div>
     
     
     <div class="container3">
<div className='pc'>
     <p >R$ 279,00</p>
     <p >5x de R$ 55,98</p>
</div>

<p Class="Grupo5">Cor pink</p>

<img className="img3" src={Rosa}></img>


</div>
     
    

     <div Class="buttons2">
      <div><button className="button5">Avançar</button></div>
      <div><button className="button6">Voltar</button></div>
     </div>

     
    
    </div>
  );
}

export default App;
