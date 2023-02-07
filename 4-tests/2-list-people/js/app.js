const people = [
    new People( 'Juanma', 'Molins' ),
    new People( 'Carolina', 'Pérez' )
];

function showPeople() {
    let text = '';
    for( person of people ) {
        text += `<li>${ person.name } ${ person.surname }</li>`
    }
    console.log( person );
    document.getElementById( 'people' ).innerHTML = text;
}

function addPerson() {
    const form = document.getElementById( 'form' );
    const name = form[ 'name' ];
    const surname = form[ 'surname'];
    const person = new People( name.value, surname.value );
    console.log( person );
    people.push( person );
    showPeople();
}