let condition = true;
if ( 2 > 3 ) {
    console.log( `es cierto` );
    console.log( `fin del programa` );
} else {
    console.log( `es falso` );
}
// Sentencia de control else if
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
let monthElsIf = 11, seasonElsIf;
if ( monthElsIf == 1 || monthElsIf == 2 || monthElsIf == 12 ) {
    season = 'Invierno'
} else if ( monthElsIf == 3 || monthElsIf == 4 || monthElsIf == 5 ) {
    season = 'Primavera'
} else if ( monthElsIf == 6 || monthElsIf == 7 || monthElsIf == 8 ) {
    season = 'Verano'
} else if ( monthElsIf == 9 || monthElsIf == 10 || monthElsIf == 11 ) {
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
// Sentencia de control switch
let numSwitch = 3;
let numTextSwitch = `Valor desconocido`;
switch ( numSwitch ) {
    case 1:
        numTextSwitch = `Número uno`;
        break;
    case 2:
        numTextSwitch = `Número dos`;
        break;
    case 3:
        numTextSwitch = `Número tres`;
        break;
    case 4:
        numTextSwitch = `Número cuatro`;
    default:
        numTextSwitch = `El número no es válido`;
        break;
}
console.log( numTextSwitch );
// *********************
// ***** TEST ESTACIÓN DEL AÑO *****
let monthSwitch = 11, seasonSwitch;
switch ( monthSwitch ) {
    case 1: case 2: case 12: 
        seasonSwitch = `Invierno`;
        break;
    case 3: case 4: case 5:
        seasonSwitch = `Primavera`;
        break;
    case 6: case 7: case 8:
        seasonSwitch = `Verano`;
        break;
    case 9: case 10: case 11:
        seasonSwitch = `Otoño`;
        break;
    default:
        seasonSwitch = `No es un mes válido`;
        break;
}
console.log( seasonSwitch );
// *********************