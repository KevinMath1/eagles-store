import './index.css'
import Logo from "../../Pages/image/eagles.43967f06d9e3d7568d7f.png";

function EstoqueEagles() {
  return (
    <div className='Cont'>
    
           <div className='Main'>
              <img src={Logo} alt="Logo do Site" title="Logo do Site"/>
              <button >Estoque</button>
              <button >produtos</button>
              <button className='Retorno'>voltar</button>
           </div>
           


    <div className="App">
      <h1> Estoque </h1>
      <p> Tênis Finity one ---------------------------- 10 </p>
      <p> Tenis Ex 99  -------------------------------- 9 </p>
      <p> Tenis Nubulos AS --------------------------- 5 </p>
      <p> Kinos --------------------------- 4 </p>
      
    </div>
    </div>
      );
    }
    export default EstoqueEagles;