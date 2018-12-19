var express = require('express'),
rutas = require('./ruta/route.js'),
bodyParser =  require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/user', rutas.all)

app.listen(3000);

console.log('Escuchando puerto 3000...');