// Podemos llamar la función antes de declararla (Hoisting)
myFunctionAdd( 2, 5 );
// Declaración de la función
function myFunctionAdd( a, b ) {
    // Cuerpo de la función
    console.log( `Suma: ${ a + b }` );
}
// Llamando a la función
myFunctionAdd( 10, 5 );
// Palabra reservada return
function myFunctionReturn( a, b ) {
    console.log( arguments.length );
    return a * b;
}
console.log( myFunctionReturn( 5, 10 ));
let resultReturn = myFunctionReturn( 4, 10 );
console.log( resultReturn );
// Funciones de tipo expresión
let expresionFunction = function( a, b ){ return a / b };
let resultExpresion = expresionFunction( 4, 10 );
console.log( resultExpresion );
// Funciones de self invoking (no se puede reutilizar)
( function( a, b ) {
    console.log( `Función self invoking. La suma es: ${ a + b }` );
})( 3, 10 );
// Funciones como objetos
function myFunctionObject( a, b ) {
    // Cuerpo de la función
    console.log( `Suma: ${ a + b }` );
}
myFunctionObject( 5, 10 );
let myFunctionText = myFunctionObject.toString();
console.log( myFunctionText );
// Funciones de flecha
const arrowFunction = ( a, b ) => a + b;
let arrowResult = arrowFunction( 10, 5 );
console.log( arrowResult );
// Parametros y argumentos
// Parámetros - lista de variables que definimos en una función
// Argumentos - Son los valores que pasamos a nuestra función
let addParamsArguments = function( a, b, c ) {
    console.log( arguments[ 0 ]);
    console.log( arguments[ 1 ]);
    console.log( arguments[ 2 ]);
    return ( a + b ) * c;
}
let resultParamsArguments = addParamsArguments( 5, 3, 10 );
console.log( resultParamsArguments );
// Sumar todos los argumentos
let resultAddAll = addAll( 5, 10, 14, 41, 17, 9, 10, 65 );
console.log( resultAddAll ); 
function addAll() {
    let addAllArguments = 0;
    for ( var i = 0; i < arguments.length; i++ ) {
        addAllArguments += arguments[ i ]; // addAllArguments = addAllArguments + arguments[ i ]
    }
    return addAllArguments;
};
// Paso por valor y paso por referencia
// Valor - tipos que no son objetos (tipos numericos, tipos booleanos)
// Referencia -
// Tipos primitivos - no tienen ni atributos ni metodos asociados a ese valor
let xValorReference = 10;
function changeValor( a ) {
    a = 20;
    return;
}
// Paso por valor
changeValor( xValorReference );
console.log( xValorReference );
// Paso por referencia
const personReference = {
    name: 'John',
    surname: 'Smith'
}
function changeValorObject( p1 ) {
    p1.name = 'Juanma';
    p1.surname = 'Molins';
}
changeValorObject( personReference );
console.log( personReference );