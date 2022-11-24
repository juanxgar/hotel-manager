import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/reportes/reportes.css';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function ReporteReservasPorMes() {
    const [mes, setMes] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [color, setColor] = useState('');

    useEffect(()=> {
        const obtenerDatos = async () => {
            const res = await axios.get('http://localhost:5000/api/reservas/reservaspormes')
            console.log(res.data);
            const respuesta = res.data

            const auxCantidad = respuesta.map(elemento => {
                    return elemento.cantidad                
            })
            const auxMes = respuesta.map(elemento => {
                return elemento.mes
            })
            const auxAnio = respuesta.map(elemento => {
                return elemento.anio
            })
            
            var auxCantidad2=[], auxMes2=[];
            for(var i=0; i<auxCantidad;i++){
                if(auxAnio[i]===2022){
                    auxCantidad2.push(auxCantidad[i]);
                    if(auxMes[i]===1){
                    auxMes2.push('Enero');
                    }else if(auxMes[i]===2){
                        auxMes2.push('Febrero');
                    }else if(auxMes[i]===3){
                        auxMes2.push('Marzo');
                    }else if(auxMes[i]===4){
                        auxMes2.push('Abril');
                    }else if(auxMes[i]===5){
                        auxMes2.push('Mayo');
                    }else if(auxMes[i]===6){
                        auxMes2.push('Junio');
                    }else if(auxMes[i]===7){
                        auxMes2.push('Julio');
                    }else if(auxMes[i]===8){
                        auxMes2.push('Agosto');
                    }else if(auxMes[i]===9){
                        auxMes2.push('Septiembre');
                    }else if(auxMes[i]===10){
                        auxMes2.push('Octubre');
                    }else if(auxMes[i]===11){
                        auxMes2.push('Noviembre');
                    }else if(auxMes[i]===12){
                        auxMes2.push('Diciembre');
                    }
                }
            }

            setCantidad(auxCantidad2);
            setMes(auxMes2);
            console.log(auxCantidad2, auxMes2, auxAnio)

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
        labels: mes,
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
        <h3 className='titulo-reportes'>Historico de reservas año actual</h3>
        <Line data={data} options={opciones} />
    </div>
  )
}
