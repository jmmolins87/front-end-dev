const INCOMES = [
    new Income( 'Salario', 2100 ),
    new Income( 'Venta coche', 1500 )
];
const BILLS = [
    new Bill( 'Alquiler piiso', 900 ),
    new Bill( 'Compra ropa', 400 )
];

let appLoad = () => {
    loadHeader();
}
let totalIncomes = () => {
    let totalIncomes = 0;
    for( let income of INCOMES ) {
        totalIncomes += income.value;
    }
    return totalIncomes;
}
let totalBills = () => {
    let totalBills = 0;
    for( let bill of BILLS ) {
        totalBills += bill.value;
    }
    return totalBills;
}
let loadHeader = () => {
    let budget = totalIncomes() - totalBills();
    let percentatge = totalBills() / totalIncomes();
    document.getElementById( 'budget' ).innerHTML = CURRENCYFORMAT( budget );
    document.getElementById( 'percentage-bills' ).innerHTML = PERCENTATGEFORMAT( percentatge );
    document.getElementById( 'income' ).innerHTML = CURRENCYFORMAT( totalIncomes());
    document.getElementById( 'bills').innerHTML = CURRENCYFORMAT( totalBills());
}

const CURRENCYFORMAT = ( value ) => {
    return value.toLocaleString( 'es-ES', { style: 'currency', currency: 'EUR', minmunFractionDigits: 2 });
}
const PERCENTATGEFORMAT = ( value ) => {
    return value.toLocaleString( 'es-ES', { style: 'percent', minmunFractionDigits: 2 });
}