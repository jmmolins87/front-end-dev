class ProductSales {
    static productCount = 0;
    constructor( name, price ) {
        this.id = ++ ProductSales.productCount;
        this.name = name;
        this.price = price;
    }
    get idGet() { return this.id; }
    get nameGet() { return this.name; }
    /**
     * @param {any} name
     */
    set nameSet( name ) { this.name = name; }
    get priceGet() { return this.price; }
    /**
     * @param {any} price
     */
    set priceSet( price ) { this.price = price; }
    message() {
        return `- Id del producto: ${ this.id }; Nombre del producto: ${ this.name }; Precio del producto: ${ this.price }€.\n`;
    }
}
let productOne = new ProductSales( 'Pantalón', 200 );
let productTwo = new ProductSales( 'Camisa', 270 );
let productThree = new ProductSales( 'Camiseta', 45 );
console.log( productOne.message(), productTwo.message(), productThree.message() );
class OrderSales {
    static orderCount = 0;
    static get MAX_PRODUCTS() { return 5; }
    constructor() {
        this.idOrder = ++ OrderSales.orderCount;
        this.productsSales = [];
        this.addProductsCount = 0;
    }
    get idOrderGet() { return this.idOrder; }
    get addProductsCountGet() { return this.addProductsCount; }
    addProducts( addProductsCount ) { 
        if( this.productsSales.length < OrderSales.MAX_PRODUCTS ) {
            this.productsSales.push( addProductsCount );
            // this.productsSales[ this.addProductsCount ++ ];
        } else {
            console.log( `No se pueden agregar más productos` );
        }
    }
    calculateTotal() {
        let totalSales = 0;
        for( let product of this.productsSales ) {
            totalSales += product.price;
        }
        return totalSales;
    }
    showOrder() {
        let orderProducts = '';
        for( let product of this.productsSales ) {
            orderProducts += product.message();
        }
        console.log( `Orden: ${ this.idOrder }; \n Total: ${ this.calculateTotal() }; \n Productos: ${ this.orderProducts }` );
    }
}
let orderOne = new OrderSales();
orderOne.addProducts( productOne );
orderOne.addProducts( productTwo );
orderOne.addProducts( productThree );
orderOne.showOrder();