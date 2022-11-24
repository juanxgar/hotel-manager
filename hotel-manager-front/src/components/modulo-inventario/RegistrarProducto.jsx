import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import Sidebar from '../componentes-generales/Sidebar';
import BarraNavegacion from '../componentes-generales/BarraNavegacion';
import BreadCrumbRegistrarProducto from '../../components/modulo-inventario/BreadCrumbRegistrarProducto';
import FormularioRegistrarProducto from '../../components/modulo-inventario/FormularioRegistrarProducto';
import Footer from '../componentes-generales/Footer';
=======
import Sidebar from '../../components/componentes-generales/Sidebar';
import BarraNavegacion from '../../components/componentes-generales/BarraNavegacion';
import BreadCrumbRegistrarProducto from '../../components/modulo-inventario/BreadCrumbRegistrarProducto';
import FormularioRegistrarProducto from '../../components/modulo-inventario/FormularioRegistrarProducto';
import Footer from '../../components/componentes-generales/Footer';
>>>>>>> 69f3c6bf12f46cb935926e356fa2217269abd3ee
import '../../styles/moduloInventario.css';


const RegistrarProducto = () => {

    return (

       <div className="inventario">
           
           <Sidebar/>
           <BarraNavegacion/>
           <BreadCrumbRegistrarProducto/>     
           <FormularioRegistrarProducto/>
           <Footer/>
       </div>

    );

}




export default RegistrarProducto;