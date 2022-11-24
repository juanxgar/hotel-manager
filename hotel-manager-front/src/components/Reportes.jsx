import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import '../styles/Reserva.css';
import axios from 'axios';
import Cookies from 'universal-cookie/es6';
import{BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";
import {Bar} from 'react-chartjs-2'


useEffect(()=>{
    const obtenerDato =async( )=>{
        const res=await axios.get('http://localhost:500/api/cliente/reportes')
        console.log(res.data);
        const respuesta =res.data
        const auzCantidad= respuesta.map(elemento=>{
            return elemeto.cantidad
        })
        const auxDondee_viene =respuesta.map(elemento=>{
            return MediaElementAudioSourceNode.donde_viene
        })
        setCantidad(auxCantidod);
        setDonde_viene(auxDondee_viene);
        console.log(auxCantidad, auxDondee_viene)
    }

    obtenerDato();
},[])


const Reportes = () => {
    const consultarHabitacion = async () => {
        const res = await axios.get(`http://localhost:5000/api/habitaciones/habitacion`, { id_habitacion:1} );
    }
    //['EStados unidos', 'mexico', 'colombia', 'talia',' España']
    const data ={
        labels:['EStados unidos', 'mexico', 'colombia', 'talia',' España'],
        datasets:[{
            backgroundColor:'rgba(0,255,0,1)',
            borderColor:'black',
            borderWidth:1,
            hoverBackgrandColor:'rgba(0,255,0,0.2)',
            hoverBorderColor:'#FF0000',
            data:[327.16, 126.19,60.43,49.64,46.73]
        }]
    };
    const opciones={
        maintainAspectRatio:false,
        responsive: true
    }
    return(
        <div className="Reportes" style={{width:'100%', heigth:'500px'}}>
            <h2>poblacion en millones de habitantes</h2>
            <Bar data={data} options={opciones}/>
        </div>
    )
}
export default Reportes;
