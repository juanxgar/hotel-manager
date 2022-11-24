import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie/es6';
import BarraNavegacion from '../../../components/componentes-generales/BarraNavegacion'
import Sidebar from '../../../components/componentes-generales/Sidebar';
import Footer from '../../../components/componentes-generales/Footer';
import CardsHabitacionesDisponiblesModificar from '../../../components/reserva/modificar-reserva/CardsHabitacionesDisponiblesModificar';


export default function TarjetasHabitacionModificarReserva() {

  return (
    <div>
        <Sidebar />
        <BarraNavegacion />
        <CardsHabitacionesDisponiblesModificar/>
        <Footer />

    </div>
  )
}
