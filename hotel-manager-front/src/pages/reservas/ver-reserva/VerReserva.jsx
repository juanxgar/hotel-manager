import React, { useState, useEffect } from 'react';
import BarraNavegacion from '../../../components/componentes-generales/BarraNavegacion';
import Sidebar from '../../../components/componentes-generales/Sidebar';
import Footer from '../../../components/componentes-generales/Footer';
import DetalleHabitacionReserva from '../../../components/reserva/ver-reserva/DetalleHabitacionReserva';
import DetalleClienteReserva from '../../../components/reserva/ver-reserva/DetalleClienteReserva';
import { Button } from 'react-bootstrap';
import '../../../styles/reservas/verReserva.css';
import BreadcrumbPaginas from '../../../components/componentes-generales/BreadcrumbPaginas';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie/es6';

export default function VerReserva() {

  const [id_reserva, setId_reserva] = useState('');

  useEffect(() => {
    const cookie = new Cookies();
    const datos=cookie.get('infoReservaCliente')[0];
    setId_reserva(datos['id_reserva']);
  },[])

  const desactivarReserva = async () => {
    const res = await axios.put(`http://localhost:5000/api/reservas/desactivar/${id_reserva}`,
    {estado:false})
    console.log(res.data);
  }

  return (
    <div>
        <Sidebar />
        <BarraNavegacion />
        <BreadcrumbPaginas nombre={'informacion reserva'}/>
        <DetalleHabitacionReserva />
        <DetalleClienteReserva />
        <div className='d-flex justify-content-end margen-botones'>
        <Link to='/modificarreserva'><Button className='botones-reservas' variant='primary'> Modificar Reserva</Button></Link>
          <Link to='/cargandoeliminarreserva' ><Button onClick={()=>desactivarReserva()} className='botones-reservas' variant='danger'>Cancelar reserva</Button></Link>
        </div>
        <Footer />
    </div>
  )
}
