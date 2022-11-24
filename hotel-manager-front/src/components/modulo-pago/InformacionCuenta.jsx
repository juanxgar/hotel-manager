import React, { useState } from "react";
import { Table, Row, Col} from 'react-bootstrap';
import { Button} from 'reactstrap';
import axios from 'axios';
import '../../styles/moduloPago.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentsDollar} from '@fortawesome/free-solid-svg-icons';

const InformacionCuenta = () => {
    {/*Información prueba*/}

    const [prueba, setPrueba] = useState( {
        habitacion:" ",
        cliente: " ",
        imagen:" "
    })
    const [pruebas, setPruebas] =useState([
        {
            habitacion:"Sencilla 201",
            cliente: "Gregorio Aguirre",
            imagen:"https://i.ibb.co/B6RDS0J/habitacion1.jpg"
        },
        {
            habitacion:"Doble 102",
            cliente: "Pepa Diaz",
            imagen:"https://i.ibb.co/k6SKWvF/habitacion2.jpg"
        },
        {
            habitacion:"Doble 203",
            cliente: "Antonia Peralta",
            imagen:"https://i.ibb.co/jHQ13w2/habitacion3.jpg"
        }
    ])


    return (
        <div className="principal-cuenta-habitacion">

            <div className='registro-producto-title'>
                <React.Fragment>
                    <center>
                        <h2>
                            <FontAwesomeIcon icon={faCommentsDollar} />&nbsp; Información de Cuenta
                        </h2>
                    </center>
                </React.Fragment>
                
            </div>
            <div className='titulo-seleccion-habitacion'>
            <React.Fragment>
                    <left><text>Seleccione la habitación</text></left>
            </React.Fragment>
            </div>

            <div className="principal-registrar-producto">
                {pruebas.map((elemento ) => (

                    <Table  className='form-style'>
                    
                        <Row>
                            <Col>
                                <img className="imagen-pago" src={elemento.imagen} alt='imagen-pago'/>
                            </Col>
                            <Col>
                                <Row >
                                    <label className="contenido">Habitación: {elemento.habitacion}</label>
                                </Row>
                                <Row >
                                    <label className="contenido">Cliente: {elemento.cliente}</label>
                                    
                                </Row>
                            </Col>
                            <Col>
                                 <Row>&nbsp;</Row>
                                 <Row>&nbsp;</Row>
                                 <Row>
                                     <Col>
                                     <Button color="primary" href="/pagoserviciosproductoscliente">Seleccionar</Button>
                                     </Col>
                                 </Row>
                                    
                            </Col>
                        </Row>
                       
                        
                    </Table>
                ))}
               

            </div>

        </div>


    );

}

export default InformacionCuenta;