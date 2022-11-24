import React from 'react'
import { Breadcrumb} from 'react-bootstrap';
import '../../styles/componentes-generales/breadcrumbPaginas.css';


 function BreadcrumbRegistrarProducto() {

    return (
      <div>
          <Breadcrumb className='breadcrumb'>
          <Breadcrumb.Item href="/menuprincipal">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item href="/inventario">Inventario</Breadcrumb.Item>
          <Breadcrumb.Item active>Registro Producto</Breadcrumb.Item>
          </Breadcrumb>
      </div>
    )
  }

  export default BreadcrumbRegistrarProducto;