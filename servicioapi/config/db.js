const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' });

const conectionDB = async() => {
    try {
        //Configurar conexion
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Base de Datos Conectada');
    } catch (error) {
        console.log(error);
        //Detener app
        process.exit(1);
    }
}

//Exportar la función para la conección
module.exports = conectionDB;