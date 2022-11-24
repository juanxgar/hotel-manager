import React from 'react'
import { Breadcrumb} from 'react-bootstrap';
import '../../styles/componentes-generales/breadcrumbPaginas.css';


 function BreadcrumbAgregarProductos() {

    return (
      <div>
          <Breadcrumb className='breadcrumb'>
          <Breadcrumb.Item href="/menuprincipal">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item href="/pago">Pago</Breadcrumb.Item>
          <Breadcrumb.Item href="/pagoserviciosproductoscliente">Productos y Servicios Cliente</Breadcrumb.Item>
          <Breadcrumb.Item active>Productos y Servicios a Agregar</Breadcrumb.Item>
          </Breadcrumb>
      </div>
    )
  }

  export default BreadcrumbAgregarProductos;