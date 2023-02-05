// Función callback -> se pasa como parámetro a otra función, de ese modo se puede llamar a una función a través de una función
myFunctionOne() 
myFunctionTwo() 
function myFunctionOne() { console.log( `Mi función 1` ); }
function myFunctionTwo() { console.log( `Mi función 2` ); }
function print( message ) { console.log( `El resultado es: ${ message }` )};
function add( op1, op2, callback ) {
    let result = op1 + op2;
    callback( result );
    console.log( `El resultado es: ${ result }` );
}
add(10, 5, print);
// Llamadas asíncronas con el uso de setTimeout
function functionCallback() {
    console.log( `Saludo asíncrono después de 3"` );
} 
setTimeout( functionCallback, 3000);
setTimeout( function() { console.log( `Saludo asíncrono después de 4"` )}, 4000);
setTimeout(() => console.log( `Saludo asíncrono después de 5"`), 5000);
// Llamadas asíncronas con el uso de setInterval
let clock = () => {
    let date = new Date();
    console.log( `${ date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() }` );
}
setInterval( clock, 1000 );