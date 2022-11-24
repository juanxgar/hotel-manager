import React, { useState } from "react";
import { Button } from 'reactstrap'
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import '../../styles/usuarios/VerUsuario.css';
import '../../styles/moduloPago.css';
import axios from 'axios';
<<<<<<< HEAD

=======
>>>>>>> 69f3c6bf12f46cb935926e356fa2217269abd3ee


const FormularioPagoTarjeta = () => {


    return (

        <div className="contenedor-formulario-pagotarjeta">
        <Form className="formulario-pagotarjeta">  
                <Row>
                    <Row>
                        <Col sm ={8}>
                            <label for="numero-tarjeta">Número Tarjeta</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                        <input type="text" size={34} id="numero-tarjeta" placeholder="número tarjeta"/>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row>
                     <Col sm={2}>  <label for="caducidad">Caducidad</label> </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <input type="text" id="mes" size={6} placeholder="mm"/>
                        </Col>
                        <Col sm={4}></Col>
                        <Col sm={3}>
                            <input type="text" id="año" size={6} placeholder="aa"/>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row>
                        <Col sm={8}> 
                            <label for="caducidad">Cod. Seguridad</label>
                        </Col>
                         
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <input size={34} type="text" id="codigo-seguridad" placeholder="codigo"/>
                        </Col>
                    </Row>
                </Row>
                <Row>&nbsp;</Row>
                <Row>
                    <Col sm={6}>
                    <Button color="outline-success" ><FontAwesomeIcon icon={faPlusCircle} />&nbsp; Pagar</Button>
                    </Col>
                </Row>
            </Form>

            </div>
    );

}

export default FormularioPagoTarjeta;