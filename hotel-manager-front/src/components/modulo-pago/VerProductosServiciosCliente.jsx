import React from "react";
import Sidebar from '../../components/componentes-generales/Sidebar';
import BarraNavegacion from '../../components/componentes-generales/BarraNavegacion';
import BreadcrumbProductosServicios from '../modulo-pago/BreadcrumbProductosServicios';
import TablaProductosServicios from '../modulo-pago/TablaProductosServicios';
import Footer from '../../components/componentes-generales/Footer';
import '../../styles/moduloInventario.css';

const VerProductosServiciosCliente = () => {

    
    return(
        <div className='pago'>
            <Sidebar/>
            <BarraNavegacion/>
            <BreadcrumbProductosServicios/>
            <TablaProductosServicios />
            <div className='margen-footer-productoscliente'></div>
            <Footer/>
         </div>
         
    
    );

}

export default VerProductosServiciosCliente;