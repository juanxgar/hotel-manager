import React, { useState, useEffect, useHistory } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/Reserva.css';

const Reserva = () => {
    const userInfo = useState();
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [con_email, setConEmail] = useState('');
    const [tipo_documento, setTipoDocumento] = useState('');
    const [num_documento, setNumDocumento] = useState('');
    const [telefono, setTelefono] = useState('');


useEffect( ()=>{

    if(!userInfo){
        userInfo.push("/");
    }else{  
        setNombre(userInfo.nombre);
        setApellido(userInfo.apellido);
        setEmail(userInfo.email);
        setConEmail(userInfo.con_email);
        setTipoDocumento(userInfo.tipo_documento);
        setNumDocumento(userInfo.num_documento);
        setTelefono(userInfo.telefono);
    }


},[userInfo]);

    return(
        
        <Container fluid="lg">
            
         

            <div className='block-example'>   
        <Form>
        
            <Row>
                
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #11
                    " name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                    Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #12" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                    Reservar
                    </Button> 
                    </Form.Group>
                </Col>
               
                
            
            </Row>

            <Row>
                
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #13" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                        Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #15" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                    Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                
            
            </Row>

            <Row>
                
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #16" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                    Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #17" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                    Reservar
                    </Button> 
                    </Form.Group>
                </Col>
               
            
            </Row>
            <Row>
                
                <Col>
                        <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                        <input type="text" size="50" maxlength="50" value="Habitacion #18" name="nombre"></input>&nbsp;
                        <Button variant="primary" type="guardar">
                            Reservar
                        </Button> 
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                        <input type="text" size="50" maxlength="50" value="Habitacion #20" name="nombre"></input>&nbsp;
                        <Button variant="primary" type="guardar">
                        Reservar
                        </Button> 
                        </Form.Group>
                    </Col>
                    
                
                </Row>
                <Row>
                
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #21" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                        Reservar
                    </Button> 
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #22" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                    Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                
            
            </Row>
            <Row>
                
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #23" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                        Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #24" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                    Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                
            
            </Row>
            <Row>
                
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #25" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                        Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #26" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                    Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                
            
            </Row>
            <Row>
                
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #27" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                        Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #28" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                    Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                
            
            </Row>
            <Row>
                
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #29" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                        Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #30" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                    Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                
            
            </Row>
            <Row>
                
            <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                    <input type="text" size="50" maxlength="50" value="Habitacion #31" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                        Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicFechaNacimiento">
                     <input type="text" size="50" maxlength="50" value="Habitacion #32" name="nombre"></input>&nbsp;
                    <Button variant="primary" type="guardar">
                    Reservar
                    </Button> 
                    </Form.Group>
                </Col>
                
            
            </Row>
            
            <form method="get" action="/reserva">
                        <button type="submit">Atras </button>
                    </form>
 
                    <a href="http://localhost:3000/reserva" class="button">Atras</a>
     
        </Form>
        </div> 
        </Container>
    );
}
export default Reserva;
