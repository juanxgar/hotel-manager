import React, { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faKey} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../../styles/componentes-generales/card.css';
import '../../styles/login/login.css';
import Cookies from "universal-cookie/es6";
import Alerta from './Alerta';
import recurso7 from '../../assets/images-menu/Recurso 7.png';


export default function Login() {

    //Se definen los estados de los atributos que se van a usar para obtener las consultas a la BD
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const cookies = new Cookies();
    const cookies2 = new Cookies();
    
    
    //La idea de usar este error message es que se pueda mostrar solo por 5 segundos, solo que no se como implementarlo en notificaciones
    const [errorMessage, setErrorMessage] = useState(false);

    //Para mantener la sesion iniciada
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON);
            setUser(user);
        }
        const cookies = new Cookies();
        if(cookies.get('token')){
            window.location.assign('./menuprincipal')
        }
    }, []);

    //Se realiza la consulta a la BD para el inicio de sesión
    const consultarBase = async () => {
        const res =  await axios.post(`http://localhost:5000/api/users/login`, { email, password} );
        
        setUser(res);
        console.log(res.data);

        //Si success es undefined quiere decir que no se validaron las credenciales
        if(res.data.success===undefined){
            setUser(null);
            setErrorMessage(true);
            
        }else{
            setErrorMessage(false);
            console.log(res.data.success);
            console.log(res.data.id_usuario);
            setUser(res.data.email);            
            cookies.set('token', res.data.success, {path:'/'})
            cookies2.set('email', res.data.email , { path: '/' });
            window.location.assign("./menuprincipal")

            
        }

        //Mantener la sesion iniciada
        window.localStorage.setItem(
            'loggedUser', JSON.stringify(user)
        )
    }

    //Guarda los estados de email
    const onChangeEmail = (e) => {
        setEmail(e.currentTarget.value);
        console.log(email);
    };

    //Guarda los estados de passsword
    const onChangePassword = (e) => {
        setPassword(e.currentTarget.value);
        console.log(password);
    };

    //Funcion que hace el llamado a la funcion que hace la consulta a la BD
    const ingresar = () => {
        console.log('Click');
        consultarBase();
    }

    //On submit para permitir que los datos no se envien automaticamente sino cuando se usen los elementos
    const enviarDatos = (e) => {
        e.preventDefault();
        consultarBase();
    }

  //Cargar un componente condicionalmente (Alert)
  let componente;
  if(errorMessage){
      //Mostrar el componente
      componente = <Alerta/>
  }else{
      componente=null;
  }

  return(
      <div className="login-contenedor">
            <Container className="login">
                <Row sm={"auto"}>
                    <Col sm={7} ><img src={recurso7} alt='Foto'/></Col>
                    <Col sm={5}  className="formulario_inicio_sesion">
                        { componente }
                        <Card className="card_login card text-center bg-dark animate__animated animate__fadeInUp">
                            <div className="overflow">
                            <Card.Body>
                                <Form onSubmit={enviarDatos}>
                                    <Form.Group className="mb-3 campo_texto" controlId="formBasicEmail" >
                                        <Form.Label>
                                            <FontAwesomeIcon icon={faUser}/>
                                            &nbsp; &nbsp; Dirección de correo electrónico
                                        </Form.Label>
                                        <Form.Control name="email" type="email" placeholder="Correo electrónico" onChange={onChangeEmail}/>
                                        <Form.Text className="text-muted">
                                        Nunca compartiremos su información con nadie.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3 campo_texto" controlId="formBasicPassword" >
                                        <Form.Label>
                                            <FontAwesomeIcon icon={faKey}/>
                                            &nbsp; &nbsp;Contraseña
                                        </Form.Label>
                                        <Form.Control name="password" type="password" placeholder="Contraseña" onChange={onChangePassword}/>
                                    </Form.Group>
                                    <div className='login-boton'>
                                    <Button  variant="primary" type="submit" onClick={()=>ingresar()}>
                                        Iniciar sesión
                                    </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
      </div>
  );
}
