import { React } from 'react';
import BarraNavegacion from '../components/componentes-generales/BarraNavegacion'
import CardsMenuPrincipal from '../components/menu-principal/CardsMenuPrincipal';
import Footer from '../components/componentes-generales/Footer';
import '../styles/menu-principal/menuPrincipal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandshake} from '@fortawesome/free-solid-svg-icons';


export default function MenuPrincipal() {
  
  return (
    <div className='menu-principal'>

      <BarraNavegacion />
      <h1 className='titulo-menu'>
        <FontAwesomeIcon icon={faHandshake} />
        &nbsp;¡Bienvenido a Hotel Manager!
        </h1>
      <CardsMenuPrincipal />
      <Footer />

    </div>



  );
}
