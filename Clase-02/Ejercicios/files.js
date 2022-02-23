const fs = require('fs');

/* Trabajando con archivos Files */

/** ESCRIBIR ARCHIVO */

const objeto = {
    nombre: "Coderhouse",
    curso: 28855,
}

const array = [1, 'andres', true, false, 4, 'hola']

fs.writeFileSync('archivo.txt', 'Esto es data\n');
fs.writeFileSync('archivo.txt', JSON.stringify(objeto))
fs.writeFileSync('archivo.txt', JSON.stringify(array))

/**  LEER ARCHIVO */

//const data = fs.readFileSync('archivo.txt', 'utf-8');
//console.log('Leer archivo sync: ', JSON.parse(data))
//console.log('Leer archivo sync: ', data)


/** EDITAR ARCHIVO */

fs.appendFileSync('archivo.txt', '\nData agregada\n')
fs.appendFileSync('archivo.txt', JSON.stringify(objeto))
fs.appendFileSync('archivo.txt', '\nData agregada\n')
fs.appendFileSync('archivo.txt', JSON.stringify(array))
const data = fs.readFileSync('archivo.txt', 'utf-8');
console.log('Leer archivo sync: ', data)


/** CODIGO ASINCRONO */

fs.writeFile('archivo2.txt', 'Asincronico con callback', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('archivo creado')
    }
})



fs.appendFile('archivo2.txt', '\n MAS DATOS 1', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('archivo modificado 1')
    }
})

fs.appendFile('archivo2.txt', '\n MAS DATOS 2', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('archivo modificado 2')
    }
})

fs.readFile('archivo2.txt', 'utf-8', (err, data2) => {
    if(err){
        console.log(err)
    }else{
        console.log('Leer archivo sync: ', data2)
    }
});


/** BORRAR ARCHIVO */

fs.unlink('archivo2.txt', (error) => {
    if(error){
        console.log(error)
    }else{
        console.log('archivo borrado')
    }
})

fs.mkdir('carpetaCreadaFS', (error) => {
    if(error){
        console.log(error)
    }else{
        console.log('carpeta creada')
    }
})

fs.writeFile('./carpetaCreadaFS/archivo3.txt', 'Asincronico con callback', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('archivo creado')
    }
})

fs.writeFile('./carpetaCreadaFS/archivo4.txt', 'Asincronico con callback', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('archivo creado')
    }
})

fs.readdir('./carpetaCreadaFS', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('archivo creado')
    }
})