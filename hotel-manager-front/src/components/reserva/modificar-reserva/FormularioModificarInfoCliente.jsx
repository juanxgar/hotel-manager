import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../../../styles/modificarReserva.css';
import axios from "axios";
import Cookies from "universal-cookie/es6";
import { Link } from "react-router-dom";

const FormularioModificarInfoCliente = () => {

    const [id_cliente, setId_cliente] = useState('');
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

    useEffect(()=> {
        const cookie = new Cookies();
        const datos=cookie.get('infoPersonalCliente')[0]
        setId_cliente(datos['id_cliente'])
        setNombre(datos['nombre']);
        setApellido(datos['apellido'])
        setEmail(datos['email'])
        setTipo_doc(datos['tipo_doc'])
        setNum_documento(datos['num_documento'])
        setTelefono(datos['telefono'])
        setEstado_civil(datos['estado_civil'])
        setDonde_viene(datos['donde_viene'])
        setPara_donde_va(datos['para_donde_va'])
        setNacionalidad(datos['nacionalidad'])
        setProfesion(datos['profesion'])
        setVehiculo(datos['vehiculo'])
        console.log(datos['vehiculo'])
    },[])

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
            return true
        }else{
            setVehiculo(false);
            console.log(vehiculo);
            return false
        }
    }

    const modificarInfoCliente = async () => {
        const res = await axios.put(`http://localhost:5000/api/clientes/edit/${id_cliente}`, 
        {nombre:nombre, apellido:apellido, email:email, tipo_doc:tipo_doc, num_documento:num_documento,
        telefono:telefono, estado_civil:estado_civil, donde_viene:donde_viene, para_donde_va:para_donde_va,
        nacionalidad:nacionalidad, profesion:profesion, vehiculo:vehiculo} );
        console.log(res.data);
    }

    return(
        
        <div className='form-style'>
              
            <React.Fragment>
                    <left><h4>MODIFICAR INFORMACIÓN CLIENTE</h4></left>
            </React.Fragment>
            
        <Form>
        
        <Row>
            <Col>
            <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control value={nombre} name='nombre' type="text" placeholder="Ingrese el nombre" onChange={onChangeNombre}/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="apellido">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control value={apellido} name='apellido' type="text" placeholder="Ingrese los apellidos" onChange={onChangeApellido}/>
            </Form.Group>   
            </Col>
        </Row>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control value={email} name='email' type="email" placeholder="Ingrese el correo electrónico" onChange={onChangeEmail}/>
        </Form.Group>

        <Row>
            <Col>
            <Form.Group className="mb-3" controlId="tipo_doc">
                <Form.Label>Tipo Documento</Form.Label>
                <Form.Select value={tipo_doc} name='tipo_doc' onChange={onChangeTipo_doc}>
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
                <Form.Control value={num_documento} name='num_documento' type="text" placeholder="Ingrese el número de documento" onChange={onChangeNum_documento}/>
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
            <Form.Group className="mb-3" controlId="telefono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control value={telefono} name='telefono' type="text" placeholder="Ingrese el teléfono" onChange={onChangeTelefono}/>
            </Form.Group>
            </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="estado_civil">
                        <Form.Label>Estado civil</Form.Label>
                        <Form.Select value={estado_civil} name='estado_civil' onChange={onChangeEstado_civil}>
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
                    <Form.Control value={donde_viene} name='donde_viene' type="text" placeholder="Ingrese la ciudad de origen" onChange={onChangeDonde_viene}/>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="para_donde_va">
                    <Form.Label>Ciudad de destino</Form.Label>
                    <Form.Control value={para_donde_va} name='para_donde_va' type="text" placeholder="Ingrese la ciudad de destino" onChange={onChangePara_donde_va}/>
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="nacionalidad">
                        <Form.Label>Nacionalidad</Form.Label>
                        <Form.Control value={nacionalidad} name='nacionalidad' type="text" placeholder="Ingrese la nacionalidad" onChange={onChangeNacionalidad}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="profesion">
                        <Form.Label>Profesión</Form.Label>
                        <Form.Control value={profesion} name='profesion' type="text" placeholder="Ingrese la nacionalidad" onChange={onChangeProfesion}/>
                    </Form.Group>
                </Col>
            </Row>  
            
            <Form.Group className="mb-3" controlId="vehiculo">
                <Form.Check defaultChecked={()=>validarCheckboxVehiculo()} type="checkbox" label="¿Ingresa con vehículo?" onClick={()=>validarCheckboxVehiculo()}/>
            </Form.Group>
            <Row>
                <Col md="10"></Col>
                <Col >
                <Link to='/reservas'><Button variant="primary" onClick={()=>modificarInfoCliente()}>Guardar</Button></Link>
                </Col>
            </Row>
        </Form>
        </div> 
      
    );

}

export default FormularioModificarInfoCliente;