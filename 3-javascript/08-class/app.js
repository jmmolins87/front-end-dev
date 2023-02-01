// Clases en JS
class PersonClass {
    constructor( name, surname ) {
        this.name = name;
        this.surname = surname;
    }
}
let personClass1 = new PersonClass( 'Juanma', 'Molins' );
console.log( personClass1 );
let personClass2 = new PersonClass( 'Carolina', 'Perez' );
console.log( personClass2 );
// Metodo get y set
class PersonClassGetSet {
    constructor( name, surname ) {
        this.name = name;
        this.surname = surname;
    }
    get nameGet() {
        return this.name;
    }
    // Modificamos el valor con SET
    set nameSet( name ) {
        this.name = name;
    }
}
let PersonClassGetOne = new PersonClassGetSet( 'Carolina', 'Perez' );
console.log( PersonClassGetOne.nameGet );
let PersonClassSetOne = new PersonClassGetSet( 'Juanma', 'Molins');
PersonClassSetOne.name = 'Carolina';
console.log( PersonClassSetOne.name );
// Hoisting
// No podemos invocar la clase antes de que esté declarada
// let cityHoistingOne = new CityClassHoisting( 'Madrid', 'Gran Vía' );
class CityClassHoisting {
    constructor( city, direction ) {
        this.city = city;
        this.direction = direction;
    }
    get directionGet() {
        return `Mi ciudad de nacimiento es ${ this.city } y mi calle es ${ this.direction }`
    }
}
let cityHoistingTwo = new CityClassHoisting( 'Balaguer', 'c/ Àngel Guimerà' );
console.log( cityHoistingTwo.directionGet );
// Herencia
class PersonInheritance {
    constructor( name, surname ) {
        this.name = name;
        this.surname = surname;
    }
    get nameInheritance() { 
        return this.name; 
    }
    set nameInheritance( name ) {
        this.name = name;
    }
    get surnameInheritance() {
        return this.surname;
    }
    set surnameInheritance( surname ) {
        this.surname = surname;
    }
    completeNameEmployee() {
        return `Mi nombre es: ${ this.name } ${ this.surname }`
    }
    // Sobreescribiendo el metodo de la clase Padre (Object)
    toString() {
        return this.completeNameEmployee();
    }
}
class PersonEmployee extends PersonInheritance {
    constructor( name, surname, department ) {
        super( name, surname );
        this.department = department;
    }
    get departmentEmployee() {
        return this.department
    }
    set departmentEmployee( department ) {
        this.department = department;
    }
    // Sobreescritura -> el nombre del metodo tiene que llamarse igual está escrito en el padre
    completeNameEmployee() {
        // return `Mi nombre es: ${ this.name } ${ this.surname } y soy ${ this.department }`;
        return `${ super.completeNameEmployee()} y soy ${ this.department }`;
    }
}
let personOne = new PersonInheritance( 'Juanma', 'Molins' );
console.log( personOne );
// Llamamos a la función del padre
console.log( personOne.toString());
let PersonEmployeeOne = new PersonEmployee( 'Juanma', 'Molins', 'Técnico' );
console.log( PersonEmployeeOne );
// Llamamos a la función del hijo
console.log( PersonEmployeeOne.toString());
// Atriburos del padre
console.log( PersonEmployeeOne.name );
console.log( PersonEmployeeOne.surname );
// Atributos del hijo
console.log( PersonEmployeeOne.department );
// Modificamos el metodo del padre desde el metodo del hijo
console.log( PersonEmployeeOne.completeNameEmployee());
// Clase Object
console.log( PersonEmployeeOne.toString());