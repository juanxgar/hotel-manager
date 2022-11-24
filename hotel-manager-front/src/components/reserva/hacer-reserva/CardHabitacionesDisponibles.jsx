import React from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function CardHabitacionesDisponibles({ nombre, imagen, cantidad_camas, precio_persona, funcion, fechas_reserva, link}) {

  return (
    <div>
        <Card style={{ width: '80%' }}>
                <Row>
                    <Col sm={4}>
                        <Card.Img src={imagen} className='image-hab'/>
                    </Col>
                    <Col sm={8}>
                        <Card.Body className='info-hab'>
                            <Row>
                                <Col sm={8}>
                                <Card.Title>{nombre}</Card.Title>
                                </Col>
                                <Col sm={4}>
                                    <h5 className='precio'>${precio_persona} C/U</h5>
                                </Col>
                            </Row>
                            
                            <Card.Text>Cantidad de camas: {cantidad_camas} </Card.Text>
                            {fechas_reserva}
                            <div className='button-hab'>
                            {funcion!==undefined &&
                                <Button style={{background: '#930001', borderColor:'#930001'}} onClick={funcion}>
                                    <Link to={link} className='button-link-hab'>Seleccionar</Link>
                                </Button>
                            }
                                
                            </div>
                            
                        </Card.Body>
                    </Col>
                </Row>            
            </Card>
    </div>
  )
}
