const mongoose = require('mongoose')

const URL = `mongodb+srv://Franky:Lacosaisnene123@cluster0.cc0lwjh.mongodb.net/Einstenia?retryWrites=true&w=majority`

mongoose.set("strictQuery", false);

module.exports = () =>{
    mongoose.connect(URL)
    .then(()=>console.log("Conexión exitosa con la base de datos."))
    .catch((error)=>console.error('Error en la base de datos.',error))
}
