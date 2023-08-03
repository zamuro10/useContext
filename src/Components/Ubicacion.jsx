import React, { useContext } from 'react'
import Contexto from '../Contexto/Contexto'

function Ubicacion() {
  const {alumno}=useContext(Contexto)
  const idioma =alumno[3].idioma
  return (
    <div className='ubicacion'>
      <h2>{alumno[idioma].boton2}</h2>
      <p>{alumno[idioma].direccion}</p>
    </div>
  )
}

export default Ubicacion
