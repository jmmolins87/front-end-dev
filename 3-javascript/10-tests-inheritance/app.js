class PersonInheritance {
    static personInheritanceCount = 0;
    constructor( name, surname, age ) {
        this.idPerson = ++ PersonInheritance.personInheritanceCount;
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    get idPersonGet() { return this.idPerson; }
    get nameGet() { return this.name; }
    set nameGet( name ) { this.name = name; }
    get surnameGet() { return this.surname; }
    set surnameGet( surname ) { this.surname = surname; }
    get ageGet() { return this.age; }
    set ageGet( age ) { this.age = age; };
    message() { 
        return `Datos personales -> 
        \n - Su id es: ${ this.idPerson }
        \n - El nombre de esta persona es: ${ this.name } 
        \n - El apellido es: ${ this.surname } 
        \n - Su edad es de: ${ this.age }`; 
    }
}
class EmployeeInheritance extends PersonInheritance {
    static employeeInheritanceCount = 0;
    constructor( name, surname, age, salary ) {
        super( name, surname, age );
        this.idEmployee = ++ EmployeeInheritance.employeeInheritanceCount;
        this.salary = salary;
    }
    get idEmployeeGet() { return this.idEmployee; }
    get salaryGet() { return this.salary; }
    /**
     * @param {any} salary
     */
    set salarySet( salary ) { this.salary = salary; }
    message() {
        return `${ super.message() } 
        \n - Datos del Empleado ->
        \n - Su id de empleado es: ${ this.idEmployee }
        \n - El salario es: ${ this.salary }`
    }
}
class ClientInheritance extends PersonInheritance {
    static clientInheritanceCount = 0;
    constructor( name, surname, age, dateRegister ) {
        super( name, surname, age );
        this.idClient = ++ ClientInheritance.clientInheritanceCount;
        this.dateRegister = dateRegister;
    }
    get idClientGet() { return this.idClient; }
    get dateRegisterGet() { return this.dateRegister; }
    /**
     * @param {any} dateRegister
     */
    set dateRegisterSet( dateRegister ) { this.dateRegister = dateRegister; }
    message() {
        return `${ super.message() } 
        \n - Datos del Cliente ->
        \n - Su id de cliente es: ${ this.idClient }
        \n - Fecha de registro: ${ this.dateRegister }`
    }
}

// Test Person
let personInheritanceOne = new PersonInheritance( 'Juanma', 'Molins', 35 );
console.log( personInheritanceOne.message());
let personInheritanceTwo = new PersonInheritance( 'Carolina', 'Pérez', 38 );
console.log( personInheritanceTwo.message());
// Test Employee
let employeeInheritanceOne = new EmployeeInheritance( 'Juanma', 'Molins', 35, 1600 );
console.log( employeeInheritanceOne.message());
let employeeInheritanceTwo = new EmployeeInheritance( 'Carolina', 'Pérez', 38, 2000 );
console.log( employeeInheritanceTwo.message());
// Test Client
let clientInheritanceOne = new ClientInheritance( 'Juanma', 'Molins', 35, new Date());
console.log( clientInheritanceOne.message());
let clientInheritanceTwo = new ClientInheritance( 'Carolina', 'Pérez', 38, new Date());
console.log( clientInheritanceOne.message());