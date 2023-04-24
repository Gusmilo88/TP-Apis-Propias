const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
require("dotenv").config()


// view engine setup
app
    .set('views', path.resolve(__dirname, './views'))
    .set('view engine', 'ejs')

app
    .use(express.static(path.resolve(__dirname, '../public')))
    .use(express.urlencoded({ extended: false }))
    .use(methodOverride('_method'))


    // routes

const {actorsRouter, genresRouter, moviesRouter} = require("./v1/routes")

app 
    .use("/api/v1/actors", actorsRouter)
    .use("/api/v1/genres", genresRouter)
    .use("/api/v1/movies", moviesRouter)




//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
