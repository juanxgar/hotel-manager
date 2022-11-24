import React from "react";
import Sidebar from '../../components/componentes-generales/Sidebar';
import BarraNavegacion from '../../components/componentes-generales/BarraNavegacion';
import BreadcrumbAgregarProductos from './BreadcrumbAgregarProductos';
import TablaAgregarProductos from './TablaAgregarProductos';
import Footer from '../../components/componentes-generales/Footer';
import '../../styles/moduloInventario.css';

const VerAgregarProductosServiciosCliente = () => {

    
    return(
        <div className='pago'>
            <Sidebar/>
            <BarraNavegacion/>
            <BreadcrumbAgregarProductos/>
            <TablaAgregarProductos />
            <Footer/>
         </div>
         
    
    );

}

export default VerAgregarProductosServiciosCliente;