import React, { useState, useEffect } from 'react'
import { ListGroup, Card } from 'react-bootstrap';
import '../../../styles/reservas/listaReservasActivas.css';
import axios from 'axios';
import Cookies from 'universal-cookie/es6';
import { Link } from 'react-router-dom';

export default function ListaReservasActivas() {

  const [clientes_activos, setClientes_activos] = useState([]);
  const cookie = new Cookies();

  useEffect(()=> {
    const clientesActivos = async () => {
      const res = await axios.get(`http://localhost:5000/api/clientes/activos`);
      console.log(res.data);
      setClientes_activos(res.data);
    }
    clientesActivos();
  },[])

  const guardarInfoHabitacionCliente = async (id_reserva) => {
    const res = await axios.get(`http://localhost:5000/api/habitaciones/habitacioncliente/${id_reserva}`);
    cookie.set('infoHabitacionCliente', res.data, {path: '/'});
    console.log('Hab: ', res.data);
  }

  const guardarInfoReservaCliente = async (id_reserva) => {
    const res = await axios.get(`http://localhost:5000/api/reservas/especifico/${id_reserva}`);
    cookie.set('infoReservaCliente', res.data, {path: '/'});
    console.log('Res: ', res.data);
  }

  const guardarInfoPersonalCliente = async (id_cliente) => {
    const res = await axios.get(`http://localhost:5000/api/clientes/especifico/${id_cliente}`);
    cookie.set('infoPersonalCliente', res.data, {path: '/'});
    console.log('Cli:', res.data)
  }

  const guardarInfo = (id_reserva, id_cliente) => {
    try{
      guardarInfoHabitacionCliente(id_reserva);
      guardarInfoReservaCliente(id_reserva);
      guardarInfoPersonalCliente(id_cliente);
    }catch(e){
      console.log('error: ', e)
    } 
  }

  return (
    <div className='lista'>

      <Card className='card-lista'>
        <Card.Body>
          <Card.Title className='titulo-lista'>Reservas Activas</Card.Title>
          <ListGroup>
          {clientes_activos.map(({id_cliente, id_reserva, nombre, apellido})=> (
            <div key={id_cliente} className='lista-reservas'>
              <Link to='/cargando'>
                <ListGroup.Item action onClick={()=>guardarInfo(id_reserva, id_cliente)}>Reserva #{id_reserva}, {nombre} {apellido}</ListGroup.Item>
              </Link>
            </div>  
          ))}
          </ListGroup>
      </Card.Body>
      </Card>
    </div>
  )
}
