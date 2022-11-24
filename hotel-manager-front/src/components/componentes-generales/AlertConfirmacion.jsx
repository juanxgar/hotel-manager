import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import '../../styles/componentes-generales/alertConfirmacion.css';

export default function AlertConfirmacion({tipo}) {

    const [show, setShow] = useState(true);

    const tipos ={
        editar:'Se hicieron los cambios correctamente',
        eliminar: 'Se eliminó correctamente'
    }
    
    const validacionMensaje = () => {
      if(tipos[tipo]===undefined){
          console.log('Error');
      }else{
          return tipos[tipo];
      }   
    }

    const validacionVariante = () => {
      if(tipos[tipo]==='Se hicieron los cambios correctamente'){
        return 'success'
      }else{
        return 'danger'
      }
    }

    

    const mensaje = validacionMensaje();
    const variante = validacionVariante();

    if (show) {
        return (
          <Alert className='alerta' variant={variante} onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Cambios realizados</Alert.Heading>
            <p>{mensaje}</p>
          </Alert>
        );
      }

  return (
    <></>
  );
}
