import React from 'react'
import { Breadcrumb} from 'react-bootstrap';
import '../../../styles/componentes-generales/breadcrumbPaginas.css';

export default function BreadcrumbPaginasModificarReserva() {

  return (
    <div>
        <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item href="/menuprincipal">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item href="/reservas">Reservas</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Información Reserva</Breadcrumb.Item>
        <Breadcrumb.Item active>Modificar</Breadcrumb.Item>
        </Breadcrumb>
    </div>
  )
}