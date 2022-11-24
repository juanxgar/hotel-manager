import React from 'react'
import { Breadcrumb} from 'react-bootstrap';
import '../../styles/componentes-generales/breadcrumbPaginas.css';


 function BreadcrumbInformacionCuenta() {

    return (
      <div>
          <Breadcrumb className='breadcrumb'>
          <Breadcrumb.Item href="/menuprincipal">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Pago</Breadcrumb.Item>
          </Breadcrumb>
      </div>
    )
  }

  export default BreadcrumbInformacionCuenta;