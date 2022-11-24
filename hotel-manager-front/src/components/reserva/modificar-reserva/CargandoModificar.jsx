import React, {useState, useEffect} from 'react'
import { Spinner } from 'reactstrap'
import '../../../styles/componentes-generales/cargando.css';
import Cookies from 'universal-cookie/es6';
import axios from 'axios';

export default function CargandoModificar() {

    const [id_reserva, setId_reserva] = useState('');
    const [fecha_ingreso, setFecha_ingreso] = useState('');
    const [fecha_salida, setFecha_salida] = useState('');
    const [fecha_reserva, setFecha_reserva] = useState('');
    const [num_adultos, setNum_adultos] = useState('');
    const [num_kids, setNum_kids] = useState('');
    const [id_habitacion, setId_habitacion] = useState('');

    useEffect(()=>{
        const cookie = new Cookies()
        const datosReserva = cookie.get('infoReserva');
        const idHab = cookie.get('idHabitacion')
        console.log(datosReserva, idHab);
        setId_reserva(datosReserva['id_reserva']);
        setFecha_ingreso(datosReserva['fecha_ingreso']);
        setFecha_salida(datosReserva['fecha_salida']);
        setFecha_reserva(datosReserva['fecha_reserva']);
        setNum_adultos(datosReserva['num_adultos']);
        setNum_kids(datosReserva['num_kids']);
        setId_habitacion(idHab);

        const modificarReserva = async () => {
            const res = await axios.put(`http://localhost:5000/api/reservas/edit/${datosReserva['id_reserva']}`,
            { fecha_reserva:datosReserva['fecha_reserva'], fecha_ingreso:datosReserva['fecha_ingreso'], fecha_salida:datosReserva['fecha_salida'],
              num_adultos:datosReserva['num_adultos'], num_kids:datosReserva['num_kids'], id_habitacion:idHab})
            console.log(res.data);
        }
        modificarReserva();

    }, [])

  const redireccionar = () => {
    window.location.href = "./modificarreserva";
  }

  setTimeout(() => {
    redireccionar()
  }, 2000);

  return (
    <div className='cargando'>
        <Spinner color='danger' />
    </div>
  )
}