//configurar dependencia de tipo Mongoose 
const mongoose = require('mongoose');

//esquema que va a seguir el controller
const cursoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    profesor: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('curso', cursoSchema);