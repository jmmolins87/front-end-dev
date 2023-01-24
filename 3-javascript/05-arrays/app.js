// Recorrer un array
const autos = [ 'BMW', 'Mercedez Benz', 'Volvo', 'Audi' ];
console.log( autos );
console.log(autos[ 0 ]);
console.log(autos[ 3 ]);
for ( let i = 0; i < autos.length; i++ ) {
    console.log( `${ i + 1 }: ${ autos[ i ] }` );
}
// Modificar los valores del array
autos[1] = 'Seat';
console.log( autos );
// Agregar elementos en un array
autos.push( 'Kia' );
console.log( autos );
console.log( autos.length );
autos[ autos.length ] = 'Cadillac';
console.log( autos ); 
autos[6] = 'Ferrari';
console.log( autos );
// Es un array?
console.log( typeof autos );
Array.isArray( autos );
console.log( Array.isArray( autos ));
console.log( autos instanceof Array );