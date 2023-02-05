let myFirstPromises = new Promise(( resolve, reject ) => {
    let expresion = true;
    if( expresion ) {
        resolve( `Se resolvió correctamente` );
    } else {
        reject( `Se produjo un error` );
    }
});
myFirstPromises
.then( valor => { return console.log( valor )})
.catch( error => { return console.log( error )});
let mySecondPromises = new Promise(( resolve ) => {
    console.log( `Inicio de la promesa` );
    setTimeout(() => resolve( `Saludos con promesa y timeOut` ), 3000);
    console.log( `Fin de la promesa` );
});
mySecondPromises.then( valor => { return console.log( valor )});
// Palabra reservada async -> indica que una función regresa una promesa
async function myAsyncFunction() {
    return `Saludos con promesa y async`;
}
myAsyncFunction().then( valor => { return console.log( valor )});
// async con await
async function myAsyncFunctionAwait() {
    let myPromise = new Promise( resolve => {
        resolve( `Promesa con async y await` );
    });
    console.log( await myPromise );
}
myAsyncFunctionAwait();
// async con await y setTimeout
async function myFunctionAsyncAwaitSetTimeout() {
    let myPromise = new Promise( resolve => {
        setTimeout(() => resolve( `Se resolvió el problema` ), 1500);
    })
    console.log( await myPromise );
    // Como tenemos el await, no se va a imprimir el siguiente console.log hasta que se imprima el de antes
    console.log( `Fin de la función` );
}
myFunctionAsyncAwaitSetTimeout()