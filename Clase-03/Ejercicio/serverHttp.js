const http = require('http')

const server = http.createServer((req, res) => {
    res.end('<h1>Desafio 3 curso Backend</h1>')
})

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`😃 Servidor escuchando en http://localhost:${PORT}`)
})