// Declaración de variables
let numeroSecreto = generaNumeroAleatorio(1, 10);
const btnStart = document.getElementById('btnStart');

// a la escucha de eventos
btnStart.addEventListener('click', validaIntento);

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

function validaIntento() {
    let valorUsuario = parseInt(document.getElementById('valorUsuario').value);
    const elemento = 'parrafo';
    let textSecreto = 'El número secreto es'
    let textMayor = `${textSecreto} mayor`;
    let textMenor = `${textSecreto} menor`;
    let textGanaste = `¡Ganaste! ${textSecreto.toLowerCase()} es ${numeroSecreto}`;

    // Validaciones
    if (numeroSecreto === valorUsuario) {
        asignaTextoElementoId(elemento, textGanaste);
    } else {
        if (valorUsuario > numeroSecreto) {
            asignaTextoElementoId(elemento, textMenor);
        } else {
            asignaTextoElementoId(elemento, textMayor);
            console.log(numeroSecreto)
        }
    }

}

// Agregamos texto al h1 'titulo'
asignaTextoElementoId('titulo', 'Juego del número secreto!');

// Agregamos texto al elemento p 'parrafo'
asignaTextoElementoId('parrafo', 'Ingrese un número del 1 al 10');