import React, { useState } from "react";
import {  Button, Container, Row, Col, Modal, ModalBody, ModalHeader, FormGroup, Form, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt, faPlusCircle, faWarehouse, faSave } from '@fortawesome/free-solid-svg-icons';
import '../../styles/usuarios/VerUsuario.css';
import '../../styles/moduloInventario.css';
import { useEffect } from "react";
import axios from 'axios';
<<<<<<< HEAD

=======
>>>>>>> 69f3c6bf12f46cb935926e356fa2217269abd3ee


const TablaInventario = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');
    const [precio, setPrecio] = useState(0);
    const [cantidad, setCantidad] = useState(0,2);
    const [modalModificar, setModalModificar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);

    //Usado para mostrar los datos en editar
    const [producto, setProducto] = useState('')

    //Datos usados para mostrar
    const [products, setProducts] =useState([
        /*{
            id:"1",
            nombre: "Juego de Sabanas",
            descrip: "Unidad",
            imagen: "https://i.ibb.co/fHh724y/white-pillows-and-sheets-on-an-unmade-bed.jpg",
            precio: 40000,
            cantidad: 200
        },
        {
            id:"2",
            nombre: "Toalla",
            descrip: " Unidad",
            imagen: "https://i.ibb.co/chnVC1Z/hotel-bathroom-towels.jpg",
            precio: 12000,
            cantidad: 300
        },
        {
            id:"3",
            nombre: "Jabón de Baño",
            descrip: " Unidad",
            imagen: "https://i.ibb.co/DQnd77w/soap-bars-on-wood.jpg",
            precio: 2000,
            cantidad: 30
        }*/
    ])

    useEffect(()=> {  
        obtenerDatos()
    },[]);

    const obtenerDatos = async () => {
        const res = await axios.get(`http://localhost:5000/api/productos/`)
        console.log(res.data)
        setProducts(res.data)
    }
    
    const openModalModificar = (registro) => { 
        setModalModificar(true) ;
        setProducto(registro) ;
        setNombre(registro.nombre);
        setDescripcion(registro.descripcion);
        setImagen(registro.imagen);
        setPrecio(registro.precio);
        setCantidad(registro.cantidad);

    }
    const closeModalModificar = () =>{
        setModalModificar(false)
        setProducto({

        })
    }

    const openModalEliminar = (registro) => { 
        setModalEliminar(true) ;
        setProducto(registro);
    }

    const closeModalEliminar = () =>{
        setModalEliminar(false)
    }


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

    /*const modificarDatosProducto = () => {
        let p ={
        id:" ",
        nombre: nombre,
        descrip: descripcion,
        imagen: imagen,
        precio: precio,
        cantidad: cantidad
        }

        setProducto(p);
        let nuevos_productos = products;
        for(let i=0; i<products.length; i++)
        {
            if(products.nombre=== producto.nombre)
            {
                nuevos_productos[i]=producto;
            }
        }

        setProducts(nuevos_productos)

    };*/

    const modificarDatosProducto = async () => {
        const res = await axios.put(`http://localhost:5000/api/productos/edit/${producto.id_producto}`,
        { nombre:nombre, descripcion:descripcion, imagen:imagen, precio:precio, cantidad:cantidad});
        console.log(res.data);
        setProducto([]);
        closeModalModificar();
        obtenerDatos();
    }

    const eliminarProducto = async () => {
        const res = await axios.delete(`http://localhost:5000/api/productos/delete/${producto.id_producto}`)
        console.log(res.data);
        obtenerDatos();
        closeModalEliminar();
    }

    const envioDatos = (e) => {
        e.preventDefault();
    }

    return (

        <>
            <Container className='usuario' onSubmit={envioDatos}>

                <Row className='titulo-boton'>
                    {/* Titulo Gestión Inventario*/}
                    <Col sm={8}>
                        <h2 className='titulo-principal'>
                            <FontAwesomeIcon icon={faWarehouse} />&nbsp; Gestión Inventario
                        </h2>
                    </Col>
                    {/* Botón Nuevo Producto*/}
                    <Col sm={4}>
                        <div className=' d-flex justify-content-end'>
                            <Button color="success" href='/registarproducto' ><FontAwesomeIcon icon={faPlusCircle} />&nbsp; Nuevo Producto</Button>
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
                        <Row key={elemento.id_producto} className='table-body'>
                            <Col> <img className='imagen-inventario' src={elemento.imagen} alt='imagen-inventario'/> </Col>
                            <Col>{elemento.nombre} </Col>
                            <Col>{elemento.descripcion}</Col>
                            <Col>$ {elemento.precio}</Col>
                            <Col>{elemento.cantidad}</Col>
                            <Col>
                                <Button color="outline-primary" onClick={()=>openModalModificar(elemento)}> <FontAwesomeIcon icon={faPencilAlt} /> </Button>&nbsp;&nbsp;
                                <Button color="outline-danger" onClick={()=>openModalEliminar(elemento)}> <FontAwesomeIcon icon={faTrashAlt} /> </Button>
                            </Col>

                        </Row>
                    ))}
                </div>
            </Container>

            {/* Modal Modificar Producto*/}

            <Modal isOpen={modalModificar}
                >
                <ModalHeader>
                    <div><h3>Modificar datos producto</h3></div>
                </ModalHeader>
                <ModalBody>
                    <Form >
                        <Row>
                            <Col>
                                <img className='imagen-inventario-edit' src={imagen} alt='imagen-invnetario'/>
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
                                    <input className='form-control' name="imagen" type="text" value={imagen} onChange={onChangeImagen} />
                                    </Col>
                                    <Col>
                                        <Button color="secondary"><FontAwesomeIcon icon={faSave} /></Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>

                                    <label>Nombre</label>
                                    <input className='form-control' name="nombre" type="text" value={nombre} onChange={onChangeNombre} />

                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>

                                    <label>Descripción</label>
                                    <input className='form-control' name="descripcion" type="text" onChange={onChangeDescripcion} value={descripcion}/>

                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>

                                    <label>Precio</label>
                                    <input className='form-control' name="precio" type="text" onChange={onChangePrecio} value={precio} />

                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <label>Cantidad</label>
                                    <input className='form-control' name="cantidad" type="text" onChange={onChangeCantidad}  value={cantidad}/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={closeModalModificar}>Cancelar</Button>
                    <Button color="primary" onClick={()=>modificarDatosProducto()}>Guardar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalEliminar}>
                    <ModalHeader>
                        <div><h3>Eliminar Producto</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        ¿Está seguro de eliminar el producto?
                    </ModalBody>

                    <ModalFooter>
                        <Button color="danger" onClick={closeModalEliminar}>Cancelar</Button>
                        <Button color="primary" onClick={() => eliminarProducto()}>Aceptar</Button>
                        
                    </ModalFooter>
            </Modal>
                    

        </>

    );

}

export default TablaInventario;