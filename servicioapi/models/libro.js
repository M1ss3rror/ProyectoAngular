//configurar dependencia de tipo Mongoose 
const mongoose = require('mongoose');

//esquema que va a seguir el controller
const libroSchema = mongoose.Schema({
    isbn: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('libro', libroSchema);