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
    set brandSet( brand ) { this.brand = brand; };
}
class MousePcWorld extends InputDevicePcWorld {
    static mouseCount = 0;
    constructor( inputType, brand ) {
        super( inputType, brand );
        this.mouseCountId = ++ MousePcWorld.mouseCount;
    }
    get mouseCountGet() { return this.mouseCount };
    message() {
        return `Mouse ->
        \n Id de producto: ${ this.mouseCountId };
        \n Tipo de entrada: ${ this.inputType };
        \n Marca del producto: ${ this.brand }`
    }
}
class KeyboardPcWorld extends InputDevicePcWorld {
    static keyboardCount = 0;
    constructor( inputType, brand ) {
        super( inputType, brand );
        this.keyboardCountId = ++ KeyboardPcWorld.keyboardCount;
    }
    get keyboardCountGet() { return this.keyboardCount };
    message() {
        return `Teclado ->
        \n Id de producto: ${ this.keyboardCountId };
        \n Tipo de entrada: ${ this.inputType };
        \n Marca del producto: ${ this.brand }`
    }
}
class MonitorPcWorld {
    static monitorCount = 0;
    constructor( brand, size ) {
        this.brand = brand;
        this.size = size;
        this.monitorCountId = ++ MonitorPcWorld.monitorCount;
    }
    get monitorGet() { return this.monitor };
    message() {
        return `Monitor ->
        \n Id de producto: ${ this.monitorCountId };
        \n Marca del producto: ${ this.brand }
        \n El tamaño del producto es: ${ this.size } pulgadas`
    }
}
class ComputerPcWorld {
    static computerCount = 0;
    constructor( name, monitor, keyboard, mouse ) {
        this.name = name;
        this.monitor = monitor;
        this.keyboard = keyboard;
        this.mouse = mouse;
        this.computerCountId = ++ ComputerPcWorld.computerCount;
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
let mouseOne = new MousePcWorld( 'USB', 'Acer' );
let mouseTwo = new MousePcWorld( 'Cable', 'Lenovo' );
let keyboardOne = new KeyboardPcWorld( 'Bluetooth', 'MSI' );
let keyboardTwo = new KeyboardPcWorld( 'USB-C', 'Apple' );
let monitorOne = new MonitorPcWorld( 'Samsung', 24 );
let monitorTwo = new MonitorPcWorld( 'Samsung', 19 );
let computerOne = new ComputerPcWorld( 'Hp', monitorOne.message(), keyboardOne.message(), mouseOne.message());
let computerTwo = new ComputerPcWorld( 'Apple', monitorTwo.message(), keyboardTwo.message(), mouseTwo.message());
console.log( computerOne.message());
console.log( computerTwo.message());
