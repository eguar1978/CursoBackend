
class Usuario {

    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        this.libros.push({ nombre: nombre, autor: autor });
    }

    getBookNames(){
        let nombreLibro = [];
        this.libros.forEach(libro => {
            nombreLibro.push(libro.nombre);
        });
        return nombreLibro;
    }
}

let usuario1 = new Usuario('Pedro', 'Picapiedra');
usuario1.addMascota('Catalina');
usuario1.addMascota('Lola');
usuario1.addMascota('Pancho');
usuario1.addBook('Condorito','Pepo');
usuario1.addBook('Patoruzú','Dante Quinterno');
console.log(usuario1.getFullName());
console.log(usuario1.getBookNames());
console.log(usuario1.countMascotas());

console.log('Andres Damonte, comisión 28855');