// Ejemplos de tipos de datos
// *****
// Tipo de dato string
var name  = "Juanma";
console.log( name );
// Tipo de dato número
var number = 1000;
console.log( number );
// Tipo de dato objeto
var person = {
    name: 'Juanma',
    surnames: 'Molins cortés',
    age: 35,
    direction: {
        city: 'Madrid',
        country: 'Spain'
    } 
}
console.log( person.direction.city );
console.log( typeof person );
// Tipo de dato boolean (true o false)
var flag = true;
console.log( flag );
console.log( typeof flag );
// Tipo de dato function (función)
function myFunction() {}
console.log( myFunction );
console.log( typeof myFunction );
// Tipo de dato symbol
var symbol = Symbol("mi simbolo");
console.log( symbol );
console.log( typeof symbol );
// Tipo de dato class (clase)
class people {
    constructor( name, surname ) {
        this.name = name;
        this.surname = surname;
    }
}
console.log( people );
console.log( typeof people );
// Tipo de dato undefined
var x;
console.log( x );
console.log( typeof x );
var x = undefined;
console.log( x );
console.log( typeof x );
// Tipo de dato null -> ausencia de valor
var y = null;
console.log( y );
console.log( typeof y );
// Tipo de dato array (object)
var autos = ['BMW', 'Mercedez-Benz', 'Audi', 'Volvo'];
console.log( autos );
console.log( typeof autos );
// Tipo de dato empty string
var z = '';
console.log( z );
console.log( typeof z );
// Concanetación de cadenas
var nameConcat = "Juanma";
var surnamesConcat = "Molins Cortés";
var nameComplete = nameConcat + ' ' + surnamesConcat;
console.log( nameComplete );
console.log( typeof nameComplete );
var nameAddNum = 'Juanma' + ' ' +  2 + 4;
console.log( nameAddNum );
var nameAddNumParenthesis = 'Juanma' + ' ' + ( 2 + 4 );
console.log( nameAddNumParenthesis );
// JavaScript lee de izquierda a derecha
var numAddName = 2 + 6 + ' ' + 'Juanma';
console.log( numAddName );
// let y const
let nameLet = "Juanma";
console.log( nameLet );
nameLet = "Juampa";
console.log( nameLet );
// Las constantes no se pueden cambiar de valor
const nameConst = "Juanma";
console.log( nameConst );
// nameConst = "Juampa";
// Buenas practicas al escribir nombres de variables con camelCase
let xPractice, yPractice;
xPractice = 10;
yPractice = 20;
let zPractice = xPractice + yPractice;
console.log( zPractice );
console.log( typeof zPractice );
// Las Mayúsculas influyen en los nombres de variables
let completeName = "Juan María Molins Cortés";
let completename = "Juanma Molins Cortés";
console.log( completeName );
console.log( completename );
// Como debe empezar el nombre de una variable
let a1NombreCompleto;
let _nombreCompleto;
let $nombreCompleto;
// Como no debe empezar el nombre de una variable
// let 1nombreCompleto;
// let break = 20; no se pueden utilizar palabras reservadas del lenguaje para dar nombre a variables
// Esta es una palabra reservada pero al poner el número 2 o _ js nos deja declarar el nombre de la variable con una palabra reservada
let break2; 
let _break;
// Tipo de operadores
