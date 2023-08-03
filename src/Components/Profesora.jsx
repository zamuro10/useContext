import React,{useContext} from 'react';
import Contexto from "../Contexto/Contexto"

function Profesora() {
  const {alumno}=useContext(Contexto);
  const idioma =alumno[3].idioma
  const imagen=`../img/${alumno[idioma].foto}`
  return (
    <div className='profesora'>
      <h1>{alumno[idioma].boton1}:</h1>
      <div className='foto'><img src={imagen} alt='foto'/></div>
      <div className='nombre'>{alumno[idioma].nombre}</div>
      
    </div>
  )
}

export default Profesora
