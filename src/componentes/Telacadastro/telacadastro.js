import './telacadastro.css';
import foto from './img/eagles.png'
function App() {
  return (
    <div className='mae'>
    <div className="play">
    <img class="img" src={foto} width={150} height={100} alt='login'></img>
    <div className='buttons'>
    <button className='botao0' >Estoque</button>
    <button className='botao01'>produto</button>
    <button className='botao2'>voltar</button>
    </div>
    </div>
    <div className="App">
      <h1>Cadastrar novo Produto</h1>
      <div className="form-group">
        <div className="label-container">
          <label htmlFor="marca">Marca de produto:</label>
        </div>
        <input type="text" id="marca" />
      </div>
      <div className="form-group">
        <div className="label-container">
          <label htmlFor="nome">Nome do produto:</label>
        </div>
        <input type="text" id="nome" />
      </div>
      <div className="form-group">
        <div className="label-container">
          <label htmlFor="codigo">Código do produto:</label>
        </div>
        <input type="text" id="codigo" />
      </div>
      <div className="form-group">
        <div className="label-container">
          <label htmlFor="preco">Preço:</label>
        </div>
        <input type="text" id="preco" />
      </div>
      <div className="form-group">
        <div className="label-container">
          <label htmlFor="unidade">Unidade:</label>
        </div>
        <input type="text" id="unidade" />
      </div>
      <div className='botoes'>
      <button className='botao'>Salvar</button>
      
     
      </div>
      <div className='botoes1'>
      <button className='botao1'>avançar</button>
      <button className='botao1'>voltar</button>
      </div>
    </div>
    </div>
  );
}
export default App;
