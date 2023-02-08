function showTime() {
    // ** Time **
    const DATE = new Date();
    let hour = TIMEFORMAT( DATE.getHours());
    let mins = TIMEFORMAT( DATE.getMinutes());
    let secs = TIMEFORMAT( DATE.getSeconds());
    let completeTime = `${ hour }:${ mins }:${ secs }`;
    document.getElementById( 'time' ).innerHTML = completeTime;

    // ** Date **
    const MONTHS = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
    const DAYS = [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ];
    let daysWeek = DAYS[ DATE.getDay() -1 ];
    let day = DATE.getDate();
    let month = MONTHS[ DATE.getMonth()];
    let completeDate = `${ daysWeek }, ${ day } de ${ month }`;
    document.getElementById( 'date' ).innerHTML = completeDate;
}

setInterval( showTime, 1000 );
const TIMEFORMAT = ( time ) => {
    if( time < 10 ) {
        time = '0' + time;
    }
    return time;
}