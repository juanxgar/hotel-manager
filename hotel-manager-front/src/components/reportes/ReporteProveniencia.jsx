import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../styles/reportes/reportes.css';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function ReporteProveniencia() {

    const [donde_viene, setDonde_viene] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [color, setColor] = useState('');

    useEffect(()=> {
        const obtenerDatos = async () => {
            const res = await axios.get('http://localhost:5000/api/clientes/dondeviene')
            console.log(res.data);
            const respuesta = res.data

            const auxCantidad = respuesta.map(elemento => {
                return elemento.cantidad
            })
            const auxDonde_viene = respuesta.map(elemento => {
                return elemento.donde_viene
            })
            setCantidad(auxCantidad);
            setDonde_viene(auxDonde_viene);
            console.log(auxCantidad, auxDonde_viene)
            const tam_datos=auxCantidad.length
            console.log(tam_datos)

            colorHEX();
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
            }
            setColor('#' + color);
        }
    
    },[])

    

    const data={
        labels: donde_viene,
        datasets: [{
            label: 'Cantidad',
            backgroundColor: color,
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
        <h3 className='titulo-reportes'>Ciudades de proveniencia de clientes</h3>
        <Bar data={data} options={opciones} />
    </div>
  )
}
