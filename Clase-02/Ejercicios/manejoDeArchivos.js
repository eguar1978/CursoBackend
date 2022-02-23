/* return implicito */

const getPersona = () => ({nombre: 'Eduardo'})
console.log(getPersona())

/* callbacks */

const ejecutar = (unaFuncion) => unaFuncion()

const saludar = () => console.log('Hola CoderHouse')

ejecutar(saludar)

ejecutar(() => console.log('Otro CallBack'))

const ejecutar1 = (funcion, parametro) => funcion(parametro)
const saludar1 = (parametro) => console.log(`Hola ${parametro}`)

ejecutar1(saludar1,'CoderHouse')

/* ejemplo */


const operacion = (a, b, funcion) => funcion(a, b)

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b ) => a * b 
const division = (a, b ) => a / b 

console.log(operacion(65, 9, suma))
console.log(operacion(65, 9, resta))
console.log(operacion(65, 9, multiplicacion))
console.log(operacion(65, 9, division))

function dividir(a, b){
    return new Promise((resolve, reject) => {
        if(b === 0){
            reject('No se puede dividir por cero')
        }else{
            resolve (a / b)
        }
    })
}

console.log(operacion(4442, 4, dividir))




dividir(15,0)
.then((resultado) => {
    console.log(`Division 1 ${resultado}`)
})
.catch((error) => {
    console.log(`Division 1 ${error}`)
})

dividir(15,3)
.then((resultado) => {
    console.log(`Division 2 ${resultado}`)
})
.then((resultado) => {
    console.log(`Division 2 Then Agregado ${resultado}`)
})
.catch((error) => {
    console.log(`Division 2 ${error}`)
})

dividir(55,4)
.then((resultado) => {
    console.log(`Division 3 ${resultado}`)
})
.catch((error) => {
    console.log(`Division 3 ${error}`)
})

dividir(13,3)
.then((resultado) => {
    console.log(`Division 4 ${resultado}`)
})
.catch((error) => {
    console.log(`Division 4 ${error}`)
})

Promise.resolve(31)
.then( x => x + 1 )
.then( x => x * 2 )
.then( x => {
    if(x == 22) throw 'Error'
    else return 80
})
.then( x => 30 )
.then( x => x / 2 )
.then( console.log )
.catch( console.log )

/* programacion sincronica */

function funA() {
    console.log(1)
    funB()
    console.log(2)
  }
  
  function funB() {
    console.log(3)
    funC()
    console.log(4)
  }
  
  function funC() {
    console.log(5)
  }
  
  funA()