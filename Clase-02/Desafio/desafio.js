const fs = require("fs").promises;

class Contenedor {
  constructor(fileName) {
    this.fileName = fileName;
    this.objetos = [];
  }

  randomId() {
    let chars = "123456789";
    let string_length = 15;
    let randomId = "";
    for (let i = 0; i < string_length; i++) {
      let rnum = Math.floor(Math.random() * chars.length);
      randomId += chars.substring(rnum, rnum + 1);
    }
    return parseInt(randomId);
  }

  async getAll() {
    try {
      const productos = await fs.readFile(this.fileName, "utf-8");
      //console.log(JSON.parse(productos));
      return JSON.parse(productos);
    } catch (error) {
      console.log(error);
    }
  }

  async save(objeto) {
    try {
      objeto.id = this.randomId();
      console.log(objeto);
      this.objetos = await this.getAll();
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
      if(this.objetos.filter( o => o.id == id).length === 1){
        this.objetos = this.objetos.filter( o => o.id != id);
        await fs.writeFile(this.fileName, JSON.stringify(this.objetos))
        return "Se elimino el objeto correctamente";
      }else{
        return "No existe objeto con ese ID";
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    try {
      await fs.writeFile(this.fileName, [])
      return "Array vaciado correctamente";
    } catch (error) {
      console.log(error);
    }
  }
}

(async () => {
  const product = {
    title: "Harina",
    price: 97.75,
    thumbnail:
      "http://cdn.shopify.com/s/files/1/0437/9967/5045/products/1E7C5FA3-B08D-4A86-B954-549A1A04BB86_1200x1200.jpg",
  };
  let productos = new Contenedor("products.json");
  /*
  console.log("Imprime el contenido del archivo");
  console.log(await productos.getAll());
  console.log("Imprime el contenido del archivo + el objeto que se le agrego");
  console.log(await productos.save(product));
  console.log("Buscar por ID");
  console.log(await productos.getById(497497172573343));
  console.log("Imprime el contenido del archivo");
  console.log(await productos.getAll());
  */
  console.log("Iniciando borrado por ID");
  console.log(await productos.deleteById(837459626135178));
  console.log("Borrar todos los objetos del array");
  console.log(await productos.deleteAll());
  //console.log("Imprime el contenido del archivo");
  //console.log(await productos.getAll());
})();

//console.log(productos.save(product));
//console.log('2')

//console.log(productos.getAll());
//console.log('3')
