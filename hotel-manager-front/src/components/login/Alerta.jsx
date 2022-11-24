import React from 'react';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faExclamation} from '@fortawesome/free-solid-svg-icons';

export default function Alerta() {
  return(
    <div>
        <Alert  variant='primary'>
        <FontAwesomeIcon icon={faExclamation}/>    
            &nbsp; &nbsp; Correo electrónico y/o contraseña incorrectos
        </Alert>
    </div>
    );
}
