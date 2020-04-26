const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//inicializaciones
const app = express();

//configuraciones
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({ extended: false })
);

//variables globales

//rutas
app.use(require('./routes'));

const Users = require('./routes/Users');
app.use('/users', Users);

const Productos = require('./routes/Productos');
app.use('/productos', Productos);

//publicos

//inciar el servidor
app.listen(app.get('port'), () => {
    console.log('Server inicializado en el puerto:', app.get('port'));
});