class EmployeePOO {
    constructor( name, salary ) {
        this.name = name;
        this.salary = salary;
    }
    get nameGet() { return this.name; }
    /**
     * @param {any} name
     */
    set nameSet( name ) { this.name = name; }
    get salaryGet() { return this.salary };
    /**
     * @param {any} salary
     */
    set salarySet( salary ) { this.salary = salary };
    getDetails() {
        return `Datos del empleado -> 
        \n Nombre: ${ this.name } 
        \n Salario: ${ this.salary } €`
    }
}
let employeeOne = new EmployeePOO( 'Juanma', 1650 );
console.log( employeeOne.getDetails());
class ManagerPOO extends EmployeePOO {
    constructor( name, salary, department ) {
        super( name, salary );
        this.department = department;
    }
    get departmentGet() { return this.department; }
    getDetails() {
        return `${ super.getDetails() }
        \n Departamento: ${ this.department }`
    }
}
let managerOne = new ManagerPOO( 'Carolina', 2000, 'Ventas' );
let managerTwo = new ManagerPOO( 'Luís', 1500, 'Educación')
console.log( managerOne.getDetails());
// Poliformismo
function print( type ) {
    console.log( type.getDetails());
}
print( employeeOne );
print( managerOne );
print( managerTwo );