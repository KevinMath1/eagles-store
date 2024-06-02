
import './login.css'

import Logo from "../../Pages/image/eagles.43967f06d9e3d7568d7f.png";




function Login() {

  return (
    <div className="App">
       <div className="Esquerdo">
          <img src={Logo} alt="Logo do Site" title="Logo do Site"/>
          <p> EAGLES </p>
       </div>

      <div className="Main"> 
         <h1> Seja Bem Vindo </h1>

     <form>
       <div className="Login"> 


           <input type='Email' placeholder='E-mail'/>
           <input type='password' placeholder='Senha'/>
       </div>
       <div className="Botoes"> 
          <button >Login</button>
          <button >Voltar</button>
       </div>
     </form>
     
     </div>
    </div>

    
  );
}

export default Login;
