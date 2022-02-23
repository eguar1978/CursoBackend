/*
let let1:string = "let1";
const num1:number = 1;
const bool: boolean = false
console.log(let1, num1, bool)
const arrAny: any[] = [1, 'string', true, {name: "CoderHouse"}]
const arrNum: number[] = [];
arrNum.push(1);
arrNum.push(2);
console.log(arrAny, arrNum);

type objType = {
    nombre: string,
    curso: string,
    duracion: number,
    arr: number[]
}

type obj2Type = {
    obj1: objType;
    arr: any[];
}

const obj: objType  = {
    nombre: "",
    curso: "",
    duracion: 0,
    arr: []
}
*/

const var1: string = 'String';
const var2: number = 1;
const var3: boolean = true;
const var4: number[] = [1,2,3]

type var5Type = {
    nombre: string,
    edad: number,
    email: string
}

const var5: var5Type = {
    nombre: "",
    edad: 0,
    email: ""
}

/** typescript en funciones */

type fun1Type = () => void;

const fun1:fun1Type = () => console.log('Hola Coder');
fun1()


type fun2Type = (num1:number, num2:number) => number;

const fun2:fun2Type = (num1:number, num2:number) => num1 * num2

console.log(fun2(5,3))