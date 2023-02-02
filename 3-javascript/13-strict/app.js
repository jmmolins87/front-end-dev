// El modo strict (estricto) sirve para evitar mala prácticas
// Se declara al principio del documento .js de la siguiente forma "use strict";
// Se puede utilizar al principio de nuestro programa o al inicio de una función
"use strict";
// x = 10;
let x = 10;
console.log( x );
// myFunction() {}
function myFunction() {
    "use strict";
    // La variable x la tenemos declarda fuera de la función por eso no nos tira ningún error y nos devuelve su valor
    x = 25;
    console.log( x );
    // y = 10;
    let y = 5;
    console.log( y );
}
myFunction();