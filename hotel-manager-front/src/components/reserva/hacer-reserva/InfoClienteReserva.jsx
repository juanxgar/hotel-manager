import React, { useState, useEffect } from 'react';
import { Form, Card, Row, Col, Button } from 'react-bootstrap';
import Cookies from 'universal-cookie/es6';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../styles/reservas/infoClienteReserva.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function InfoClienteReserva() {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [tipo_doc, setTipo_doc] = useState('');
    const [num_documento, setNum_documento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [estado_civil, setEstado_civil] = useState('');
    const [donde_viene, setDonde_viene] = useState('');
    const [para_donde_va, setPara_donde_va] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [profesion, setProfesion] = useState('');
    const [vehiculo, setVehiculo] = useState(false);
    const [id_reserva, setId_reserva] = useState(0);
    
    var fecha_actual='';

    const cookie = new Cookies();
    const info_reserva=cookie.get('infoReserva');
    const id_habitacion =cookie.get('idHabitacion');

    const enviarDatos = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        
        const obtenerUltimoIdReserva = async () => {
            const res = await axios.get(`http://localhost:5000/api/reservas/lastid`);
            console.log('ultimo id: ', res.data);
            
            if(res.data===null){
                setId_reserva(1);
            }else{
                setId_reserva(res.data+1);
            }
        }
        obtenerUltimoIdReserva();
        
    }, [])

    const onChangeNombre = (e) => {
        setNombre(e.currentTarget.value);
        console.log(nombre);
    };

    const onChangeApellido = (e) => {
        setApellido(e.currentTarget.value);
        console.log(apellido);
    };

    const onChangeEmail = (e) => {
        setEmail(e.currentTarget.value);
        console.log(email);
    };

    const onChangeTipo_doc = (e) => {
        setTipo_doc(e.currentTarget.value);
        console.log(tipo_doc);
    };

    const onChangeNum_documento = (e) => {
        setNum_documento(e.currentTarget.value);
        console.log(num_documento);
    };

    const onChangeTelefono = (e) => {
        setTelefono(e.currentTarget.value);
        console.log(telefono);
    };

    const onChangeEstado_civil = (e) => {
        setEstado_civil(e.currentTarget.value);
        console.log(estado_civil);
    };

    const onChangeDonde_viene = (e) => {
        setDonde_viene(e.currentTarget.value);
        console.log(donde_viene);
    };

    const onChangePara_donde_va = (e) => {
        setPara_donde_va(e.currentTarget.value);
        console.log(para_donde_va);
    };

    const onChangeNacionalidad = (e) => {
        setNacionalidad(e.currentTarget.value);
        console.log(nacionalidad);
    };

    const onChangeProfesion = (e) => {
        setProfesion(e.currentTarget.value);
        console.log(profesion);
    };

    const validarCheckboxVehiculo = () => {
        if (vehiculo===false){
            setVehiculo(true);
            console.log(vehiculo)
        }else{
            setVehiculo(false);
            console.log(vehiculo);
        }
    }

    const fechaActual = () => {
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        var anio = String(hoy.getFullYear())
        var mes = String(hoy.getMonth()+1)
        var dia = String(hoy.getDate())
      
        if(mes.length===1){
            mes='0'+mes
        }
        if(dia.length===1){
            dia='0'+dia
        }

        fecha_actual=`${anio}-${mes}-${dia}`
      }
    fechaActual();

    const registroInfoReserva = async () => {
        const res = await axios.post(`http://localhost:5000/api/reservas/register`,
        {fecha_reserva:fecha_actual, fecha_ingreso:info_reserva.fecha_ingreso, 
        fecha_salida:info_reserva.fecha_salida, num_adultos:info_reserva.num_adultos, 
        num_kids:info_reserva.num_kids, id_habitacion:id_habitacion } );
        console.log(res.data)
    }

    const registroInfoCliente = async () => {
        const res = await axios.post(`http://localhost:5000/api/clientes/register`, 
        { id_reserva, nombre, apellido, email, tipo_doc, num_documento, telefono, 
        estado_civil, donde_viene, para_donde_va, nacionalidad, profesion, vehiculo} );
        console.log(res.data);
        setNombre('');
        setApellido('')
        setEmail('')
        setTipo_doc('')
        setNum_documento('')
        setTelefono('')
        setEstado_civil('')
        setDonde_viene('')
        setPara_donde_va('')
        setNacionalidad('')
        setProfesion('')
        setVehiculo('')
    }

    const registrarInfo = () => {
        registroInfoReserva();
        registroInfoCliente();
    }
    
    return (
    <div className='info-cliente'>
        <h3 className='titulo'><FontAwesomeIcon icon={faInfoCircle} />&nbsp; Ingresa los datos personales</h3>
        <Card className='card-cliente'>
            <Card.Body>
                <Form className='form-cliente' onSubmit={enviarDatos}>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name='nombre' type="text" placeholder="Ingrese el nombre" onChange={onChangeNombre}/>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="apellido">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control name='apellido' type="text" placeholder="Ingrese los apellidos" onChange={onChangeApellido}/>
                        </Form.Group>   
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Ingrese el correo electrónico" onChange={onChangeEmail}/>
                    </Form.Group>

                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="tipo_doc">
                            <Form.Label>Tipo Documento</Form.Label>
                            <Form.Select name='tipo_doc' onChange={onChangeTipo_doc}>
                                <option>Seleccione</option>
                                <option value="C.C.">C.C.</option>
                                <option value="T.I.">T.I.</option>
                                <option value="C.E.">C.E.</option>
                                <option value="Pasaporte">Pasaporte</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="num_documento">
                            <Form.Label>Número Documento</Form.Label>
                            <Form.Control name='num_documento' type="text" placeholder="Ingrese el número de documento" onChange={onChangeNum_documento}/>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="telefono">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control name='telefono' type="text" placeholder="Ingrese el teléfono" onChange={onChangeTelefono}/>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="estado_civil">
                            <Form.Label>Estado civil</Form.Label>
                            <Form.Select name='estado_civil' onChange={onChangeEstado_civil}>
                                <option>Seleccione</option>
                                <option value="Soltero">Soltero</option>
                                <option value="Casado">Casado</option>
                                <option value="Viudo">Viudo</option>
                                <option value="Union libre">Unión libre</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="donde_viene">
                            <Form.Label>Ciudad de origen</Form.Label>
                            <Form.Control name='donde_viene' type="text" placeholder="Ingrese la ciudad de origen" onChange={onChangeDonde_viene}/>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="para_donde_va">
                            <Form.Label>Ciudad de destino</Form.Label>
                            <Form.Control name='para_donde_va' type="text" placeholder="Ingrese la ciudad de destino" onChange={onChangePara_donde_va}/>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="nacionalidad">
                            <Form.Label>Nacionalidad</Form.Label>
                            <Form.Control name='nacionalidad' type="text" placeholder="Ingrese la nacionalidad" onChange={onChangeNacionalidad}/>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="profesion">
                            <Form.Label>Profesión</Form.Label>
                            <Form.Control name='profesion' type="text" placeholder="Ingrese la nacionalidad" onChange={onChangeProfesion}/>
                        </Form.Group>
                        </Col>
                    </Row>  
                    
                    <Form.Group className="mb-3" controlId="vehiculo">
                        <Form.Check type="checkbox" label="¿Ingresa con vehículo?" onClick={()=>validarCheckboxVehiculo()}/>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        <div className='enviar-info'>
            <Button variant="success" className='boton-enviar' onClick={()=>registrarInfo()}> 
                <Link to='/reservas' className='button-link-reserva'> &nbsp; &nbsp; &nbsp;Terminar Reserva&nbsp; &nbsp; &nbsp; </Link>
            </Button>
        </div>
    </div>
  )
}
