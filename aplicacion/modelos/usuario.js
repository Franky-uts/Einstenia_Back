const mongoose = require('mongoose')

const UserEschema = new mongoose.Schema(
    {
        Nombre:{
            type: String,
            required: true
        },
        Apellidos:{
            type: String,
            default: ''
        },
        Grado:{
            type: String,
            required: true
        },
        Telefono:{
            type: Number,
            default: 'N/A'
        },
        Direccion:{
            type: String,
            required: true
        },
        Fechadenacimiento:{
            type: Date,
            required: true
        },
        FechaDeInscripcion:{
            type: Date,
            required: true
        }
    },
    {
        versionKey:false,
        timestamps:true
    }
)

module.exports = mongoose.model('Usuarios',UserEschema)