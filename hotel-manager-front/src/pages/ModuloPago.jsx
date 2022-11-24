<<<<<<< HEAD
import React from 'react'
import Sidebar from '../components/componentes-generales/Sidebar'
=======
import React, {useEffect} from 'react'
import Sidebar from '../components/componentes-generales/Sidebar';
>>>>>>> 69f3c6bf12f46cb935926e356fa2217269abd3ee
import BarraNavegacion from '../components/componentes-generales/BarraNavegacion';
import Footer from '../components/componentes-generales/Footer';
import BreadcrumbInformacionCuenta from '../components/modulo-pago/BreadcrumbInformacionCuenta';
import InformacionCuenta from '../components/modulo-pago/InformacionCuenta';
import '../styles/moduloPago.css';


function ModuloPago() {


  return (
    <div className ="pago">
<<<<<<< HEAD
=======
        <BarraNavegacion />
>>>>>>> 69f3c6bf12f46cb935926e356fa2217269abd3ee
        <Sidebar />
        <BarraNavegacion />
       < BreadcrumbInformacionCuenta/>
       <InformacionCuenta />
       <div className='margen-footer'></div>
       <Footer />
    </div>
  )
}

export default ModuloPago;