class Bill extends Data {
    static billsCount = 0;
    constructor( description, value ) {
        super( description, value );
        this.id = ++ Bill.billsCount;
    }
    get idGet() { return this.id; }
}