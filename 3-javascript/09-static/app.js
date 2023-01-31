personStaticObject = {
    // no es posible llamar a un método static desde un objeto
    // static saludar() {
    //     console.log( 'Hola mundo desde un objeto!!' );
    // }
}
// personStaticObject.saludar();
class personStaticClass {
    // Atributo estático
    static counterObjectsPerson = 0; // atributo de nuestra clase -> se asocian con la clase en si misma
    email = `Valor por defecto de nuestro email`; // atributo de nuestro objeto -> se asocian con los objetos que se crean a partir de la clase
    constructor( name, surname ) {
        this.name = name;
        this.surname = surname;
        if ( personStaticClass.counterObjectsPerson < personStaticClass.MAX_OBJ ) {
            this.id = ++ personStaticClass.counterObjectsPerson;
        } else {
            console.log( `Se ha superado el máximo de objetos permitidos` );
        }
    }
    static saludar() {
        console.log( 'Hola mundo desde una clase!!' );
    }
    // Declarar variable estática que no se pueda modificar
    // Vamos a recuperar información, no a modificarla
    static get MAX_OBJ() {
        return 5;
    }
}
let personStaticClassPrint = new personStaticClass( 'Juanma', 'Molins' );
console.log( personStaticClassPrint );
personStaticClass.saludar();
console.log( personStaticClass.counterObjectsPerson );
class personStaticClassChild extends personStaticClass {
    constructor( name, surname, email ) {
        super( name, surname );
        this.email = email;
    }
}
let personStaticClassChildPrint = new personStaticClassChild( 'Juanma', 'Molins', 'jmmolins87@gmail.com' );
console.log( personStaticClassChildPrint );
console.log( personStaticClass.counterObjectsPerson );
console.log( personStaticClassChild.counterObjectsPerson );
console.log( personStaticClassPrint.email );
// Uso de la palabra Static
class PersonStaticWordUse {
    static personCounter = 0;
    constructor( name, surname ) {
        this.name = name;
        this.surname = surname;
        this.id = ++ PersonStaticWordUse.personCounter;
    }
}
let personStaticWordUseOne = new PersonStaticWordUse( 'Juanma', 'Molins' );
console.log( personStaticWordUseOne );
let personStaticWordUseTwo = new PersonStaticWordUse( 'Carolina', 'Pérez' );
console.log( personStaticWordUseTwo );
class employeeStaticWordUse extends PersonStaticWordUse {
    constructor( name, surname, department ) {
        super( name, surname );
        this.department = department;
    }
}
let employeeStaticWordUseOne = new employeeStaticWordUse( 'Juanma', 'Molins', 'Técnico' );
console.log( employeeStaticWordUseOne );
let employeeStaticWordUseTwo = new employeeStaticWordUse( 'Carolina', 'Pérez', 'Ventas' );
console.log( employeeStaticWordUseTwo );
// Declarar variable estática que no se pueda modificar
console.log( personStaticClass.MAX_OBJ );
// Modificamos el valor pero no cambia
personStaticClass.MAX_OBJ = 10;
console.log( personStaticClass.MAX_OBJ );