import React from 'react'
import BarraNavegacion from '../../../components/componentes-generales/BarraNavegacion';
import Sidebar from '../../../components/componentes-generales/Sidebar';
import Footer from '../../../components/componentes-generales/Footer';
import LineaTiempo from '../../../components/reserva/hacer-reserva/LineaTiempo';
import InfoHabitacionReserva from '../../../components/reserva/hacer-reserva/InfoHabitacionReserva';
import InfoClienteReserva from '../../../components/reserva/hacer-reserva/InfoClienteReserva';
import BreadcrumbPaginas from '../../../components/componentes-generales/BreadcrumbPaginas';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/reservas/consultaHabitacionesDisponibles.css';

export default function DatosClientes() {
  return (
    <div className='habitaciones-disponibles'>
        <Sidebar />
        <BarraNavegacion />
        <BreadcrumbPaginas nombre={'datos personales'} />
        <h2 className='titulo-principal'>
          <FontAwesomeIcon icon={faUser} />&nbsp; Datos Personales
        </h2>
        <div className='linea-tiempo'>
          <LineaTiempo ubicacion={'cliente'} />
        </div>
        <div className='card-habitacion'>
          <InfoHabitacionReserva />
        </div>
        <InfoClienteReserva />
        <Footer />
        
    </div>
  )
}
