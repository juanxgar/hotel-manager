const router = require ('express').Router();

const middleware = require('./middlewares');
const apiUsersRouter = require('./api/user');
const apiHabitacionesRouter = require('./api/habitacion');
const apiReservasRouter = require('./api/reserva');
const apiClientesRouter = require('./api/cliente');
const apiProductosRouter = require('./api/producto');


router.use('/users', apiUsersRouter);
router.use('/habitaciones', apiHabitacionesRouter);
router.use('/reservas', apiReservasRouter);
router.use('/clientes', apiClientesRouter);
router.use('/productos', apiProductosRouter);



module.exports = router;