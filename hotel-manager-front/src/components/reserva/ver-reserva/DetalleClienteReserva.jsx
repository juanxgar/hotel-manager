import React, { useState, useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/reservas/detalleClienteReserva.css';
import Cookies from 'universal-cookie/es6';

export default function DetalleClienteReserva() {

    const [info_cliente, setInfo_cliente] = useState('');

    useEffect(() => {
        const cookie = new Cookies();
        var info=cookie.get('infoPersonalCliente')
        setInfo_cliente(info[0]);
    }, [])

  return (
    <div>
        <h2 className='titulo-principal'>
            <FontAwesomeIcon icon={faUser} />&nbsp; Datos Personales Cliente
        </h2>
        <Card className ='tarjeta-cliente' style={{ width: '80%' }}>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Text className='texto-principal'>Nombre</Card.Text>    
                    </Col>
                    <Col>
                        <Card.Text className='alineacion-info'>{info_cliente['nombre']}</Card.Text>    
                    </Col>
                    <Col>
                        <Card.Text className='texto-principal'>Apellido</Card.Text>
                    </Col>
                    <Col>
                        <Card.Text className='alineacion-info'>{info_cliente['apellido']}</Card.Text>
                    </Col>                   
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                    <Col>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card.Text className='texto-principal'>Correo Electrónico</Card.Text>
                    </Col>
                    <Col>
                    <Card.Text className='alineacion-info'>{info_cliente['email']}</Card.Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr className='linea-email'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card.Text className='texto-principal'>{info_cliente['tipo_doc']}</Card.Text>
                    </Col>
                    <Col>
                        <Card.Text className='alineacion-info'>{info_cliente['num_documento']}</Card.Text>
                    </Col>
                    <Col>
                    <Card.Text className='texto-principal'>Teléfono</Card.Text>
                    </Col>
                    <Col>
                        <Card.Text className='alineacion-info'>{info_cliente['telefono']}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </div>
  )
}
