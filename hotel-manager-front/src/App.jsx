import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/Styles.css'
import InicioSesion from './pages/InicioSesion';
import MenuPrincipal from './pages/MenuPrincipal';
import ModuloUsuarios from './pages/ModuloUsuarios';
import ModuloReservas from './pages/ModuloReservas';
import ModuloInventario from './pages/ModuloInventario';
import ModuloPago from './pages/ModuloPago';
import ConsultaHabitacionesDisponibles from './pages/reservas/hacer-reserva/ConsultaHabitacionesDisponibles';
import DatosCliente from './pages/reservas/hacer-reserva/DatosCliente';
import VerReserva from './pages/reservas/ver-reserva/VerReserva';
<<<<<<< HEAD
import TarjetasHabitacionModificarReserva from './pages/reservas/modificar-reserva/TarjetasHabitacionModificarReserva';
import CargandoModificar from './components/reserva/modificar-reserva/CargandoModificar';
import Reportes from './pages/Reportes';
import ModuloInventario from './pages/ModuloInventario';
import ModuloPago from './pages/ModuloPago';
=======
>>>>>>> 69f3c6bf12f46cb935926e356fa2217269abd3ee
import RegistrarProducto from './components/modulo-inventario/RegistrarProducto';
import VerProductosServiciosCliente from './components/modulo-pago/VerProductosServiciosCliente';
import VerAgregarProductosServiciosCliente from './components/modulo-pago/VerAgregarProductosServiciosCliente';
import DatosOperacion from './components/modulo-pago/DatosOperacion';
<<<<<<< HEAD

=======
>>>>>>> 69f3c6bf12f46cb935926e356fa2217269abd3ee
import Reserva from './components/Reserva';
import Consultas from './components/Consultas';
import Prueba from './components/Prueba';
import Cargando from './components/componentes-generales/Cargando';
import CargandoEliminarReserva from './components/reserva/ver-reserva/cargandoEliminarReserva';
import ModificarReservacion from './components/reserva/modificar-reserva/ModificarReservacion';
import ReporteProveniencia from './components/reportes/ReporteProveniencia';
import ReporteOcupacion from './components/reportes/ReporteOcupacion';
import ReporteReservasPorMes from './components/reportes/ReporteReservasPorMes';

export function App() {
  return(

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <InicioSesion /> }/>
        <Route exact path='/menuPrincipal' element={ <MenuPrincipal /> } />
        <Route exact path='/usuarios' element={ <ModuloUsuarios /> } />
        <Route exact path='/reservas' element={ <ModuloReservas />} />
        <Route exact path='/consultaHabitaciones' element={ <ConsultaHabitacionesDisponibles />} />
        <Route exact path='/datosCliente' element={ <DatosCliente />} />
        <Route exact path='/verReserva' element={ <VerReserva /> } />
        <Route exact path='/cargando' element={ <Cargando /> } />
        <Route exact path='/cargandoeliminarreserva' element={ <CargandoEliminarReserva /> } />
        <Route exact path='/reportes' element={ <Reportes /> } />

        <Route exact path='/reserva' element={ <Reserva /> } />
        <Route exact path='/consultas' element={ <Consultas /> } />
        <Route exact path='/prueba' element={ <Prueba /> } />
        <Route exact path='/modificarreserva' element={ <ModificarReservacion/> } />
        <Route exact path='/reportedondeviene' element={ < ReporteProveniencia/> } />
        <Route exact path='/reporteocupacion' element={ < ReporteOcupacion/> } />
        <Route exact path='/reportereservaspormes' element={ < ReporteReservasPorMes/> } />
        <Route exact path='/habitacionesmodificar' element={ < TarjetasHabitacionModificarReserva/> } />
        <Route exact path='/cargandomodificar' element={ < CargandoModificar/> } />
        <Route exact path='/inventario' element={ <ModuloInventario /> } />
        <Route exact path='/pago' element={ <ModuloPago /> } />
        <Route exact path='/registarproducto' element={ <RegistrarProducto /> } />
        <Route exact path='/pagoserviciosproductoscliente' element={ <VerProductosServiciosCliente  /> } />
        <Route exact path='/pagoagregarserviciosproductoscliente' element={ <VerAgregarProductosServiciosCliente  /> } />
        <Route exact path='/realizarpago' element={ <DatosOperacion /> } />
        
        <Route exact path='/datosoperacion' element={ <DatosOperacion /> } />

<<<<<<< HEAD
        {/*<Route exact path='/consultarReservas' element={ <ConsultarReserva /> } />
         <Route exact path='/modificarreserva' element={ <ModificarReservacion /> } />
=======
>>>>>>> 69f3c6bf12f46cb935926e356fa2217269abd3ee
         <Route exact path='/inventario' element={ <ModuloInventario /> } />
         <Route exact path='/registarproducto' element={ <RegistrarProducto /> } />
         <Route exact path='/pago' element={ <ModuloPago /> } />
         <Route exact path='/pagoserviciosproductoscliente' element={ <VerProductosServiciosCliente  /> } />
         <Route exact path='/pagoagregarserviciosproductoscliente' element={ <VerAgregarProductosServiciosCliente  /> } />
         <Route exact path='/realizarpago' element={ <DatosOperacion /> } />*/}
        
      </Routes>
    </BrowserRouter>
      
  );
}