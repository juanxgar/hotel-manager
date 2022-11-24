import React, { useEffect }  from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie/es6';
import CardHabitacionesDisponibles from './CardHabitacionesDisponibles';
import { useState } from 'react';
import reserva from '../../../assets/images-menu/reserva.jpg';

export default function InfoHabitacionReserva() {

    const [infoHabitacion, setInfoHabitacion] = useState({});
    
    //Se ejecuta solo una vez gracias al useEffect
    useEffect(() => {
      const idHabitacion = new Cookies();
      const id_habitacion = idHabitacion.get('idHabitacion');
      //Agrega en el arreglo la informacion de la habitacion que seleccionó el cliente
      const mostrarHabitacion = async () => {
        const res = await axios.get(`http://localhost:5000/api/habitaciones/habitacion/${id_habitacion}`)
        setInfoHabitacion(res.data[0]);
      }
      
      mostrarHabitacion();
    }, [])

  return (
    <div>
        <CardHabitacionesDisponibles nombre={infoHabitacion.nombre} imagen={reserva} descripcion={infoHabitacion.descripcion} capacidad={infoHabitacion.capacidad} cantidad_camas={infoHabitacion.cantidad_camas} precio_persona={infoHabitacion.precio_persona} />
    </div>
  )
}
