import React, {useState, useEffect} from 'react'
import CardHabitacionesDisponibles from '../hacer-reserva/CardHabitacionesDisponibles';
import Cookies from 'universal-cookie/es6';

//Importación imagenes
import hab1 from '../../../assets/images-habitaciones/1.jpeg';
import hab2 from '../../../assets/images-habitaciones/2.jpeg';
import hab3 from '../../../assets/images-habitaciones/3.jpeg';

export default function CardsHabitacionesDisponiblesModificar() {
    const idHabitacion = new Cookies();
    const [habitaciones, setHabitaciones] = useState([]);

    useEffect(()=> {
      const datosHabitaciones = new Cookies();
      setHabitaciones(datosHabitaciones.get('datosHabitaciones'));
      console.log(datosHabitaciones.get('datosHabitaciones'));
    },[]);

    const validarImagen = (imagen) => {
        if(imagen==='hab1'){
          return hab1;
        }else if(imagen==='hab2'){
          return hab2;
        }else{
          return hab3;
        }
      };

    const seleccionarHab = (id) => {
        idHabitacion.set('idHabitacion', id , { path: '/' });
        console.log(idHabitacion.get('idHabitacion'));
    }

    const enviarDatos = (e) => {
      e.preventDefault();
  }
    
  return (
    <div>
        {habitaciones.map(({id_habitacion, nombre, imagen, capacidad, cantidad_camas}) => (
            <div key={id_habitacion} onSubmit={enviarDatos}>
            <CardHabitacionesDisponibles nombre={nombre} imagen={validarImagen(imagen)}  capacidad={capacidad} cantidad_camas={cantidad_camas} precio_persona={30000} funcion={()=>seleccionarHab(id_habitacion)} link={'/cargandomodificar'}/>
            </div>
        ))}
    </div>
  )
}
