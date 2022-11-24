import React, { useState } from "react";
import {Button} from 'reactstrap'
import { Container, Accordion, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faCommentDollar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/usuarios/VerUsuario.css';
import '../../styles/moduloPago.css';
import FormularioPagoTarjeta from './FormularioPagoTarjeta';
import FormularioPagoEfectivo from './FormularioPagoEfectivo';
import axios from 'axios';
<<<<<<< HEAD

=======
>>>>>>> 69f3c6bf12f46cb935926e356fa2217269abd3ee


const AcordeonPago = () => {


    return (
           
            <Accordion defaultActiveKey="0" className="acordeon-pago" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div className="title-acordeon">
                            <FontAwesomeIcon icon={faCommentDollar} />&nbsp; Pagar en efectivo
                        </div>
                    </Accordion.Header>
                    <Accordion.Body >
                            <Row>
                              <Col className="acordeon-body-efectivo"> 
                              <FormularioPagoEfectivo/>
                              </Col> 
                            </Row>                      
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                    <div className="title-acordeon">
                            <FontAwesomeIcon icon={faCreditCard} />&nbsp; Pagar con Tarjeta
                    </div> 
                    </Accordion.Header>
                    <Accordion.Body>
                        <Row>
                        <Col className="acordeon-body-tarjeta">
                        <FormularioPagoTarjeta/>
                        </Col> 
                        </Row>
                          
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
    );

}

export default AcordeonPago;