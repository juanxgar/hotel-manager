const router = require('express').Router();
const { Producto, sequelize } = require('../../database/db');
const { Sequelize } = require('sequelize')
const { response } = require('express');

//Registrar
router.post('/register', async (req, res) => {
    const producto = await Producto.create(req.body);
    res.json(producto);
});

//Ver todos los registros activos
router.get('/', async (req, res) => {
    const productos = await Producto.findAll();
    res.json(productos)
});

//Modificar datos producto
router.put('/edit/:id_producto', async (req, res) => {
    await Producto.update(req.body, {
        where: { id_producto: req.params.id_producto }
    });
    res.json({success: 'Se modificó'});
});

//Eliminar producto
router.delete('/delete/:id_producto', async (req, res) => {
    await Producto.destroy({
        where: { id_producto: req.params.id_producto }
    });
    res.json( {success: 'Se eliminó'} )
})

module.exports = router;