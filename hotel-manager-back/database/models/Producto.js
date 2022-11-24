module.exports = (sequelize, type) => {
    return sequelize.define('producto', {
        id_producto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        descripcion: type.STRING,
        imagen: type.STRING,
        precio: type.FLOAT,
        cantidad: type.INTEGER
    })
}