'use strict'

//Cargar modulos de Node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

//Ejecutar express(http)
var app = express();

//Cargar ficheros y rutas
var article_routes = require('./routes/article');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Anadir prefijos a rutas  / Cargar rutas
app.use( '/api',article_routes);

//Ruta o metodo de prueba para el API REST
/*
app.post('/datos-curso',function(req, res) {

    var hola  = req.body.hola;
    return res.status(200).send({
        curso: 'Master en Frameworks Js',
        autor: 'Victor Robles',
        url:'victorroblesweb.es',
        hola
    });
});
*/

//Exportar modulo (fichero actual)
module.exports = app;