class InputDevicePcWorld {
    static inputDeviceCount = 0;
    constructor( inputType, brand ) {
        this.inputDeviceCountId = ++ InputDevicePcWorld.inputDeviceCount;
        this.inputType = inputType;
        this.brand = brand;
    }
    get inputTypeGet() { return this.inputType; }
    /**
     * @param {any} inputType
     */
    set inputTypeSet( inputType ) { this.inputType = inputType };
    get brandGet() { return this.brand; }
    /**
     * @param {any} brand
     */
    set brandSet( brand ) { this.brand = brand; }
}
class MouseDevicePcWorld extends InputDevicePcWorld {
    static mouseDeviceCount = 0;
    constructor( inputType, brand ) {
        super( inputType, brand );
        this.mouseDeviceCountId = ++ MouseDevicePcWorld.mouseDeviceCount;
    }
    get mouseDeviceCountIdGet() { return this.mouseDeviceCountId };
    message() {
        return `Características del Mouse ->
        \n El id del producto es: ${ this.mouseDeviceCountId };
        \n El tipo de entrada es: ${ this.inputType };
        \n Su marca es: ${ this.brand }`
    }
}
let mouseOne = new MouseDevicePcWorld( 'USB', 'Acer' );
let mouseTwo = new MouseDevicePcWorld( 'Bluetooth', 'Apple' );
class KeyboardDevicePcWorld extends InputDevicePcWorld {
    static keyboardDeviceCount = 0;
    constructor( inputType, brand ) {
        super( inputType, brand );
        this.keyboardDeviceCountId = ++ KeyboardDevicePcWorld.keyboardDeviceCount;
    }
    get keyboardDeviceCountIdGet() { this.inputDeviceCountId };
    message() {
        return `Características del Teclado ->
        \n El id del producto es: ${ this.keyboardDeviceCountId };
        \n El tipo de entrada es: ${ this.inputType };
        \n Su marca es: ${ this.brand }`
    }
}
let keyboardOne = new KeyboardDevicePcWorld( 'Bluetooth', 'MSI' );
let keyboardTwo = new KeyboardDevicePcWorld( 'Bluetooth', 'Apple' );
class MonitorDevicePcWorld {
    static monitorDeviceCount = 0;
    constructor( brand, size ) {
        this.brand = brand;
        this.size = size;
        this.monitorDeviceCountId = ++ MonitorDevicePcWorld.monitorDeviceCount;
    }
    get monitorDeviceCountIdGet() { return this.monitorDeviceCountId; }
    message() {
        return `Características del Teclado ->
        \n El id del producto es: ${ this.monitorDeviceCountId };
        \n Su marca es: ${ this.brand };
        \n Tiene un tamaño de: ${ this.size } pulgadas`
    }
}
let monitorOne = new MonitorDevicePcWorld ('Samsung', '19' );
let monitorTwo = new MonitorDevicePcWorld ('LG', '21' );
class ComputerPcWorld {
    static computerCount = 0;
    constructor( name, monitor, mouse, keyboeard ) {
        this.computerCountId = ++ ComputerPcWorld.computerCount;
        this.name = name;
        this.monitor = monitor;
        this.mouse = mouse;
        this.keyboeard = keyboeard;
    }
    message() {
        return `Ordenador ->
        \n Id de producto: ${ this.computerCountId };
        \n La marca de nuestro ordenador es: ${ this.name }
        \n ${ this.monitor }
        \n ${ this.keyboard }
        \n ${ this.mouse }`
    }
}
let computerOne = new ComputerPcWorld( 'Apple', mouseOne.message(), keyboardOne.message(), monitorOne.message());
let computerTwo = new ComputerPcWorld( 'Apple', mouseTwo.message(), keyboardTwo.message(), monitorTwo.message());
class OrderPcWorld {
    static orderCount = 0;
    constructor() {
        this.orderCountId = OrderPcWorld.orderCount;
        this.computers = [];
    }
    get inOrder() { return this.orderCountId; }
    addComputers( computer ) {
        this.computers.push( computer );
    }
    showOrders() {
        let computerOrder = '';
        for( let computer of this.computers ) {
            computerOrder += `\n ${ computer }`
        }
        console.log( `Orden: ${ this.order }, computadoras: ${ this.computerOrder }` );
    }
}
let orderOne = new OrderPcWorld( );
orderOne.addComputers( computerOne );
orderOne.addComputers( computerTwo );
console.log( orderOne );