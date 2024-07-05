// Declaración de variables
let numeroSecreto = generaNumeroAleatorio(1, 10);

// Declaramos las funciones

// Funcion que asigna texto a un elemento por su ID
function asignaTextoElementoId(id, texto) {
    let elementoId = document.getElementById(id);
    elementoId.innerHTML = texto;
}

/**
 * 
 * @param {int} min 
 * @param {int} max 
 * @returns int
 */
function generaNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min) + 1;
}

// Agregamos texto al h1 'titulo'
asignaTextoElementoId('titulo', 'Juego del número secreto!');

// Agregamos texto al elemento p 'parrafo'
asignaTextoElementoId('parrafo', 'Ingrese un número del 1 al 10');