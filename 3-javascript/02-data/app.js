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
// ***** Tipo de operadores *****
let aOperators = 3, bOperators = 2;
let zOperators = aOperators + bOperators;
console.log( `El resultado de la suma es: ${ zOperators }` );
zOperators = aOperators - bOperators;
console.log( `El resultado de la resta es: ${ zOperators }` );
zOperators = aOperators * bOperators;
console.log( `El resultado de la multiplicaicón es: ${ zOperators }` );
zOperators = aOperators / bOperators;
console.log( `El resultado de la división es: ${ zOperators }` );
zOperators = aOperators % bOperators;
console.log( `El residuo de la división es: ${ zOperators }` );
zOperators = aOperators ** bOperators;
console.log( `El resultado del exponente es: ${ zOperators }` );
// Incremento
// pre-incremento (el operador ++ antes de la variable)
zOperators = ++ aOperators;
console.log( aOperators );
console.log( zOperators );
// post-incremento (el operador ++ después de la variable)
zOperators = aOperators ++;
console.log( aOperators );
console.log( zOperators );
// Decremento
// pre-decremento (el operador ++ antes de la variable)
zOperators = -- aOperators;
console.log( aOperators );
console.log( zOperators );
// post-decremento (el operador ++ después de la variable)
zOperators = aOperators --;
console.log( aOperators );
console.log( zOperators );
// Precedencia de operadores 
// Primero se evalua los parentesis, luego los valores de incremento y decremento, luego multiplicación y división, luego más y menos y por último los operadores de mayor que, menos que o de igual que
let aPrecedence = 3, bPrecedence = 2, cPrecedence = 1, dPrecedence = 4;
let zPrecedence = aPrecedence * bPrecedence + cPrecedence / dPrecedence; // Primero multiplica y divide y luego suma los dos resultados
console.log( zPrecedence );
zPrecedence = cPrecedence + aPrecedence * bPrecedence / dPrecedence; // Ejecuta el primer operador que encuentra que sea * o / y luego + o -
console.log( zPrecedence );
zPrecedence = ( cPrecedence + aPrecedence ) * bPrecedence / cPrecedence; // Ejecuta la operación que está entre () y luego de izquierda a derecha
console.log( zPrecedence );
// Operadores de asignación 
let aAssignment = 1;
aAssignment += 3; // sería igual a -> aAssignment = aAssignment + 3
console.log( aAssignment );
aAssignment -= 2 // sería igual a -> aAssignment = aAssignment - 2
console.log( aAssignment );
// Operadores de comparación 
let aComparison = 3, bComparison = 3, cComparison = '3';
let zComparison = aComparison == bComparison; // == es un operador de comparación, se revisa el valor sin importar el tipo
console.log( zComparison );
zComparison = aComparison === cComparison; // === es un operador de comparación, se revisa el valor importando el tipo
console.log( zComparison );
// Operador distinto a
let aDifferent = 3, bDifferent = 4, cDifferent = '3';
let zDifferent = aDifferent != bDifferent; // != es un operador de distinto a, en este caso devuelve true porque tienen distinto valor
console.log( zDifferent );
zDifferent = aDifferent !== cDifferent;  // !== es un operador de distinto a, en este caso devuelve true porque tienen distinto valor y distinto tipo
console.log( zDifferent );
// Operadores relacionales 
let aRelational = 3, bRelational = 2, cRelational = '3', dRelational = 3;
let zRelational = aRelational < bRelational; // 3 no es menor a 2
console.log( zRelational );
zRelational = aRelational > bRelational; // 3 es mayor a 2
console.log( zRelational );
zRelational = aRelational <= dRelational; // 3 es mayor o igual a 3
console.log( zRelational );
// *********************
// ***** TEST NÚMERO PAR O IMPAR *****
let numTestPair = 10;
if( numTestPair % 2 == 0) {
    console.log( `Nuestra variable con valor ${ numTestPair } es un número par` );
} else {
    console.log( `Nuestra variable con valor ${ numTestPair } es un número impar` );
}
// ***** TEST ES MAYOR DE EDAD *****
let numTestAge = 20, numTestAdult = 18;
if ( numTestAge >= numTestAdult ) {
    console.log( `Usted puede entrar ya que tiene ${ numTestAge } años y la entrada es a partir de ${ numTestAdult } años` );
} else {
    console.log( `Usted no puede entrar ya que tiene ${ numTestAge } años y la entrada es a partir de ${ numTestAdult } años` );
}
// *********************
// Operador AND (&& devuelve true si los dos operadores devuelven true)
let numAnd = 5, numAndMax = 10, numAndMin = 0;
if ( numAnd >= numAndMin && numAnd <= numAndMax ) {
    console.log( `${ numAnd } es mayor que ${ numAndMin } y menor que ${ numAndMax }` );
} else {
    console.log( `no está dentro del rango` );
}
// Operador OR (&& devuelve true si uno de dos operadores devuelven true)
let holidays = true, dayRest = false;
if ( holidays || dayRest ) {
    console.log( `El padre podrá ir a ver el partido de su hijo` );
} else {
    console.log( `El padre no podrá ir a ver el partido de su hijo` );
}
// Operador ternario
let resultTernary = ( 2 >= 2) ? 'verdad' : 'falso';
console.log( resultTernary );
let numTernary = 9;
resultTernary = ( numTernary % 2 == 0 ) ? 'Número par' : 'Número impar';
console.log( resultTernary );
// Convertir string a number
let numString = '10';
console.log( numString );
console.log( typeof numString );
let ageString = Number( numString );
console.log( ageString );
console.log( typeof ageString );
if ( ageString >= 18 ) {
    console.log( 'Puede votar' );
} else {
    console.log( 'Muy joven para poder votar' );
}
let resultStringToNumber = ( ageString >= 18 ) ? 'Puede votar' : 'Muy joven para poder votar';
console.log( resultStringToNumber );
// Función isNAn
let numIsNaN = '10';
let ageIsNan = Number( numIsNaN );
console.log( ageIsNan );
if ( isNaN( ageIsNan )) {
    console.log( `No es un número` );
} else {
    let resultIsNan = ( ageIsNan >= 18 ) ? `Puede votar` : `Muy joven para poder votar`;
    console.log( resultIsNan );
}
// Ejemplos de precedencia de operadores
let xPrecedentEx = 5, yPrecedentEx = 10, zPrecedentEx = ++xPrecedentEx + yPrecedentEx--;
console.log( xPrecedentEx );
console.log( yPrecedentEx );
console.log( zPrecedentEx );
let resultPrecedentEx = 4 + 5 * 6 / 3;
console.log( resultPrecedentEx );
resultPrecedentEx = ( 4 + 5 ) * 6 / 3;
console.log( resultPrecedentEx );