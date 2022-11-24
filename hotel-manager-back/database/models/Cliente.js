const Reserva = require('./Reserva')

module.exports = (sequelize, type) => {
    return sequelize.define('cliente', {
        id_cliente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_reserva:{
            type: type.INTEGER,
            References:{
                model: Reserva,
                key: 'id_reserva'
            }
        },
        nombre: type.STRING,
        apellido: type.STRING,
        email:{
            type:type.STRING,
        },
        tipo_doc:type.STRING,
        num_documento:{
            type: type.STRING,
        },
        telefono: type.STRING,
        estado_civil: type.STRING,
        donde_viene: type.STRING,
        para_donde_va: type.STRING,
        vehiculo: {
            type: type.BOOLEAN,
            defaultValue: false
        },
        nacionalidad: type.STRING,
        profesion: type.STRING
        
    })
}