import React from "react";
import Sidebar from '../../../components/componentes-generales/Sidebar';
import BarraNavegacion from '../../../components/componentes-generales/BarraNavegacion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import BreadCrumPaginasModificarReserva from '../modificar-reserva/BreadCrumPaginasModificarReserva';
import TabsModificarReserva from '../modificar-reserva/TabsModificarReserva';
import Footer from '../../../components/componentes-generales/Footer';
import '../../../styles/modificarReserva.css';

const ModificarReservacion = () => {
    return(
        
        <div className='principal'>
             <Sidebar/>
             <BarraNavegacion/>
            <BreadCrumPaginasModificarReserva/>
            <React.Fragment>
                <div className='title-style'> 
                    <left><h2>
                        <FontAwesomeIcon icon={faPlusCircle} />&nbsp;Información de reserva
                        </h2></left>
                </div> 
            </React.Fragment>
            
            <TabsModificarReserva/>
            <div className='margen-footer'></div>
            <Footer/>
        
         </div>
    
    );

}

export default ModificarReservacion;