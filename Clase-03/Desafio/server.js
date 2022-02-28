const express = require('express')

const app = express();


const fs = require("fs").promises;

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName;
        this.objetos = [];
        this.maxId = 0;
    }

    async getAll() {
        try {
            const productos = JSON.parse(await fs.readFile(this.fileName, "utf-8"));
            this.objetos = productos;
            this.objetos.map((producto) => {
                if (producto.id && this.maxId < producto.id) {
                    this.maxId = producto.id
                }
            })
            return this.objetos;
        } catch (error) {
            console.log(error);
        }
    }

    async save(objeto) {
        try {
            this.objetos = await this.getAll();
            objeto.id = this.maxId + 1;
            this.objetos.push(objeto);
            await fs.writeFile(this.fileName, JSON.stringify(this.objetos));
            return "Objeto agregado OK";
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            this.objetos = await this.getAll();
            this.objetos = this.objetos.find((objetos) => objetos.id == id);
            if (this.objetos) {
                return this.objetos;
            } else {
                return "No existen registros para ese ID";
            }
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            this.objetos = await this.getAll();
            if (this.objetos.filter(o => o.id == id).length === 1) {
                this.objetos = this.objetos.filter(o => o.id != id);
                await fs.writeFile(this.fileName, JSON.stringify(this.objetos))
                return "Se elimino el objeto correctamente";
            } else {
                return "No existe objeto con ese ID";
            }
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAll() {
        await fs.writeFile(this.fileName, '');
        return 'Datos eliminados correctamente'
    }
}





//! TRABAJANDO CON RUTAS */

let contador = 0;
let productos = new Contenedor("products.json");

app.get('/', (req, res) => {

    res.send(`<h4>Ruta get <a href="https://sweet-exuberant-guilty.glitch.me/productos">"/productos"</a></h4>
              <hr>
              <h4>Ruta get <a href="https://sweet-exuberant-guilty.glitch.me/productoRandom">"/productoRandom"</a></h4><hr>
             `)

})

app.get('/productos', (req, res) => {

    (async() => {

        res.json(await productos.getAll())

    })();


})

app.get('/productoRandom', (req, res) => {


    (async() => {

        let array = await productos.getAll();
        let random = Math.floor(Math.random() * array.length);
        let resultRandom = array[random];
        res.json(resultRandom)

    })();

})

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`😃 Servidor escuchando en http://localhost:${PORT}`)
})

server.on('error', (error) => console.log(error))