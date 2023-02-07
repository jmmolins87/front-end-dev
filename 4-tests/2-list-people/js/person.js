class People {
    constructor( name, surname ) {
        this.name = name;
        this.surname = surname;
    }
    get nameGet() { return this.name; }
    /**
     * @param {any} name
     */
    set nameSet( name ) { this.name = name; }
    get surnameGet() { return this.surname; }
    /**
     * @param {any} surname
     */
    set surnameSet( surname ) { this.surname = surname; }
}