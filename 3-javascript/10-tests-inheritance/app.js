class PersonTestInheritance {
    static personCount = 0;
    constructor( name, surname, age ) {
        this.idPerson = ++ PersonTestInheritance.personCount;
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    get idGet() { 
        return this.idPerson; 
    }
    get nameGet() {
        return this.name;
    }
    /**
     * @param {any} name
     */
    set nameSet( name ) {
        this.name = name;
    }
    get surnameGet() {
        return this.surname;
    }
    /**
     * @param {any} surname
     */
    set surnameSet( surname ) {
        this.surname = surname;
    }
    get ageGet() {
        return this.age;
    }
    /**
     * @param {any} age
     */
    set ageSet( age ) {
        this.age = age;
    }
    message() {
        return `Datos personales -> El nombre de esta persona es: ${ this.name }, el apellido es: ${ this.surname } y tiene una edad de: ${ this.age } años.`;
    }
}
class EmployeeTestInheritance extends PersonTestInheritance {
    static employeeCount = 0;
    constructor( name, surname, age, salary ) {
        super( name, surname, age );
        this.idEmployee = ++ EmployeeTestInheritance.employeeCount;
        this.salary = salary;
    }
    get idEmployeeGet() { 
        return this.idEmployee;
    }
    get salaryGet() {
        return this.salary
    }
    /**
     * @param {any} salary
     */
    set salarySet( salary ) {
        this.salary = salary;
    }
    message() {
        return `${ super.message() } Datos del empleado -> El número de empleado es: ${ this.idEmployee } y tiene un salario de ${ this.salary }€.`;
    }
}
class ClientTestInheritance extends PersonTestInheritance {
    static clientCount = 0;
    constructor( name, surname, age, registerDate ) {
        super( name, surname, age );
        this.idClient = ++ ClientTestInheritance.clientCount;
        this.registerDate = registerDate;
    }
    get idClientGet() {
        return this.idClient;
    }
    get registerDateGet() {
        return this.registerDate;
    }
    /**
     * @param {any} date
     * @param {any} registerDate
     */
    set registerDateSet( registerDate ) {
        this.registerDate = registerDate;
    }
    message() {
        return `${ super.message() } Datos del Cliente -> El número de cliente es: ${ this.idClient } y la fecha de registro es: ${ this.registerDate }`;
    }
}
// Test PersonTestInheritance
let PersonTestInheritanceOne = new PersonTestInheritance( 'Juanma', 'Molins', 35 );
console.log( PersonTestInheritanceOne.message());
let PersonTestInheritanceTwo = new PersonTestInheritance( 'Carolina', 'Pérez', 38 );
console.log( PersonTestInheritanceTwo.message());
// Test EmployeeTestInheritance
let EmployeeTestInheritanceOne = new EmployeeTestInheritance( 'Juanma', 'Molins', 35, 1600 );
console.log( EmployeeTestInheritanceOne.message());
let EmployeeTestInheritanceTwo = new EmployeeTestInheritance( 'Carolina', 'Pérez', 38, 2000 );
console.log( EmployeeTestInheritanceTwo.message());
// Test ClientTestInheritance
let ClientTestInheritanceOne = new ClientTestInheritance( 'Juanma', 'Molins', 35, new Date());
console.log( ClientTestInheritanceOne.message());
let ClientTestInheritanceTwo = new ClientTestInheritance( 'Carolina', 'Pérez', 38, new Date());
console.log( ClientTestInheritanceTwo.message());