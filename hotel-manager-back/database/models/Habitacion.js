const moment = require('moment');

module.exports = (sequelize, type) =>{
    return sequelize.define('habitacion', {
    id_habitacion: {
        type: type.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique:true, 
        autoIncrement: true
    },
    nombre: type.STRING,
    descripcion: type.STRING,
    capacidad: type.INTEGER,
    precio_persona: type.INTEGER,
    imagen: type.STRING,
    cantidad_camas: type.INTEGER,
    estado:{
        type: type.BOOLEAN,
        defaultValue: false
    }
    })
}