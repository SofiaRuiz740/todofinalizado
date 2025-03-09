//Blackjack básico, primera version con if y else 

//Recordar en el terminal colocar node y el nombre de este archivo.js

// Se generan cartas aleatorias para el jugador y el crupier con valores entre 1 y 10
let jugadorCarta1 = Math.floor(Math.random() * 10) + 1;
let jugadorCarta2 = Math.floor(Math.random() * 10) + 1;
let crupierCarta1 = Math.floor(Math.random() * 10) + 1;
let crupierCarta2 = Math.floor(Math.random() * 10) + 1;

// Se suman las cartas para saber cuánto tiene cada uno
let jugadorSum = jugadorCarta1 + jugadorCarta2;
let crupierSum = crupierCarta1 + crupierCarta2;

console.log("¡Bienvenido al Blackjack!"); // Todo lo que aparece en console.log se muestra en la consola de Visual Studio Code.

//Mostrar las cartas iniciales de cada uno 
console.log(`Jugador recibe: ${jugadorCarta1} y ${jugadorCarta2} (Suma: ${jugadorSum})`);
console.log(`Crupier recibe: ${crupierCarta1} y ${crupierCarta2} (Suma: ${crupierSum})`);

// Reglas básicas: Si alguien tiene 21 de una, gana al instante
if (jugadorSum === 21 || crupierSum === 21) {
    if (jugadorSum === 21 && crupierSum === 21) {
        console.log("Ambos tienen Blackjack. ¡Empate! 😲");
    } else if (jugadorSum === 21) {
        console.log("¡Blackjack para el jugador! Ganaste. 🎉");
    } else {
        console.log("El crupier tiene Blackjack. Perdiste. 😭");
    }
} else {
    // La condicion para pedir carta automáticamente (el jugador solo puede si tiene 16 o menos)
    if (jugadorSum <= 16) {
        let nuevaCartaJugador = Math.floor(Math.random() * 10) + 1;
        jugadorSum += nuevaCartaJugador;//suma y asigna lo que ya tenia con el resultado de esta nueva carta
        console.log(`Jugador pide carta: ${nuevaCartaJugador} (Nueva suma: ${jugadorSum})`);
    } else {
        console.log(`Jugador se planta con ${jugadorSum}.`);
    }

    // El crupier también puede si tiene 16 o menos
    if (crupierSum <= 16) {
        let nuevaCartaCrupier = Math.floor(Math.random() * 10) + 1;
        crupierSum += nuevaCartaCrupier; 
        console.log(`Crupier pide carta: ${nuevaCartaCrupier} (Nueva suma: ${crupierSum})`);
    } else {
        console.log(`Crupier se planta con ${crupierSum}.`);
    }

    // Ahora sí, ver quién gana 
    if (jugadorSum > 21) {
        console.log("Te pasaste de 21. Perdiste. 💀");
    } else if (crupierSum > 21) {
        console.log("El crupier se pasó. ¡Ganaste! 🏆");
    } else if (jugadorSum > crupierSum) {
        console.log(`¡Ganaste! Tu ${jugadorSum} es mayor que ${crupierSum}. 🎊`);
    } else if (jugadorSum < crupierSum) {
        console.log(`Perdiste. El crupier gana con ${crupierSum} contra ${jugadorSum}. 😔`);
    } else {
        console.log(`Empate: ${jugadorSum} a ${crupierSum}. 😐`);
    }
}
