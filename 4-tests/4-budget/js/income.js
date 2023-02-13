class Income extends Data {
    static incomesCount = 0;
    constructor( description, value ) {
        super( description, value );
        this.id = ++ Income.incomesCount;
    }
    get idGet() { return this.id; }
}