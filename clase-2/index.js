//ES5 (2009)
//Se puede reasignar la variable y los valores
var x = [1, 2, 3, "Hola", {}, []]
var x = 10
var x = 15
var x = "Hola"
var z = x + y

//console.log(x)

//ES6 (2015) - ECMAScript 6
//Se puede reasignar el valor, pero no el nombre de la variable
let x = 10
//let x = 100
x = 100

//console.log(x)

//No se puede reasignar su valor ni el nombre
const y = 10
//const y = "Hola!"
//y = 100

//console.log(y)

//Paradigma funcional
//Scope
//Global, De bloque, De función
var a = 100

function example(){
   var b = 500
   console.log("Esta es la variable a: ", a) //100
   console.log("Esta es la variable b: ", b)
}

example()
//console.log(a) //100
//console.log(b)

//Condicionales

var foo = 16
var bar = 15

if(foo > bar){
    var z = "No tiene valor"
    console.log("No puede votar")
}else{
    console.log("Puede votar!")
}

//console.log(z)

let condition = 16
let value = 17

if(condition > value){
    console.log('value: ', value)
    console.log("No puede votar")
}else{
    console.log("Puede votar!")
}

//Operadores lógicos
const operation = condition > value ? "No no" : value

console.log('operation: ', operation)

//Hoisting
//var saludo = "Hola!"

//console.log(saludo)

//(function hello() {
//    return saludo
//})

//console.log(saludo)

//Funciones flecha

const a = 45000
const b = {a: [], b: 100, c: "hola"} //Objeto
const c = [1, 2, 3, 4] //Array
const d = "Hola"
const e = "Cómo estás?"
const role = "Admin"

//() => a + b
const arrowFunction1 = (value1, value2) => value1 + value2

const arrowFunction2 = _ => a + b

console.log(typeof arrowFunction2)
console.log(arrowFunction2())
console.log(arrowFunction2)

function function2 (value1, value2) {
    value1 + value2
}

arrowFunction2(a, b)
console.log('Log: ', function2(a, b))


//Ver el tipo de dato
console.log(typeof b)

//Template strings
console.log(d + e, role)
//` ` -> backtip
console.log(`${d}, ${e} Soy un: ${c}`)