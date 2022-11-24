import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function ReporteDestino() {
    const [donde_va, setDonde_va] = useState('');
    const [cantidad, setCantidad] = useState('');

    useEffect(()=>{
        const obtenerDato =async( )=>{
            const res=await axios.get('http://localhost:5000/api/clientes/paradondeva')
            console.log(res.data);
            const respuesta =res.data
            const auxCantidad= respuesta.map(elemento=>{
                return elemento.cantidad
            })
            const auxDonde_va =respuesta.map(elemento=>{
                return elemento.para_donde_va
            })
            setCantidad(auxCantidad);
            setDonde_va(auxDonde_va);
            console.log(auxCantidad, auxDonde_va)
        }

        obtenerDato();
    },[])
   
    const data ={
        labels: donde_va,
        datasets:[{
            backgroundColor:'rgba(0,255,0,1)',
            borderColor:'black',
            borderWidth:1,
            hoverBackgrandColor:'rgba(0,255,0,0.2)',
            hoverBorderColor:'#FFFF00',
            data:cantidad
        }]
    };
    const opciones={
        maintainAspectRatio:false,
        responsive: true
    }
    return(
        <div style={{width:'300px', height:'350px'}}>
            <h2>Cantidad de personas y hacia donde se dirigen:</h2>
            <Bar data={data} options={opciones}/>
        </div>
    )
}
