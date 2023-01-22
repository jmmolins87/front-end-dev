let condition = true;
if ( 2 > 3 ) {
    console.log( `es cierto` );
    console.log( `fin del programa` );
} else {
    console.log( `es falso` );
}
// else if
let numberElseIf = 3;
if ( numberElseIf == 1 ) {
    console.log( `El número es 1` );
} else if ( numberElseIf == 2 ) {
    console.log( `El número es 2` );
} else if ( numberElseIf == 3 ) {
    console.log( `El número es 3` );
} else if ( numberElseIf == 4 ) {
    console.log( `El número es 4` );
} else {
    console.log( `Número desconocido` );
}
// *********************
// ***** TEST ESTACIÓN DEL AÑO *****
let month = 11, season;
if ( month == 1 || month == 2 || month == 12 ) {
    season = 'Invierno'
} else if ( month == 3 || month == 4 || month == 5 ) {
    season = 'Primavera'
} else if ( month == 6 || month == 7 || month == 8 ) {
    season = 'Verano'
} else if ( month == 9 || month == 10 || month == 11 ) {
    season = 'Otoño'
} else  {
    season = 'Valor incorrecto';
}
console.log( season );
// ***** TEST HORA DEL DÍA *****
let hour = 8, greeting;
if ( hour >= 6 && hour <= 11 ) {
    greeting = 'Buenos días'
} else if ( hour >= 12 && hour <= 18 ) {
    greeting = 'Buenas tardes'
} else if ( hour >= 19 && hour <= 24 ) {
    greeting = 'Buenas noches'
} else if ( hour >= 0 && hour <= 5 ) {
    greeting = 'Durmiendo'
} else {
    greeting = 'Esa hora no es válida'
}
console.log( greeting );
// *********************