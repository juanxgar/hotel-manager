import React, { useState } from "react";
import { Button } from 'reactstrap'
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import '../../styles/usuarios/VerUsuario.css';
import '../../styles/moduloPago.css';
import axios from 'axios';


const FormularioPagoEfectivo = () => {


    return (

        <div className="contenedor-formulario-pagoefectivo">
        <Form className="formulario-pagoefectivo">  
                <Row>
                    <Row>
                        <Col sm ={7}>
                            <label for="monto">Ingrese el monto:</label>
                        </Col>
                        <Col sm={1}>
                        <input type="text" size={15} id="monto" placeholder="$"/>
                        </Col>
                    </Row>
                </Row>
                <Row>&nbsp;</Row>
                <Row>
                    <Col sm={8}></Col>
                    <Col sm={5}>
                    <Button color="outline-success" ><FontAwesomeIcon icon={faPlusCircle} />&nbsp; Pagar</Button>
                    </Col>
                </Row>
            </Form>

            </div>
    );

}

export default FormularioPagoEfectivo;