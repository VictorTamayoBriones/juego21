/*
-   2C  =   Two of Clubs
-   2D  =   Two of Diamonds
-   2H  =   Two of Hearts
-   2S  =   Two of Spades
*/

let deck    = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

// esta funcion crea un nuevo deck
const crearDeck = () => {
    
    for( let i=2; i<=10; i++){
        for(let tipo of tipos){
            deck.push( i + tipo);
        }
    }
    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push( esp + tipo);
        }
    }
    //console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

// esta funcion me permite tomar una carta

const pedirCarta = ()=>{
    if(deck.length===0){
        throw'No hay mas cartas en el deck';
    }
    let carta = deck.pop(); 
    console.log(carta);
    console.log(deck);
    return carta
}

pedirCarta();