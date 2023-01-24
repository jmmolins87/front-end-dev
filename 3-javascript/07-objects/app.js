let xObject = 10;
console.log( xObject.length );

let personObject = {
    name: 'John',
    surname: 'Smith',
    email: 'john@example.com',
    age: 21,
    // Metodos dentro de un objeto
    completeName: function() {
        return `${ this.name } ${ this.surname }`;
    }
}
console.log( personObject );
console.log( personObject.name );
console.log( personObject.surname );
console.log( personObject.email );
console.log( personObject.age );
// Resultado de nuestro metodo en el objeto
console.log( personObject.completeName());
// Podemos reservar espacio en memoria para crear un objeto
// La palabra reservada new nos dice que va a guardar espacio en memoria para este objeto
let personObjectNewObject = new Object();
personObjectNewObject.name = 'Juanma';
personObjectNewObject.surname = 'Molins';
personObjectNewObject.phone = '123 456 789';
console.log( personObjectNewObject );
// Acceder a la propiedades de los objetos
console.log( personObject.name );
console.log( personObject[ 'name' ]);
// for in
for( nameProperty in personObject ) {
    // Acceedemos a los nombres de las propiedades
    console.log( nameProperty );
    // Accedemos al valor de las propiedades
    console.log( personObject[ nameProperty ]);
}
// Agregar y eliminar propiedades de un objeto
// Agregar
personObject.phone = '123 456 789';
// Modificar
personObject.phone = '123 456 788';
console.log( personObject );
// Eliminar
delete personObject.phone;
console.log( personObject );
