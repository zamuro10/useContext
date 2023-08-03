import React,{useContext} from "react";
import Contexto from "../Contexto/Contexto";

function Idiomas() {
  const {alumno,setAlumno}=useContext(Contexto);
  const sustitucion=(posicion)=>{
    setAlumno(
      alumno.map((dato, index) =>
        index === 3 ? { ...dato, idioma: posicion} : { ...dato }
      )
    );
  }
  const cambio1 = () => {
sustitucion(0); 
  };
  const cambio2 = () => {
    sustitucion(1); 
  };
  const cambio3 = () => {
    sustitucion(3); 
  };
  return (
    <div className="idiomas">
      <div className="bandera" onClick={cambio1}>
        <img src="../img/spain.jpg" alt="bandera" />
      </div>
      <div className="bandera" onClick={cambio2}>
        <img src="../img/uk.png" alt="bandera" />
      </div>
      <div className="bandera" onClick={cambio3}>
        <img src="../img/francia.png" alt="bandera" />
      </div>
    </div>
  );
}

export default Idiomas;
