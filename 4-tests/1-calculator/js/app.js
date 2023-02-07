function add() {
    const form = document.getElementById( 'form' );
    let opA = form[ 'opA' ];
    let opB = form[ 'opB' ];
    let result = parseInt( opA.value ) + parseInt( opB.value );
    if( isNaN( result )) {
        result = `La operación no incluye números`;
        document.getElementById( 'result' ).style.color = "red";
    } else {
        document.getElementById( 'result' ).style.color = 'black';
    }
    document.getElementById( 'result' ).style.fontSize = 20 + 'px';
    document.getElementById( 'result' ).innerHTML = result;
}