const moment = require('moment');
const Habitacion = require('./Habitacion')

module.exports = (sequelize, type) =>{
    return sequelize.define('reserva', {
        id_reserva: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        fecha_reserva: {
            type: type.DATEONLY,
            get: function() {
                return moment.utc(this.getDataValue('fecha_reserva')).format('YYYY-MM-DD');
            }
        },
        fecha_ingreso: {
            type: type.DATEONLY,
            get: function() {
                return moment.utc(this.getDataValue('fecha_ingreso')).format('YYYY-MM-DD');
            }
        },
        fecha_salida: {
            type: type.DATEONLY,
            get: function() {
                return moment.utc(this.getDataValue('fecha_salida')).format('YYYY-MM-DD');
            }
        },
        num_adultos: type.INTEGER,
        num_kids: type.INTEGER,
        estado:{
            type: type.BOOLEAN,
            defaultValue: true
        },
        id_habitacion:{
            type: type.INTEGER,
            References:{
                model: Habitacion,
                key: 'id_habitacion'
            }
        }
    })
}