const express = require('express')
const bobyParser = require('body-parser')
const dbinicial = require('./config/database')
const cors = require('cors')

const app = express()

const rutaUsuario = require('./aplicacion/rutas/usuario')
const bodyParser = require('body-parser')

app.use(
    bodyParser.json()
)
app.use(cors())

app.use(rutaUsuario)

const PORT = process.env.PORT || 7000
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto: ${PORT}`)
})

dbinicial()