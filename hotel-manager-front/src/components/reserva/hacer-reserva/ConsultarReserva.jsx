import React from 'react'
import { Card, Button, Form, Row, Col, Modal } from 'react-bootstrap';
import { useStateIfMounted } from 'use-state-if-mounted';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../styles/reservas/consultarReservas.css';
import Cookies from "universal-cookie/es6";

export default function ConsultarReserva() {

    const datosHabitaciones = new Cookies();
    const infoReserva = new Cookies();

    const [show, setShow] = useStateIfMounted(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [fecha_ingreso, setFecha_ingreso] = useStateIfMounted('');
    const [fecha_salida, setFecha_salida] = useStateIfMounted('');
    const [cantidad_adultos, setCantidad_adultos] = useStateIfMounted('0');
    const [cantidad_kids, setCantidad_kids] = useStateIfMounted('0');
    const cantidad_huespedes=[0,1,2,3,4,5,6]
    var fecha_min_1='';
    var fecha_min_2='';
    var fecha_max_1='';
    var fecha_max_2='';

    const onChangeFecha_ingreso = (e) => {
        setFecha_ingreso(e.currentTarget.value);
        console.log(fecha_ingreso);
    };

    const onChangeFecha_salida = (e) => {
        setFecha_salida(e.currentTarget.value);
        console.log(fecha_salida);
    };

    const onChangeCantidad_adultos = (e) => {
        setCantidad_adultos(e.currentTarget.value);
        console.log(cantidad_adultos);
    };

    const onChangeCantidad_kids = (e) => {
        setCantidad_kids(e.currentTarget.value);
        console.log(cantidad_kids);
    };

    const fechas = () => {
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

        const anio_max=String(parseInt(anio)+1)

        fecha_min_1=`${anio}-${mes}-${dia}`;
        fecha_max_1=`${anio_max}-${mes}-${dia}`;

        fecha_min_2=fecha_ingreso.split('-');
        fecha_min_2[2]=parseInt(fecha_min_2[2])+1;
        fecha_min_2[2]=String(fecha_min_2[2])
        if(fecha_min_2[2].length===1){
            fecha_min_2[2]='0'+fecha_min_2[2];    
        }
        fecha_min_2=fecha_min_2[0]+'-'+fecha_min_2[1]+'-'+fecha_min_2[2]

        fecha_max_2=fecha_ingreso.split('-');
        fecha_max_2[1]=parseInt(fecha_max_2[1])+1;
        fecha_max_2[1]=String(fecha_max_2[1]);
        if(fecha_max_2[1].length===1){
            fecha_max_2[1]='0'+fecha_max_2[1];
        }
        fecha_max_2=fecha_max_2[0]+'-'+fecha_max_2[1]+'-'+fecha_max_2[2];        
      }
    fechas();

    const consultarBase = async () => {
        const capacidad=parseInt(cantidad_adultos)+parseInt(cantidad_kids)
        const res = await axios.get(`http://localhost:5000/api/habitaciones/disponibles/${capacidad}/${fecha_ingreso}/${fecha_salida}` );
        console.log(res.data, capacidad, fecha_ingreso, fecha_salida);
        datosHabitaciones.set('datosHabitaciones', res.data , { path: '/' });
        console.log(datosHabitaciones.get('datosHabitaciones'));
        const info={
            fecha_ingreso:fecha_ingreso,
            fecha_salida:fecha_salida,
            num_adultos: cantidad_adultos,
            num_kids: cantidad_kids
        };
        infoReserva.set('infoReserva', info , { path: '/' });
        console.log(infoReserva.get('infoReserva'));
        setFecha_ingreso('');
        setFecha_salida('');
        setCantidad_adultos(0);
        setCantidad_kids(0);
    }

    const consultar = () =>{
        console.log('Click');
        consultarBase();
        datosHabitaciones.get('datosHabitaciones')
        handleShow();

    }

    const enviarDatos = (e) => {
        e.preventDefault();
    }

  return (
    <Card className='consulta'>
        <h3 className='consulta-title'>Hacer Reservación</h3>
        <Card.Body className='consulta-body'>
            <Form className='form-consulta-reserva' onSubmit={enviarDatos}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Fecha de ingreso</Form.Label>
                            <Form.Control type="date" placeholder="Fecha de ingreso" name='fecha_ingreso' min={fecha_min_1} max={fecha_max_1} onChange={onChangeFecha_ingreso}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Cantidad Adultos</Form.Label>
                            <Form.Select name='cantidad_adultos' onChange={onChangeCantidad_adultos}>
                                {cantidad_huespedes.map((num) => (
                                    <option key={num}>{num}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Fecha de salida</Form.Label>
                            <Form.Control type="date" placeholder="Fecha de salida" name='fecha_salida' min={fecha_min_2} max={fecha_max_2} onChange={onChangeFecha_salida}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Cantidad Niños</Form.Label>
                            <Form.Select name='cantidad_kids' onChange={onChangeCantidad_kids}>
                                {cantidad_huespedes.map((num) => (
                                    <option key={num}>{num}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Button  style={{background: '#930001', borderColor:'#930001'}} onClick={()=>consultar()}>
                    Consultar
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Confirmación de datos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>¿Hacer consulta?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="success" className='boton-consultar' onClick={handleClose}>
                        <Link to='/consultaHabitaciones' className='button-link-consultar'> Consultar </Link>
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </Card.Body>
        </Card> 
  )
}
