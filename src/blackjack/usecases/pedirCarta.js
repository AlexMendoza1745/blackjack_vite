
export const pedirCarta = (deck) => {
console.log(deck.length);
console.log(deck);
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
