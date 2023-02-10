class Income extends Data {
    static incomeCount = 0;
    constructor( description, value ) {
        super( description, value );
        this.id = ++ Income.incomeCount;
    }
    get idGet() { return this.id; }
}