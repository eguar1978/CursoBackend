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

(async() => {
    const product = {
        title: "Harina",
        price: 97.75,
        thumbnail: "http://cdn.shopify.com/s/files/1/0437/9967/5045/products/1E7C5FA3-B08D-4A86-B954-549A1A04BB86_1200x1200.jpg",
    };
    let productos = new Contenedor("products.json");


    console.log(await productos.getAll());
    //console.log(await productos.save(product));
    //console.log(await productos.getById(5));
    //console.log(await productos.deleteById(8));
    //console.log(await productos.deleteAll());
})();