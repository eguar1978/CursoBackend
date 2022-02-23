const fs = require("fs");

class Contenedor {

    constructor(fileName) {
        this.fileName = fileName;
        this.objetos = [];
    }
/*
  randomId() {
    let chars = "123456789";
    let string_length = 15;
    let randomId = "";
    for (let i = 0; i < string_length; i++) {
      let rnum = Math.floor(Math.random() * chars.length);
      randomId += chars.substring(rnum, rnum + 1);
    }
    return randomId;
  }
*/
  async getAll() {
    try {
      const productos = await fs.promises.readFile(this.fileName, "utf-8");
      console.log(JSON.parse(productos));
      return JSON.parse(productos);
    } catch (error) {
      console.log(error);
    }
  }
/*
  async save(objeto) {
    try {
      this.objetos = await this.getAll();
      this.objetos.push(objeto)
      return JSON.stringify(this.objetos);

    } catch (error) {
      console.log(error);
    }

}
*/
}

const product = {
  title: "Harina",
  price: 97.75,
  thumbnail:
    "http://cdn.shopify.com/s/files/1/0437/9967/5045/products/1E7C5FA3-B08D-4A86-B954-549A1A04BB86_1200x1200.jpg",
  id: 982319125158813
};

let productos = new Contenedor("products.json");
(async () => {
//console.log('1')
console.log(await productos.getAll());
})


//console.log(productos.save(product));
//console.log('2')

//console.log(productos.getAll());
//console.log('3')