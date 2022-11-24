import React, { useState } from "react";
import { Form, Row, Col } from 'react-bootstrap';
import { Button} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoap} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../../styles/moduloInventario.css';
import foto from '../../assets/images-menu/foto.png'
import { Link } from "react-router-dom";


const FormularioRegistrarProducto = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');

    const onChangeNombre= (e) => {
        setNombre(e.currentTarget.value);
        console.log(nombre);
    };

    const onChangeDescripcion = (e) => {
        setDescripcion(e.currentTarget.value);
        console.log(descripcion);
    };

    const onChangeImagen = (e) => {
        setImagen(e.currentTarget.value);
        console.log(imagen);
    };

    const onChangePrecio = (e) => {
        setPrecio(e.currentTarget.value);
        console.log(precio);
    };
    const onChangeCantidad= (e) => {
        setCantidad(e.currentTarget.value);
        console.log(cantidad);
    };

    const registrarProducto = async () => {
        const res = axios.post(`http://localhost:5000/api/productos/register`,
        { nombre:nombre, descripcion:descripcion, imagen:imagen, precio:precio, cantidad:cantidad})
        console.log(res.data)
    }

    return (
        
        <div className='principal-formulario'>
        
        <div className= 'registro-producto-title'>
        <React.Fragment>
            <left><h2><FontAwesomeIcon icon={faSoap} />&nbsp; Registrar Producto</h2></left>
        </React.Fragment>
        </div>

        <div className="principal-registrar-producto">
        <div className='form-style'>
        <Form >
                        <Row>
                            <Col>
                                <img className='imagen-inventario' src={foto} alt='foto imagen'/>
                            </Col>
                            <Col>
                                <Row><br></br></Row>
                                <Row>
                                    <Col>
                                    <label>src:</label>
                                    </Col>
                                </Row>
                                <Row>                                    
                                    <Col sm={8}>
                                    <input className='form-control' name="src" type="text" onChange={onChangeImagen} />
                                    </Col>
                                    <Col>
                                        {/*<Button color="secondary"><FontAwesomeIcon icon={faSave} /></Button>*/}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>

                                    <label>Nombre</label>
                                    <input className='form-control' name="nombre" type="text"  onChange={onChangeNombre} />

                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>

                                    <label>Descripción</label>
                                    <input className='form-control' name="descrip" type="text" onChange={onChangeDescripcion} />

                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>

                                    <label>Precio</label>
                                    <input className='form-control' name="precio" type="numeric" onChange={onChangePrecio}  />

                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <label>Cantidad</label>
                                    <input className='form-control' name="cantidad" type="numeric" onChange={onChangeCantidad} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>

                    
            </div>
            </div>  
                <div className="boton-registro">
                    <Row>
                    <Col sm={11}>
                        <Link to='/inventario' ><Button color="primary" onClick={()=>registrarProducto()}>Guardar</Button></Link>
                    </Col>
                    </Row>
                </div>        
            </div> 
    );

}




export default FormularioRegistrarProducto;