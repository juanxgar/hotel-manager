import React, { useState } from "react";
import {  Button, Container, Row, Col, Table} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt, faPlusCircle, faBeer, faEgg } from '@fortawesome/free-solid-svg-icons';
import '../../styles/usuarios/VerUsuario.css';
import '../../styles/moduloPago.css';
import '../../styles/moduloInventario.css'
import axios from 'axios';

const TablaAgregarProductos = () => {

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
            id:"4",
            nombre: "Almuerzo",
            descrip: "Unidad",
            imagen: "https://i.ibb.co/zhjpp32/almuerzo.jpg",
            precio: 25000,
            cantidad: 1
        },
        {
            id:"5",
            nombre: "Servicio Habitación",
            descrip: " 1 Pedido",
            imagen: "https://i.ibb.co/HTjP0BN/serviciohabitacion.jpg",
            precio: 15000,
            cantidad: 2
        },
        {
            id:"6",
            nombre: "Parqueadero",
            descrip: "1 h",
            imagen: "https://i.ibb.co/8x3Thg2/parqueadero.jpg",
            precio: 2000,
            cantidad: 3
        },
        {
            id:"7",
            nombre: "Guía Turistico",
            descrip: "Grupo",
            imagen: "https://i.ibb.co/qmZzpvC/laplatahuila.jpg",
            precio: 40000,
            cantidad: 1
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
                    {/* Titulo Gestión Productos y Servicios a agregar*/}
                    <Col sm={8}>
                        <h2 className='titulo-principal'>
                            <FontAwesomeIcon icon={faBeer} />&nbsp; Productos y Servicios a Agregar
                        </h2>
                    </Col>
                </Row>

                {/* Tabla Productos*/}
                {/* Titulo*/}
            
               < div className="table-head">
                <Row>
                    <Col sm={2}>Selección</Col>
                    <Col>Imagen</Col>
                    <Col>Nombre</Col>
                    <Col>Descripción</Col>
                    <Col>Precio</Col>
                    <Col sm={2} >Cantidad</Col>

                </Row>
                </div>
                {/* Cuerpo*/}
                
                <div className="table-body"> 
                <div className="scrolling">
                    {products.map(( elemento ) => (
                        <>
                        <Row>
                            <Col > 
                            <input type="checkbox" id="seleccion" value="seleccion"/>
                            </Col>
                            <Col sm={3}> <img className='imagen-inventario'src={elemento.imagen} alt='imagen-inventario'/> </Col>
                            <Col sm={2}>{elemento.nombre} </Col>
                            <Col sm={2}>{elemento.descrip}</Col>
                            <Col sm={2}>$ {elemento.precio}</Col>
                            <Col sm={2}>
                                 <input className='form-control' name="cantidad" type="number" size="2" onChange={onChangeCantidad} placeholder={elemento.cantidad}/>
                            </Col>
                            </Row>
                        <div className="espacio-fila"></div>
                        </>
                    ))}
                </div>
                </div>

                <div className="boton-pago">
            {/* Botón realizar pago*/}
            <Row>
                <Col sm={13}>
                        <div className=' d-flex justify-content-end'>
                            <Button color="primary" href='#' ><FontAwesomeIcon icon={faPlusCircle} />&nbsp; Agregar Producto/Servicio</Button>
                        </div>
                </Col>
            </Row>
            </div>
            
            </Container>
            
            

        </>

    );

}

export default TablaAgregarProductos;