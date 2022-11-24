<<<<<<< HEAD
import React from "react";
import { Row, Col, Form } from 'react-bootstrap';
=======
import React, { useState } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';
>>>>>>> 69f3c6bf12f46cb935926e356fa2217269abd3ee
import '../../styles/usuarios/VerUsuario.css';
import '../../styles/moduloPago.css';
import FormularioDatosOperacion from './FormularioDatosOperacion';
import AcordeonPago from './AcordeonPago';
<<<<<<< HEAD
=======
import axios from 'axios';
>>>>>>> 69f3c6bf12f46cb935926e356fa2217269abd3ee

const DatosOperacion = () => {

    
    return(
        <>
        <Form>
            <Row className="datos-operacion">
                <Col>
                <FormularioDatosOperacion/>
                </Col>
                <Col>
                 <AcordeonPago/> 
                 </Col>
            </Row>
            </Form>
                    </>       
             
    );

}
export default DatosOperacion;