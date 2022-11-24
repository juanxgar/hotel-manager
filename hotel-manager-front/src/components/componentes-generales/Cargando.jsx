import React from 'react'
import { Spinner } from 'reactstrap'
import '../../styles/componentes-generales/cargando.css';

export default function Cargando() {


  const redireccionar = () => {
    window.location.href = "./verReserva";
  }

  setTimeout(() => {
    redireccionar()
  }, 2000);

  return (
    <div className='cargando'>
        <Spinner color='danger' />
    </div>
  )
}
