import './tenisbranco.css';
import Foto from './img/eagles.png';
import Img from './img/par branco.png';
import Rosa from './img/download.jpeg';


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
    <p className="Grupo">Masculino / calçados / Esportivo</p>

<h1 Class="Grupo2">Tenis Casual: Masculino Finity</h1>





     

     </div>
     
     
     <div class="container3">
<div className='pc'>
     <p >R$ 379,90</p>
     <p >6x de R$ 53,49</p>
</div>

<p Class="Grupo5">Cor White</p>

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
