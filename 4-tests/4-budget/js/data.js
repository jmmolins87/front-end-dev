class Data {
    constructor( description, value ) {
        this.description = description;
        this.value = value;
    }
    get descriptionGet() { return this.description; }
    /**
     * @param {any} description
     */
    set descriptionSet( description ) { this.description = description; }
    get valueGet() { return this.value; }
    /**
     * @param {any} value
     */
    set valueSet( value ) { this.value = value; }
}