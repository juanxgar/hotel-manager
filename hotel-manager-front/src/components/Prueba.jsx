import React, { useState } from 'react';
import {Modal, TextField, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


const useStyles=makeStyles((theme)=>({
    modal:{
        position:'absolute',
        width: 400,
        background: 'white',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        //padding: theme.spacing(2,4,3,4),
        padding: "16px 32px 24px",
        top: '50%',
        left: '50 %',
        transform: 'translate(-50%, -50%)',
    },
    textfield:{
        width: '100%'
    },
    button:{
        textAlign: 'center'
    }
}))



function Prueba(){
    const styles = useStyles();
    
    const [modal, setModal]=useState(false);

    const abrirCerrarModal =()=>{
        setModal(!modal);
    }

    const body=(
        <div className={styles.modal}>
          <div alig="center">
              <h2>Formulario</h2>
            </div> 
            <TextField label="Nombre" className={styles.textfield}/>
            <br />
            <TextField label="Apellidos" className={styles.textfield}/>
            <br />
            <TextField label="Email" className={styles.textfield}/>
            <br /> <br />
            <div alig ="right">
            <Button color="primary">Enviar</Button>
            <Button>onClick={()=>abrirCerrarModal()}Cancelar</Button>
            </div>
        </div>   
    )
     
    return(
       <div className ="Datos">
           <br />
            <Button className={styles.button}onClick={()=>abrirCerrarModal()}>Abrir Modal</Button>
            <Modal
            open={modal}
            onClose={abrirCerrarModal}>
                {body}
            </Modal>
             </div>
       
        
    );
}

export default Prueba;