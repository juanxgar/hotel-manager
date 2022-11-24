import React from "react";
<<<<<<< HEAD
import Sidebar from "../components/componentes-generales/Sidebar";
import BarraNavegacion from "../components/componentes-generales/BarraNavegacion";
import BreadCrumVerInventario from '../components/modulo-inventario/BreadCrumbVerInventario';
import TablaInventario from '../components/modulo-inventario/TablaInventario';
import Footer from "../components/componentes-generales/Footer";
=======
import Sidebar from '../components/componentes-generales/Sidebar';
import NavbarMenuPrincipal from '../components/componentes-generales/BarraNavegacion';
import BreadCrumVerInventario from '../components/modulo-inventario/BreadCrumbVerInventario';
import TablaInventario from '../components/modulo-inventario/TablaInventario';
import Footer from '../components/componentes-generales/Footer';
>>>>>>> 69f3c6bf12f46cb935926e356fa2217269abd3ee
import '../styles/moduloInventario.css';

const VerInventario = () => {

    
    return(
        <div className='principal'>
            <Sidebar/>
            <BarraNavegacion/>
            <BreadCrumVerInventario/>
            <TablaInventario/>
            <div className='margen-footer'></div>
            <Footer/>
         </div>
         
    
    );

}

export default VerInventario;