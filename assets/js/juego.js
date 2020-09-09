/*
-   2C  =   Two of Clubs
-   2D  =   Two of Diamonds
-   2H  =   Two of Hearts
-   2S  =   Two of Spades
*/

let deck    = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0, puntosComputadora = 0;

//referencias html
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const puntajeHtml = document.querySelectorAll('small');
const cartaJugador = document.querySelector('#jugador-cartas');
const cartaComputadora = document.querySelector('#computadora-cartas');


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

const turnoComputadora = (puntosMinimos) => {
    
    do {
    const carta = pedirCarta();
    
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntajeHtml[1].innerText=puntosComputadora;

    //Insertar la carta
    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    cartaComputadora.append(imgCarta);
        if(puntosJugador===21){
            break;
        }
    } while ((puntosComputadora<puntosMinimos) && (puntosMinimos<=21));

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos){
            alert('Nadie gana');
        }else if(puntosMinimos>21){
            alert('Computadora gana');
        }else if(puntosComputadora >21){
            alert('Jugador gana');
        }else{
            alert('Computadora gana');
        }
    }, 500);
}



//Eventos

btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta(carta);
    puntajeHtml[0].innerText=puntosJugador;

    //Insertar la carta
    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    cartaJugador.append(imgCarta);

    //bloquear los botones
    if(puntosJugador>21){
        console.warn('Perdiste');
        btnPedir.disabled=true;
        btnDetener.disabled=true;
        turnoComputadora(puntosJugador);
    }else if(puntosJugador===21){
        console.warn('21, ganaste');
        alert('21, Ganaste')
        btnPedir.disabled=true;
        btnDetener.disabled=true;
    }
    
});

btnDetener.addEventListener('click', ()=>{
    btnPedir.disabled=true;
    btnDetener.disabled=true;
    turnoComputadora(puntosJugador);
})

btnNuevo.addEventListener('click', ()=>{
    
    console.clear();
    deck = [];
    crearDeck();
    puntosJugador=0;
    puntosComputadora=0;

    puntajeHtml[0].innerText=0;
    puntajeHtml[1].innerText=0;

    cartaJugador.innerHTML = '';
    cartaComputadora.innerHTML = '';

    btnPedir.disabled=false;
    btnDetener.disabled=false;

})