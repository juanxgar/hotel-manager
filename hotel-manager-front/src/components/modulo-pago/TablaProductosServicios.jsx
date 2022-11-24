import React, { useState } from "react";
import {  Button, Container, Row, Col, Modal, ModalBody, ModalHeader, FormGroup, Form, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt, faPlusCircle, faCocktail, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
<<<<<<< HEAD
import '../../styles/usuarios/VerUsuario.css'
=======
import '../../styles/usuarios/VerUsuario.css';
>>>>>>> 69f3c6bf12f46cb935926e356fa2217269abd3ee
import '../../styles/moduloPago.css';
import '../../styles/moduloInventario.css'
import axios from 'axios';
<<<<<<< HEAD
import AlertConfirmacion from '../../components/componentes-generales/AlertConfirmacion';
=======
>>>>>>> 69f3c6bf12f46cb935926e356fa2217269abd3ee



const TablaProductosServicios = () => {

    const [nombre, setNombre] = useState('');
    const [descrip, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');
    const [precio, setPrecio] = useState(0);
    const [cantidad, setCantidad] = useState(0,2);
    const [modalModificar, setModalModificar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [producto, setProducto] = useState( {
        id:" ",
        nombre: "",
        descrip: "",
        imagen: "",
        precio: 0,
        cantidad: 0
    })
    const [products, setProducts] =useState([
        {
            id:"1",
            nombre: "Desayuno",
            descrip: "Unidad",
            imagen: "https://i.ibb.co/k1kgGGj/desayuno.jpg",
            precio: 15000,
            cantidad: 3
        },
        {
            id:"2",
            nombre: "Lavanderia",
            descrip: "Pieza",
            imagen: "https://i.ibb.co/f1by7dK/lavanderia.jpg",
            precio: 5000,
            cantidad: 1
        },
        {
            id:"3",
            nombre: "Barra",
            descrip: "Abierta",
            imagen: "https://i.ibb.co/2vdHXCc/bar.jpg",
            precio: 50000,
            cantidad: 3
        }
    ])

    
    const openModalModificar = (registro) => { 
        setModalModificar(true) ;
        setProducto(registro) ;
    }
    const closeModalModificar = () =>{
        setModalModificar(false)
    }

    const openModalEliminar = (registro) => { 
        setModalEliminar(true) ;
    }

    const closeModalEliminar = () =>{
        setModalEliminar(false)
    }


  
    const onChangeImagen = (e) => {
        setImagen(e.currentTarget.value);
        console.log(imagen);
    };

    const onChangeCantidad= (e) => {
        setCantidad(e.currentTarget.value);
        console.log(cantidad);
    };



    

    return (

        <>
            <Container className='usuario'>

                <Row className='titulo-boton'>
                    {/* Titulo Gestión Productos y Servicios Cliente*/}
                    <Col sm={8}>
                        <h2 className='titulo-principal'>
                            <FontAwesomeIcon icon={faCocktail} />&nbsp; Productos y Servicios Cliente
                        </h2>
                    </Col>
                    {/* Botón Nuevo Producto/Servicio*/}
                    <Col sm={4}>
                        <div className=' d-flex justify-content-end'>
                            <Button color="success" href='/pagoagregarserviciosproductoscliente' ><FontAwesomeIcon icon={faPlusCircle} />&nbsp; Agregar Producto/Servicio</Button>
                        </div>
                    </Col>
                </Row>

                {/* Tabla Productos*/}
                {/* Titulo*/}
                <Row className='table-head'>

                    <Col>Imagen</Col>
                    <Col>Nombre</Col>
                    <Col>Descripción</Col>
                    <Col>Precio</Col>
                    <Col>Cantidad</Col>
                    <Col>Acciones</Col>

                </Row>
                {/* Cuerpo*/}
                <div className="scroll">
                    {products.map(( elemento ) => (
                        <Row className='table-body'>

                            <Col> <img className='imagen-inventario' src={elemento.imagen} alt='imagen-inventario'/> </Col>
                            <Col>{elemento.nombre} </Col>
                            <Col>{elemento.descrip}</Col>
                            <Col>$ {elemento.precio}</Col>
                            <Col>{elemento.cantidad}</Col>
                            <Col>
                                <Button color="outline-primary" onClick={()=>openModalModificar(elemento)}> <FontAwesomeIcon icon={faPencilAlt} /> </Button>&nbsp;&nbsp;
                                <Button color="outline-danger" onClick={openModalEliminar}> <FontAwesomeIcon icon={faTrashAlt} /> </Button>
                            </Col>

                        </Row>
                    ))}
                </div>
            </Container>
            
            <div className="boton-pago">
            {/* Botón realizar pago*/}
            <Row>
                <Col sm={11}>
                        <div className=' d-flex justify-content-end'>
                            <Button color="primary" href='/realizarpago' ><FontAwesomeIcon icon={faFileInvoiceDollar} />&nbsp; Realizar Pago</Button>
                        </div>
                </Col>
            </Row>
            </div>


            {/* Modal Modificar Producto*/}

            <Modal isOpen={modalModificar}
                >
                <ModalHeader>
                    <div><h4>Modificar Cantidad Producto/Servicio </h4></div>
                </ModalHeader>
                <ModalBody>
                    <Form >
                        <Row>
                            <Col>
                                <img className='imagen-inventario' src={producto.imagen} alt='imagen-inventario'/>
                            </Col>
                            <Col>
                                <Row>&nbsp;</Row>
                                <Row>
                                    <label>Cantidad</label>
                                    <input className='form-control' name="cantidad" type="text" onChange={onChangeCantidad} placeholder={producto.cantidad}/>
                                </Row>
                            </Col>
                            <Col>&nbsp;</Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={closeModalModificar}>Cancelar</Button>
                    <Button color="primary" onClick={closeModalModificar}>Guardar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalEliminar}>
                    <ModalHeader>
                        <div><h3>Eliminar Producto/Servicio</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        ¿Está seguro de eliminar el producto/servicio de la cuenta del cliente?
                    </ModalBody>

                    <ModalFooter>
                        <Button color="danger" onClick={closeModalEliminar}>Cancelar</Button>
                        <Button color="primary" >Aceptar</Button>
                        
                    </ModalFooter>
                </Modal>



        </>

    );

}

export default TablaProductosServicios;