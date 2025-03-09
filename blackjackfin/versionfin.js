// Función para generar una carta aleatoria entre 1 y 10
let generarCarta = () => Math.floor(Math.random() * 10) + 1;

// Función para pedir una opción al usuario con prompt y validarla
let jugarONo = () => {
    let opcion;
    do {
        opcion = parseInt(prompt("¿Deseas jugar al Blackjack?\n1. Sí\n2. No"));
        if (isNaN(opcion) || (opcion !== 1 && opcion !== 2)) {
            alert("Opción no válida. Intenta de nuevo.");
        }
    } while (isNaN(opcion) || (opcion !== 1 && opcion !== 2));
    return opcion;
};

// Función para pedir si el jugador quiere plantarse o tomar otra carta
let PlantarseOTomar = () => {
    let opcion;
    do {
        opcion = parseInt(prompt("¿Deseas plantarte o tomar otra carta?\n1. Plantarse\n2. Tomar otra carta"));
        if (isNaN(opcion) || (opcion !== 1 && opcion !== 2)) {
            alert("Opción no válida. Intenta de nuevo.");
        }
    } while (isNaN(opcion) || (opcion !== 1 && opcion !== 2));
    return opcion;
};

// Función para determinar el ganador del juego
let determinarGanador = (jugadorSum, crupierSum) => {
    switch (true) {
        case (crupierSum > 21):
            alert("El crupier se pasó. ¡Ganaste!");
            break;
        case (jugadorSum > crupierSum):
            alert(`¡Ganaste! ${jugadorSum} contra ${crupierSum}. 🎉`);
            break;
        case (jugadorSum < crupierSum):
            alert(`Perdiste. ${crupierSum} contra ${jugadorSum}. 😭`);
            break;
        default:
            alert(`Empate: ${jugadorSum} a ${crupierSum}. 😲`);
    }
};

// Función principal del juego
let jugarBlackjack = () => {
    let iniciar = jugarONo();
    if (iniciar !== 1) {
        alert("Tal vez en otra ocasión. ¡Hasta luego!");
        return;
    }
    alert("¡Bienvenido al Blackjack!");
    
    let jugadorCarta1 = generarCarta(), jugadorCarta2 = generarCarta();
    let crupierCarta1 = generarCarta(), crupierCarta2 = generarCarta();
    let jugadorSum = jugadorCarta1 + jugadorCarta2;
    let crupierSum = crupierCarta1 + crupierCarta2;
    
    alert(`Jugador recibe: ${jugadorCarta1} y ${jugadorCarta2} (Suma: ${jugadorSum})`);
    alert(`Crupier recibe: ${crupierCarta1} y ?`);
    
    switch (true) {
        case (jugadorSum === 21 && crupierSum === 21):
            alert("Ambos tienen Blackjack. ¡Empate! 😲");
            return;
        case (jugadorSum === 21):
            alert("¡Blackjack para el jugador! Ganaste. 🎉");
            return;
        case (crupierSum === 21):
            alert("El crupier tiene Blackjack. Perdiste. 😭");
            return;
        default:
            alert("El juego sigue, puedes pedir cartas o plantarte.");
    }
    
    let plantado = false;
    while (jugadorSum < 21 && !plantado) {
        let opcion = PlantarseOTomar();
        switch (opcion) {
            case 1:
                alert("Te has plantado.");
                plantado = true;
                break;
            case 2:
                let nuevaCartaJugador = generarCarta();
                jugadorSum += nuevaCartaJugador;
                alert(`Jugador recibe: ${nuevaCartaJugador} (Nueva suma: ${jugadorSum})`);
                break;
        }
    }
    
    if (jugadorSum > 21) {
        alert("Te pasaste de 21. Perdiste. 😭");
        return;
    }
    
    alert(`Crupier revela su segunda carta: ${crupierCarta2} (Suma: ${crupierSum})`);
    alert("El crupier está jugando...");
    while (crupierSum < 17) {
        let nuevaCarta = generarCarta();
        crupierSum += nuevaCarta;
        alert(`Crupier recibe: ${nuevaCarta} (Nueva suma: ${crupierSum})`);
    }
    
    determinarGanador(jugadorSum, crupierSum);
};

jugarBlackjack();

/* Modificaciones realizadas:
   generarCarta()	Genera una carta aleatoria (1 a 10).
jugarONo()	Pregunta si el usuario quiere jugar.
PlantarseOTomar()	Pregunta si el jugador se planta o toma otra carta.
determinarGanador()	Decide quién gana comparando las sumas de cartas.
jugarBlackjack()	Función principal que ejecuta todo el juego.
*/