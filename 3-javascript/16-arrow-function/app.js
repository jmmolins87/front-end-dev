function myFunction() {
    console.log( `Saludos desde mi función` );
}
myFunction();
const myFunctionArrow = () => {
    console.log( `Saludos desde mi función de flecha` );
}
myFunctionArrow();
const myFunctionArrowOneLine = () =>  console.log( `Saludos desde mi función de flecha de una sola línea` );
myFunctionArrowOneLine()
const hello = () => `Saludos desde la función de flecha hello de una sola línea`; 
console.log( hello());
// Funciones de flecha con parámetros
const functionWithParams = ( message ) => console.log( message );
functionWithParams( `Saludos con parámetros` );
// Como sería la función anterior con el método clásico
function functionParamsClassic( message ) {
    console.log( message );
}
functionParamsClassic( `Saludos con Parámetros desde una función clásica` );
const functionWithMoreOneParams = ( op1, op2 ) => op1 + op2;
console.log( functionWithMoreOneParams( 5, 10 ));
const functionWithMoreOneParamsClassic = function functionWithMoreOneParamsClassic( op1, op2 ) {
    let result = op1 + op2;
    return `El resultado es: ${ result }`;
}
console.log( functionWithMoreOneParamsClassic( 5, 10 ));