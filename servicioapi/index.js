//Requerir paquetes de express -Llamar sercicios
const express = require('express')
const conectionDB = require('./config/db')

//Inicializar metodos y servicios de express - Implementar servicios
const app = express()

conectionDB()

//
// app.get('/', (req, res) => {
//     res.send("holitas")
// })

app.use(express.json());

app.use('/api/curso', require('./routes/curso'))

app.listen(4000, () => {
    console.log("El servidor está funcionando.")
})