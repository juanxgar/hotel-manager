import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import reserva from '../../../assets/images-menu/reserva.jpg';
import CardHabitacionesDisponibles from '../hacer-reserva/CardHabitacionesDisponibles';
import Cookies from 'universal-cookie/es6';
import '../../../styles/reservas/detalleHabitacionReserva.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

export default function DetalleHabitacionReserva() {

  
  const [info_reserva, setInfo_reserva] = useState('');
  const [info_habitacion, setInfo_habitacion] = useState('');
  
  useEffect(()=> {
    const cookie = new Cookies();
    var info=cookie.get('infoHabitacionCliente')
    setInfo_habitacion(info[0]);
    info=cookie.get('infoReservaCliente')
    setInfo_reserva(info[0]);
  },[]);

  const renderizarInfoReserva = () => {
    const huespedes = info_reserva['num_adultos']+info_reserva['num_kids']
    return(
      <div>
        <Row>
          <Col sm={8}>
            &nbsp; &nbsp; Fechas: {info_reserva['fecha_ingreso']} - {info_reserva['fecha_salida']}
          </Col>
          <Col sm={4}>
            Huéspedes: {huespedes}
          </Col>
        </Row>
      </div>
    )
  }

  return (
    <div className='detalle-habitacion-reserva'>
      <h2 className='titulo-hab-res'> <FontAwesomeIcon icon={faCalendarCheck} /> &nbsp; Información de reserva</h2>
      <CardHabitacionesDisponibles nombre={info_habitacion['nombre']}  imagen={reserva} descripcion={info_habitacion['descripcion']} capacidad={info_habitacion['capacidad']} cantidad_camas={info_habitacion['cantidad_camas']} precio_persona={info_habitacion['precio_persona']} fechas_reserva={renderizarInfoReserva()}/>
    </div>
  )
}
