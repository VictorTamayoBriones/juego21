/*
-   2C  =   Two of Clubs
-   2D  =   Two of Diamonds
-   2H  =   Two of Hearts
-   2S  =   Two of Spades
*/

let deck    = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0, puntosOmputadora = 0;

//referencias html
const btnPedir = document.querySelector('#btnPedir');
const puntajeHtml = document.querySelectorAll('small');



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

    return carta
}

//pedirCarta();

//esta funcion da el puntaje de cada carta

valorCarta = (carta)=>{
    
    const valor = carta.substring(0, carta.length -1)
    return (isNaN(valor))?
            (valor=== 'A')? 11 : 10
            :valor * 1;
    
}

//Eventos

btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta(carta);
    puntajeHtml[0].innerText=puntosJugador;
    
})