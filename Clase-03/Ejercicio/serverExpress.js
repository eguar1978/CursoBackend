const express = require('express')

const app = express();

//! TRABAJANDO CON RUTAS */

let contador = 0;

app.get('/', (req, res) => {
    res.send('<h1>Mi primer sitio con express</h1>')
})

app.get('/contador', (req, res) => {
    contador++
    res.send(`Cantidad de visitas ${contador}`)
})

app.get('/fyh', (req, res) => {
    res.send(new Date().toLocaleString())
})


const PORT = 8081;

const server = app.listen(PORT, () => {
    console.log(`😃 Servidor escuchando en http://localhost:${PORT}`)
})

server.on('error', (error) => console.log(error))