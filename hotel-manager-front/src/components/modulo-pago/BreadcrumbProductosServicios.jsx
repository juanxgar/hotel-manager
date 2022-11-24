import { Breadcrumb} from 'react-bootstrap';
import '../../styles/componentes-generales/breadcrumbPaginas.css';


 function BreadcrumbProductosServicios() {

    return (
      <div>
          <Breadcrumb className='breadcrumb'>
          <Breadcrumb.Item href="/menuprincipal">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item href="/pago">Pago</Breadcrumb.Item>
          <Breadcrumb.Item active>Productos y Servicios Cliente</Breadcrumb.Item>
          </Breadcrumb>
      </div>
    )
  }

  export default BreadcrumbProductosServicios;