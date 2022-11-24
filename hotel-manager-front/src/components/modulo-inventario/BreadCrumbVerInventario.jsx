import React from 'react'
import { Breadcrumb} from 'react-bootstrap';
import '../../styles/componentes-generales/breadcrumbPaginas.css';


const  BreadcrumbPaginasModificarReserva =() => {

    return (
      <div>
          <Breadcrumb className='breadcrumb'>
          <Breadcrumb.Item href="/menuprincipal">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Inventario</Breadcrumb.Item>
          </Breadcrumb>
      </div>
    )
  }

  export default BreadcrumbPaginasModificarReserva;