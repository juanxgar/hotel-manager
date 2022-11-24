const { Sequelize } = require('sequelize');
const { database } = require('../config');
const UserModel = require('./models/User');
const HabitacionModel = require('./models/Habitacion');
const ReservaModel = require('./models/Reserva');
const ClienteModel = require('./models/Cliente');
const ProductoModel = require('./models/Producto');

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: "postgresql"
    }
);


const User = UserModel(sequelize, Sequelize);
const Habitacion = HabitacionModel(sequelize, Sequelize);
const Reserva = ReservaModel(sequelize, Sequelize);
const Cliente = ClienteModel(sequelize, Sequelize);
const Producto = ProductoModel(sequelize, Sequelize);

sequelize.sync({ force: false })
.then(() => {
    console.log('Tablas sincronizadas')
})


module.exports = {
    sequelize, User, Habitacion, Reserva, Cliente, Producto
}