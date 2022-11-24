const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./database/db');
const User = require('./database/models/User');
const ApiRouter = require('./routes/api');
var cors = require('cors');

//Cors
app.use(cors());

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Se agregan las rutas
app.use('/api', ApiRouter);

//settings
const PORT = process.env.PORT || 5000;

require('./database/db');

//Arranque de servidor
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);

  //Conectarse a la base de datos Sequelize
  /*sequelize.authenticate().then(() => {
      console.log(`Conected to database on port ${PORT}`)
  }).catch(error => {
      console.log('Error', error);
  })*/
});