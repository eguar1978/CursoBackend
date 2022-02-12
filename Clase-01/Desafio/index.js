
class Usuario {

    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        return this.nombre + " " + this.apellido;
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

let usuario1 = new Usuario('Andres', 'Damonte');
usuario1.addMascota('Catalina')
usuario1.addBook('Condorito','Autor de Condorito');
usuario1.addBook('El Chavo','Autor del Chavo');
console.log(usuario1.getBookNames());

//console.log(usuario1);