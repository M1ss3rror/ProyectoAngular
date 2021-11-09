//Requerir paquetes de express -Llamar sercicios
const express = require('express')
const conectionDB = require('./config/db')
const cors = require('cors')

//Inicializar metodos y servicios de express - Implementar servicios
const app = express()

conectionDB()
app.use(cors());

app.use(express.json());

app.use('/api/curso', require('./routes/curso'))
app.use('/api/libro', require('./routes/libro'))

app.listen(4000, () => {
    console.log("El servidor está funcionando.")
})