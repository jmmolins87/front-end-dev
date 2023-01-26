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
// Distintas formas de imprimir un objeto
let personMethodsPrint = {
    name: 'John',
    surname: 'Smith',
    email: 'john@example.com',
    age: 21
}
console.log( personMethodsPrint );
for (  personMethodsPrintPropiedad in personMethodsPrint ) {
    console.log( personMethodsPrint[ personMethodsPrintPropiedad ] );
}
let personMethodsPrintArray = Object.values( personMethodsPrint );
console.log( personMethodsPrintArray );
let personMethodsPrintString = JSON.stringify( personMethodsPrint );
console.log( personMethodsPrintString );
// Metodo get
let personMethodsGet = {
    name: 'John',
    surname: 'Smith',
    email: 'john@example.com',
    age: 21,
    completeName: function() {
        return `${ this.name } ${ this.surname }`;
    },
    get completeNameGet() {
        return `${ this.name } ${ this.surname }`;
    }
}
console.log( personMethodsGet.completeName());
// Con el get no hace falta poner los ()
console.log( personMethodsGet.completeNameGet );
// Metodo set
let personMethodsSet = {
    name: 'John',
    surname: 'Smith',
    email: 'john@example.com',
    age: 21,
    language: 'es',
    get lang() {
        return this.language.toUpperCase();
    },
    // para modificar los valores de nuestro objeto
    set lang( langParam ) {
        return this.language = langParam.toUpperCase();
    },
    completeName: function() {
        return `${ this.name } ${ this.surname }`;
    },
    get completeNameGet() {
        return `${ this.name } ${ this.surname }`;
    }
}
console.log( personMethodsSet.lang );
personMethodsSet.lang = 'en';
console.log( personMethodsSet.lang );
// Se almacena en mayúsculas
console.log( personMethodsSet.language );
// Metodo constructor
// Función constructor de objetos
function PersonConstructor( name, surname, email ) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.completeNameConstructor = function() {
        return `${ this.name } ${ this.surname }`
    }
}
let girlFriend = new PersonConstructor( 'Carolina', 'Perez', 'carolina@gmail.com' );
console.log( girlFriend );
console.log( girlFriend.completeNameConstructor());
let father = new PersonConstructor( 'Juan María', 'Molins', 'jmmolins58@gmail.com' );
console.log( father );
// Podemos cambiar los valores de las propiedades del objeto
father.email = 'sergegraf93@gmail.com';
console.log( father );
let mother = new PersonConstructor( 'Carmen', 'cortés', 'carcoco60@gmail.com' );
console.log( mother );
console.log( mother.completeNameConstructor());
let brother = new PersonConstructor( 'Lluis', 'Molins', 'lluis92@gmail.com' );
console.log( brother );
console.log( brother.completeNameConstructor());
// Formas de crear un objeto
let myObjectNew = new Object();
console.log( typeof myObjectNew );
// la forma de crear un objeto correcta y más simplificada sería:
let myObjectCorrect = {};
console.log( typeof myObjectCorrect );
let myStringObject = new String( 'Hola Mundo' );
// función construcotr de tipo string
console.log( typeof myStringObject );
// la forma correcta y más simplificada de crear un objeto de tipo string sería:
let myStringObjectCorrect = 'Hola Mundo';
console.log( typeof myStringObjectCorrect );
// función construcotr de tipo number
let myNumberObject = new Number( 1 );
console.log( typeof myNumberObject );
// la forma correcta y más simplificada de crear un objeto de tipo number sería:
let myNumbreObjectCorrect = 1;
console.log( typeof myNumbreObjectCorrect );
// función construcotr de tipo booleano
let myBooleanObject = new Boolean( false );
console.log( typeof myBooleanObject );
// la forma correcta y más simplificada de crear un objeto de tipo booleano sería:
let myBooleanObjectCorrect = true;
console.log( typeof myBooleanObjectCorrect );
// función construcotr de tipo booleano
let myArrayObject = new Array();
console.log( typeof myBooleanObject );
// la forma correcta y más simplificada de crear un objeto de tipo array sería:
let myArrayObjectCorrect = [];
console.log( typeof myArrayObjectCorrect );
// función construcotr de tipo función
let myFunctionObject = new Function();
console.log( typeof myFunctionObject );
// la forma correcta y más simplificada de crear un objeto de tipo función sería:
let myArrayFunctionCorrect = function() {};
console.log( typeof myArrayFunctionCorrect );
// Prototype -> podemos cambiar atributos y metodos de los objetos
father.phone = 123456789;
console.log( father.phone );
// Solo se añade el atributo al objeto father, no al constructor
console.log( mother.phone );
// Con el prototype podemos añadir atributos al objeto
PersonConstructor.prototype.phone = '147258369';
console.log( mother.phone );
// Posteriormente podemos cambiar el valor de el atributo
mother.phone = '123456789'
console.log( mother.phone );
console.log( girlFriend.phone );
console.log( brother.phone );
// Metodo call -> nos va a permitir llamar a un metodo de un objeto a otro objeto
let personCall1 = {
    name: 'Juanma',
    surname: 'Molins',
    completeName: function() {
        return `${ this.name }  ${ this.surname }`
    }
}
let personCall2 = {
    name: 'Carolina',
    surname: 'Perez'
}
console.log( personCall1.completeName());
// Uso de call para utilizar el metodo completeName con los datos del objeto personCall2
personCall1.completeName.call( personCall2 );
// le pasamos el objeto personCall2 como argumento a la función call
console.log( personCall1.completeName.call( personCall2 )) ;
// Argumentos a la función call
let personCallArguments1 = {
    name: 'Juanma',
    surname: 'Molins',
    completeName: function( title, phone ) {
        return `${ title }: ${ this.name }  ${ this.surname }, ${ phone }`;
    }
}
let personCallArguments2 = {
    name: 'Carolina',
    surname: 'Perez'
}
console.log( personCallArguments1.completeName.call( personCallArguments2, 'Ing', '147258369' ));
// Metodo Apply -> llamar a un metodo de otro objeto que no tiene definido dicho metodo
let personApply1 = {
    name: 'Juanma',
    surname: 'Molins',
    completeName: function( title, tel ) {
        return `${ title }: ${ this.name } ${ this.surname }, tel: ${ tel }`;
    }
}
let personApply2 = {
    name: 'Carolina',
    surname: 'Perez'
}
console.log( personApply1.completeName( 'Ingeniero', '147258369' ));
// Hasta aquí no hay diferencia con call()
// A diferencia de call, con apply pasamos los valores como un array
let arrayPeronApply = [ 'Licenciada', '369258147' ];
console.log( personApply1.completeName.apply( personApply2, arrayPeronApply ));