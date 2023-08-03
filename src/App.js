import Idiomas from "./Components/Idiomas";
import Pagina from "./Components/Pagina";
import Datos from "./Contexto/Datos";
import './App.css';


function App() {
  
  return (
   <Datos>
   
      <div className="banderas">
        <Idiomas/>
      </div>
      <div className='contenido'>
        <Pagina/>
      </div>
   </Datos> 
 
  );
}

export default App;
