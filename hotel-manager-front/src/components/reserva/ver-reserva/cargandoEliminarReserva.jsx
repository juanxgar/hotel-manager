import React from 'react'
import { Spinner } from 'reactstrap'
import '../../../styles/componentes-generales/cargando.css';

export default function CargandoEliminarReserva() {


  const redireccionar = () => {
    window.location.href = "./reservas";
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