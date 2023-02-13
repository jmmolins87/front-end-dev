// Creamos objetos a partir de las clases creadas
const INCOMES = [
    new Income( 'Salario', 1700 ),
    new Income( 'Venta del coche', 2200 )
]
const BILLS = [
    new Bill( 'Alquiler piso', 900 ),
    new Bill( 'Compra ropa', 400 )
]
// *** Cargamos toda la app ***
let appLoad = () => {
    loadHeader();
    LOADINCOMES();
    LOADBILLS();
};
// Recorremos los ingresos
let totalIncomes = () => {
    let totalIncomes = 0;
    for( let income of INCOMES ) {
        totalIncomes += income.value;
    }
    return totalIncomes;
}
// Recorremos los gastos
let totalBills = () => {
    let totalBills = 0;
    for( let bill of BILLS ) {
        totalBills += bill.value;
    }
    return totalBills;
}
// Cargamos los datos de la cabezera
let loadHeader = () => {
    let budget = totalIncomes() - totalBills();
    let billsPercentatge = totalBills() / totalIncomes();
    document.getElementById( 'budget' ).innerHTML = FORMATCURRENCY( budget ); 
    document.getElementById( 'percentage-bills' ).innerHTML = FORMATPERCENTATGE( billsPercentatge ) ;
    document.getElementById( 'income' ).innerHTML = FORMATCURRENCY( totalIncomes());
    document.getElementById( 'bills' ).innerHTML =  FORMATCURRENCY( totalBills());
}
// Formateamos la moneda y el porcentaje
const FORMATCURRENCY = ( value ) => {
    return value.toLocaleString( 'es-ES',{
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
    })
}
const FORMATPERCENTATGE = ( value ) => {
    return value.toLocaleString( 'es-ES', {
        style: 'percent',
        minimumFractionDigits: 2
    })
}
// Cargamos los ingresos en la lista
const LOADINCOMES = () => {
    let incomeHtml = '';
    for( let income of INCOMES ) {
        incomeHtml += CREATEINCOMESHTML( income );
    }
    document.getElementById( 'income-list' ).innerHTML = incomeHtml;
}
const CREATEINCOMESHTML = ( income ) => {
    let incomeHTML = `
    <li class="element clean-styles no-styles-list">
        <span class="element-description">${ income.description }</span>
        <div class="right clean-styles">
            <span class="element-value">${ FORMATCURRENCY( income.value )}</span>
            <div class="element-delete">
                <button onclick="deleteIncome(${ income.id })" class="element-delete--btn">
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            </div>
        </div>
    </li>
    `
    return incomeHTML;
}
// Cargamos los gastos en la lista
const LOADBILLS = () => {
    let billHtml = '';
    for( let bill of BILLS ) {
        billHtml += CREATEBILLSHTML( bill );
    }
    document.getElementById( 'bills-list' ).innerHTML = billHtml;
}
const CREATEBILLSHTML = ( bill ) => {
    let billHtml = `
    <li class="element clean-styles no-styles-list">
        <span class="element-description">${ bill.description }</span>
        <div class="right clean-styles">
            <span class="element-value">${ FORMATCURRENCY( bill.value )}</span>
            <span class="element-percentatge">${ FORMATPERCENTATGE( bill.value / totalBills())}</span>
            <div class="element-delete">
                <button onclick="deleteBill(${ bill.id })" class="element-delete--btn">
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            </div>
        </div>
    </li>
    `;
    return billHtml;
}
// Borrar ingreso de la lista
const deleteIncome = ( id ) => {
    let deleteIndex = INCOMES.findIndex( income => income.id === id );
    INCOMES.splice( deleteIndex, 1 );
    loadHeader();
    LOADINCOMES();
}
// Borrar gastos de la lista
const deleteBill = ( id ) => {
    let deleteIndex = BILLS.findIndex( bill => bill.id === id );
    BILLS.splice( deleteIndex, 1 );
    loadHeader();
    LOADBILLS();
}
// Agregamos un ingreso o un gasto
let addData = () => {
    let form = document.forms[ 'form' ];
    let type = form[ 'type' ];
    let description = form[ 'description' ];
    let value = form[ 'value' ];
    if( description.value !== '' && value.value !== '' ) {
        if( type.value === 'income' ) {
            INCOMES.push(  new Income( description.value, +value.value ));
            loadHeader();
            LOADINCOMES();
        } else if( type.value === 'bill' ) {
            BILLS.push( new Bill( description.value, +value.value ));7
            loadHeader();
            LOADBILLS();
        }
    }
}