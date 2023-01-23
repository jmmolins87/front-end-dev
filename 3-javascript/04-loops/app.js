// ***** Ciclo While ***** -> no tene porquje ejecutar ninguna vez el bloque del código
let accountantWhile = 0;
while ( accountantWhile <= 3 ) {
    console.log( accountantWhile );
    accountantWhile ++;
}
console.log( `Fin del ciclo while con un valor de la variable ${ accountantWhile }` );
// ***** Ciclo Do While ***** -> por lo menos se ejecuta una vez el bloque del código
let accountantDoWhile = 0
// líneas a repetir
do {
    console.log( accountantDoWhile );
    accountantDoWhile ++;
} while ( accountantDoWhile <= 3 );
console.log( `Fin del ciclo do while con un valor de la variable ${ accountantWhile }` );
// ***** Ciclo For ***** -> es el ciclo más utilizado e incremento o decremento por si solo, ya tieine defenido cada uno de los pasos de los ciclos anteriores.
let accountantFor = 0;
for ( accountantFor; accountantFor <= 3; accountantFor++ ) {
    console.log( accountantFor );
}
console.log( `Fin del ciclo for con un valor de la variable ${ accountantFor }` );
// ***** Palabra break *****
let accountantBreak = 0;
for ( accountantBreak; accountantBreak <= 10; accountantBreak++ ) {
    if ( accountantBreak % 2 == 0 ) {
        console.log( accountantBreak );
        break; // no deja continuar el ciclo
    }
}
console.log( `Fin del ciclo for con un valor de la variable ${ accountantBreak }` );
// ***** Palabra continue *****
let accountantContinue = 0;
for ( accountantContinue; accountantContinue <= 10; accountantContinue++ ) {
    if ( accountantContinue % 2 !== 0 ) {
        continue; // ir a la siguiente iteración, se salta el if para entrar en el else
    } else {
        console.log( accountantContinue );
    }
}
// ***** Etiquetas (labels) *****
let accountantLabels = 0;
start:
for ( accountantLabels; accountantLabels <= 10; accountantLabels++ ) {
    if ( accountantLabels % 2 !== 0 ) {
        continue start;
    } else {
        console.log( accountantLabels );
    }
}