import express from 'express'
//const express = require('express')
import productsRoutes from './routes/products.routes.js'

const PORT = 8080
const app = express()
app.use(express.json()) //req.body
app.use(express.urlencoded({extended: true})) //req.params
//app.use(express.static('public')) //opcional si tenemos una carpeta "public" con index.html

//API: interfaz de programacion de aplicaciones
//conjunto de reglas para establecer la comunicación entre aplicaciones/dispositivos
//APIREST
//El diseño REST tiene los siguientes beneficios:
//Interfaz uniforme, arquitectura en capas, stateless (no tiene estado), desacoplamiento cliente-servidor

//Le indicamos a Express que vamos a utilizar ese módulo de rutas
app.use("/", productsRoutes);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
app.on("Error", (error)=> console.log(`Server error: ${error}`))