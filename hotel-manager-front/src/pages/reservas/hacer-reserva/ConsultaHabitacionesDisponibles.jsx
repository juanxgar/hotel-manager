import React from 'react'
import BarraNavegacion from '../../../components/componentes-generales/BarraNavegacion'
import Sidebar from '../../../components/componentes-generales/Sidebar';
import Footer from '../../../components/componentes-generales/Footer';
import BreadcrumbPaginas from '../../../components/componentes-generales/BreadcrumbPaginas';
import CardsHabitacionesDisponibles from '../../../components/reserva/hacer-reserva/CardsHabitacionesDisponibles';
import LineaTiempo from '../../../components/reserva/hacer-reserva/LineaTiempo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/reservas/consultaHabitacionesDisponibles.css';

export default function ConsultaHabitacionesDisponibles() {
  return (
    <div className='habitaciones-disponibles'>
        <Sidebar />
        <BarraNavegacion />
        <BreadcrumbPaginas nombre={'seleccion habitacion'}/>
        <h2 className='titulo-principal'>
          <FontAwesomeIcon icon={faBed} />&nbsp; Habitaciones Disponibles
        </h2>
        <div className='linea-tiempo'>
          <LineaTiempo ubicacion={'habitaciones'} />
        </div>
        <div className='cards-habitaciones'>
            <CardsHabitacionesDisponibles />
        </div>
        <Footer />
    </div>
  )
}
