// Blackjack básico con alert, prompt, estructura de control switch y ciclos

// En este caso, como usamos el prompt, necesitamos de HTML ya que no se muestra en la consola.
do {
    iniciar = parseInt(prompt("¿Deseas jugar al Blackjack?\n1. Sí\n2. No"));

    if (isNaN(iniciar) || (iniciar !== 1 && iniciar !== 2)) {
        alert("Opción no válida. Selecciona 1 o 2.");
    }
} while (isNaN(iniciar) || (iniciar !== 1 && iniciar !== 2)); // Creamos este ciclo para que el usuario ingrese si quiere jugar o no, y luego se evalúe

// Si el usuario quiere jugar, iniciamos
if (iniciar === 1) { //se ejecuta toda esta parte del código si el usuario dice que sí quiere jugar
    alert("¡Bienvenido al Blackjack!");

    // Se generan cartas aleatorias para el jugador y el crupier con valores entre 1 y 10
    let jugadorCarta1 = Math.floor(Math.random() * 10) + 1;
    let jugadorCarta2 = Math.floor(Math.random() * 10) + 1;
    let crupierCarta1 = Math.floor(Math.random() * 10) + 1;
    let crupierCarta2 = Math.floor(Math.random() * 10) + 1;

    // Se suman las cartas para saber cuánto tiene cada uno
    let jugadorSum = jugadorCarta1 + jugadorCarta2;
    let crupierSum = crupierCarta1 + crupierCarta2;

    // Mostrar las cartas iniciales de cada uno
    alert(`Jugador recibe: ${jugadorCarta1} y ${jugadorCarta2} (Suma: ${jugadorSum})`);
    alert(`Crupier recibe: ${crupierCarta1} y ?`);

    /* Reglas básicas: Si alguien tiene 21 de una, gana al instante.
       En esta parte del código, la modificación que se realizó fue reemplazar la estructura de control if-else por switch-case.
       Se hace uso de true en la condición del switch porque el switch por sí solo no deja agregar condiciones en los case.
       El switch por lo general compara valores exactos.
    */
    switch (true) {
        case (jugadorSum === 21 && crupierSum === 21):
            alert("Ambos tienen Blackjack. ¡Empate! 😲"); 
            break;
        case (jugadorSum === 21):
            alert("¡Blackjack para el jugador! Ganaste. 🎉");
            break;
        case (crupierSum === 21):
            alert("El crupier tiene Blackjack. Perdiste. 😭");
            break;
        default:
            alert("El juego sigue, puedes pedir cartas o plantarte.");
    }

    // Si no hay blackjack inicial y la suma es menor a 21, el jugador decide si pedir carta o plantarse
    let plantarseocarta;
    let plantado = false; /*Cuando el jugador selecciona la opción 1. Plantarse, la variable plantado cambia a true.
    Después, en la condición del while, esta variable se usa para que el jugador ya no pueda seguir pidiendo más cartas. */

    while (jugadorSum < 21 && !plantado) {
        plantarseocarta = parseInt(prompt("¿Deseas plantarte o tomar otra carta?\n1. Plantarse\n2. Tomar otra carta"));

        switch (plantarseocarta) {
            case 1: // Plantarse
                alert("Te has plantado.");
                plantado = true; // Se cambia la condición para salir del while
                break;

            case 2: // Tomar carta
                let nuevaCartaJugador = Math.floor(Math.random() * 10) + 1;
                jugadorSum += nuevaCartaJugador;
                alert(`Jugador recibe: ${nuevaCartaJugador} (Nueva suma: ${jugadorSum})`);
                break;

            default:
                alert("Opción inválida. Escribe '1' o '2'.");
        }
    }

    // Si el jugador se pasa de 21, se muestra el mensaje final
    switch (true) {
        case (jugadorSum > 21):
            alert("Te pasaste de 21. Perdiste.😭");
            break;
        default:

            // Ahora algo parecido pero con el crupier, no se le coloca prompt porque es nuestro oponente
            alert(`Crupier revela su segunda carta: ${crupierCarta2} (Suma: ${crupierSum})`);
            alert("El crupier está jugando...");
            
            while (crupierSum < 17) {
                let nuevaCarta = Math.floor(Math.random() * 10) + 1;
                crupierSum += nuevaCarta;
                alert(`Crupier recibe: ${nuevaCarta} (Nueva suma: ${crupierSum})`);
            }

            // Ahora sí, ver quién gana
            // La modificación que se hizo fue cambiar la estructura de control if-else por switch
            switch (true) {
                case (crupierSum > 21): // Si el crupier se pasa, gana el jugador
                    alert("El crupier se pasó. ¡Ganaste!");
                    break;
                case (jugadorSum > crupierSum): // Si el jugador tiene más puntos
                    alert(`¡Ganaste! ${jugadorSum} contra ${crupierSum}.🎉`);
                    break;
                case (jugadorSum < crupierSum): // Si el crupier tiene más puntos
                    alert(`Perdiste. ${crupierSum} contra ${jugadorSum}.😭`);
                    break;
                default: // Si tienen la misma cantidad de puntos
                    alert(`Empate: ${jugadorSum} a ${crupierSum}.😲`);
            }
    }
} else {
    alert("Tal vez en otra ocasión. ¡Hasta luego!"); //esta respuesta es si digamos no quiere desde un principio jugar
}

/* Modificaciones realizadas:
   - Cambiar los console.log por alert.
   - Cambiar la estructura de control if-else por switch.
   - Agregar ciclos para repetir una condición.
   - Agregar prompt para pedirle al usuario si desea jugar, también para si desea plantarse o tomar una carta.
   - Vincular este archivo a un HTML.
*/