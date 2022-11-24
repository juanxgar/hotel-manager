const router = require('express').Router();
const bcrypt = require('bcryptjs'); //Encriptacion de la contraseña
const { User } = require('../../database/db');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

const { response } = require('express');

//Consultar usuarios
router.get('/', async (req, res) => {
    const users = await User.findAll({
        where: {estado: true}
    });
    res.json(users)
});

//Consultar usuario especifico
router.get('/:email', async (req, res) => {
    const _email = req.params.email
    const user = await User.findOne({
        where: { email:  _email} });
    
    res.json(user);
});

//Registrar usuarios
router.post('/register', [
    //Con check se hacen esas validaciones necesarios en los campos
    check('email', 'El correo electrónico debe estar correcto').isEmail(),
    check('tipo_documento','El tipo de documento es obligatorio').not().isEmpty(),
    check('num_documento', 'El número de documento es obligatorio').not().isEmpty()
], async (req, res) => {

    //Para captar los errores
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        //Muestra los errores que tuvo
        return res.status(422).json( { errores: errors.array() })
    }
    //El 10 corresponde al nivel de encriptación de la contraseña
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
});

//Editar usuarios
router.put('/edit/:userId', async (req, res) => {
    await User.update(req.body, {
        where: { id_usuario: req.params.userId }

    });
    res.json({success: 'Se modificó'});
});

//Editar contraseña
router.put('/edit/password/:userId', async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    await User.update(req.body, {
        where: { id_usuario: req.params.userId }

    });
    res.json({success: 'Se modificó la contraseña'});
});


//Desactivar usuario
router.put('/eliminar/:userId', async (req, res) => {
    
    await User.update(req.body, {
        where: { id_usuario: req.params.userId}
    })
})


//Hacer el logueo
router.post('/login', async (req, res) => {
    
    const user = await User.findOne( { where: { email: req.body.email }});
    if(user){
        //Comparar si la contraseña es correcta
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if (iguales){
            
            res.json({ success: createToken(user) , email: req.body.email});
        }else{
            res.json({ error: 'Error en usuario y/o contraseña'})
        }
    }else{
        res.json({ error: 'Error en usuario y/o contraseña'})
    }

    const userForToken = {
        id: user.id_usuario,
        email: user.email
    }

    //const token = jwt.sign(userForToken, '123')

    //response.send({
      //  email: user.email,
        //token
    //})
})





//TOKEN para encriptar informacioón del usuario
//Se requiere instalar JWT: jwt-simple y moment para el manejo de las fechas
const createToken = (user) => {
    const payload = {
        usuarioId: user.userId,
        //Lo de unix nos retorna la cantidad de segundos que hay desde 1970
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }

    return jwt.encode(payload, 'frase');
}


module.exports = router;