
import {shuffle} from 'underscore';
// Esta función crea un nuevo deck\
let deck= [];
/**
 * 
 * @param {Array<String>} tipos ejemplo ['C','D','H','S'];
 * @param {Array<String>} especiales ejemplo ['A','J','Q','K'];
 * @returns {Array} retorna un nuevo deck
 */
 export const crearDeck = (tipos, especiales) => {
if(!tipos || tipos.length===0) throw new Error('Tipos de carta es obligatorio');
if(!especiales || especiales.length===0) throw new Error('Tipos de cartas especiales es obligatorio')
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }

    deck = shuffle( deck );
    return deck;
}
