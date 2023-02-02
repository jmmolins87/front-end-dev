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
    x = 10;
    console.log( x );
}
myFunction();