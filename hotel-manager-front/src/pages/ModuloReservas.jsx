import React from 'react';
import BarraNavegacion from '../components/componentes-generales/BarraNavegacion'
import Sidebar from '../components/componentes-generales/Sidebar';
import Footer from '../components/componentes-generales/Footer';
import ConsultarReserva from '../components/reserva/hacer-reserva/ConsultarReserva';
import ListaReservasActivas from '../components/reserva/ver-reserva/ListaReservasActivas';
import BreadcrumbPaginas from '../components/componentes-generales/BreadcrumbPaginas';
import {Row, Col } from 'react-bootstrap';
import '../styles/css-pages/moduloReservas.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

export default function ModuloReservas() {
  return (
    <div className='modulo-reservas'>
        <Sidebar />
        <BarraNavegacion />
        <BreadcrumbPaginas nombre={'reservas'} />
        <h2 className='titulo-principal'>
          <FontAwesomeIcon icon={faCalendarCheck} />&nbsp; Gestión de Reservas
        </h2>
        <Row>
          <Col sm={5}>
            <ListaReservasActivas />
          </Col>
          <Col sm={7}>
            <ConsultarReserva />
          </Col>
        </Row>
        
        <Footer />
    </div>
  )
}
