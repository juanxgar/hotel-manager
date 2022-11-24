import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../styles/reportes/reportes.css';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


export default function ReporteOcupacion() {
  
    const [ocupacion, setOcupacion] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [colores, setColores] = useState('');

    useEffect(()=> {
    
        const obtenerDatos = async () => {
            const res = await axios.get('http://localhost:5000/api/reservas/ocupacion')
            console.log(res.data[0]['cantidad']);

            const ocupados=res.data[0]['cantidad']
            const desocupados=23-ocupados //23 es el total de habitaciones
            setCantidad([desocupados, ocupados])
            setOcupacion(['Desocupados', 'Ocupados'])
        }
        obtenerDatos();

        const generarCaracter = () => {
            var caracter = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            var numero = (Math.random()*15).toFixed(0);
            return caracter[numero];
        }
    
        const colorHEX = () => {
            var color='';
            for(var i=0; i<6; i++){
                color= color + generarCaracter();
                console.log(color)
            }
            return '#' + color;
        }
    
        const generarColores = () => {
            var colores=[];
            for(var i=0; i<2;i++){
                colores.push(colorHEX());
            }
            setColores(colores);
            console.log(colores)
        }
        generarColores();
    },[])

    

    const data={
        labels: ocupacion,
        datasets: [{
            label: 'Cantidad',
            backgroundColor: colores,
            borderColor:'black',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor: '#FFFF00',
            data: cantidad
        }]
    };

    const opciones={
        maintainAspectRatio: false,
        responsive: true
    }

  return (
    <div style={{width:'300px', height:'350px'}}>
        <h3 className='titulo-reportes'>Ocupación de habitaciones</h3>
        <Pie data={data} options={opciones} />
    </div>
  )
}
