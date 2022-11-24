import React, {useEffect} from 'react'
import Cookies from 'universal-cookie/es6';
import Sidebar from '../components/componentes-generales/Sidebar';
import BarraNavegacion from '../components/componentes-generales/BarraNavegacion';
import VerUsuario from '../components/usuarios/VerUsuario';
import Footer from '../components/componentes-generales/Footer';
import '../styles/css-pages/moduloUsuarios.css';
import BreadcrumbPaginas from '../components/componentes-generales/BreadcrumbPaginas';

export default function ModuloUsuarios() {

    

    //Se usa useEffect para permitir que la función se siga ejecutando, en este caso, la funcion que hace
    //que persista la ventana de menu principal en caso de que se mantenga la sesión
    useEffect(() => {
      const cookies = new Cookies();
      if(!cookies.get('token')){
        window.location.assign('./');
    }
    }, []);


  return (
    <div className='modulo-usuarios'>
        <Sidebar />
        <BarraNavegacion />
        <BreadcrumbPaginas nombre={'usuarios'} />
        <VerUsuario />
        <Footer />
    </div>
  )
}
