const router = require('express').Router();
const { Cliente, sequelize } = require('../../database/db');
const { Sequelize } = require('sequelize')
const Op = Sequelize.Op

const { response } = require('express');

//Registrar
router.post('/register', async (req, res) => {
    const cliente = await Cliente.create(req.body);
    res.json(cliente);
});

//Ver todos los registros activos
router.get('/', async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes)
});

//Ver todos los registros
router.get('/todos', async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes)
});

//Clientes que tienen reservas activas
router.get('/activos', async (req, res) => {
    const clientes_activos = await Cliente.findAll({
        where:{
            id_reserva:{
                [Op.in]: sequelize.literal(`(SELECT id_reserva FROM reservas WHERE estado=true)`)
            }
        }   
    });
    res.json(clientes_activos);
});

//Cliente especifico
router.get('/especifico/:id_cliente', async (req, res) => {
    const cliente = await Cliente.findAll({
        where:{ id_cliente:req.params.id_cliente}
    });
    res.json(cliente)
})

//Modificar datos cliente
router.put('/edit/:id_cliente', async (req, res) => {
    await Cliente.update(req.body, {
        where: { id_cliente: req.params.id_cliente }
    });
    res.json({success: 'Se modificó'});
});

//Desactivar cliente
router.put('/desactivar/:id_cliente', async (req, res) => {
    await Cliente.update(req.body, {
        where: { id_cliente: req.params.id_cliente}
    });
    res.json({success: 'Se eliminó'});
});

//Consulta reporte donde_viene
router.get('/dondeviene', async (req, res) => {
    const datos = await Cliente.findAll({
        attributes:[
            'donde_viene',
            [Sequelize.fn("COUNT", Sequelize.col("id_cliente")), "cantidad"]
    ],
        group: 'donde_viene'
    })
    res.json(datos)
})


router.get('/paradondeva', async (req, res) => {
    const datos = await Cliente.findAll({
        attributes:[
            'para_donde_va', 
            [ Sequelize.fn("COUNT", Sequelize.col("id_cliente")), "cantidad"]
            
        ],
            group:'para_donde_va'  
    });
    res.json(datos)
});
module.exports = router;