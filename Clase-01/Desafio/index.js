
class Usuario {

    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
        this.books = [];
        this.pets = [];
    }

    getFullName(){
        return `${this.name} ${this.lastname}`;
    }

    addPet(namePet){
        this.pets.push(namePet);
    }

    countPet(){
        return this.pets.length;
    }

    addBook(name, author){
        this.books.push({ name: name, author: author });
    }

    getBookNames(){
        const name = this.books.map(n => n.name); 
        return name;
    }
}

let user1 = new Usuario('Pedro', 'Picapiedra');
user1.addPet('Catalina');
user1.addPet('Lola');
user1.addPet('Pancho');
user1.addBook('Condorito','Pepo');
user1.addBook('Patoruzú','Dante Quinterno');
console.log(user1.getFullName());
console.log(user1.getBookNames());
console.log(user1.countPet());

console.log('Andres Damonte, comisión 28855');