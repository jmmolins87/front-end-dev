"use strict";
// Dentro del try no nos tira ningún error por no tener declarada la variable
try {
    let x = 20;
    // myFunction();
    // Si queremos arrojar un error 
    throw 'Mi error'
} catch( error ){
    // Si no hay nigún error no ejecuta el catch
    console.log( error );
} finally {
    // Este bloque es opcional
    console.log( 'Termina la revisión de errores' );
}
console.log( 'Continuamos...' );
// Throws
let result = 10;
try {
    // x = 10;
    if (isNaN( result )) throw 'No es un número';
    else if ( result === ' ') throw 'Es una cadena vacía';
    else if ( result >= 0 ) throw 'El valor es positivo';
    else if ( result < 0 ) throw 'El valor es neagtivo';
} catch ( error ) {
    console.log( error );
    console.log( error.name );
    console.log( error.message );
} finally {
    // finally es más informativo que funcional
    console.log( 'Se termino la revisión de errores' );
}