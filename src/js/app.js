// Declaración de variables
const btnStart = document.getElementById('btnStart');
const btnReiniciar = document.getElementById('btnReiniciar');
const txtValorUsuario = document.getElementById('valorUsuario');
let intentos = 0;
let numeroSecreto = 0;

// a la escucha de eventos
btnStart.addEventListener('click', validaIntento);
btnReiniciar.addEventListener('click', reiniciarJuego);

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
    let valorUsuario = parseInt(txtValorUsuario.value);
    const elemento = 'parrafo';
    let textSecreto = 'El número secreto es'
    let textMayor = `${textSecreto} mayor`;
    let textMenor = `${textSecreto} menor`;
    let textGanaste = `¡Ganaste! ${textSecreto.toLowerCase()} es ${numeroSecreto}, Lo hiciste en ${intentos} ${(intentos > 1) ? 'veces' : 'vez'}`;

    // Validaciones
    if (numeroSecreto === valorUsuario) {
        asignaTextoElementoId(elemento, textGanaste);
        // Habilita el boton 'Nuevo Juego'
        habilitaElemento(btnReiniciar, false);
        // Deshabilita input
        habilitaElemento(txtValorUsuario);
        // Deshabilita bonon intentar
        habilitaElemento(btnStart);
    } else {
        if (valorUsuario > numeroSecreto) {
            asignaTextoElementoId(elemento, textMenor);
        } else {
            asignaTextoElementoId(elemento, textMayor);
        }
        // Limpia caja y deja el cursor en el input
        limpiarCaja(txtValorUsuario);

        // incrementa los intentos
        intentos++
    }
}

// Reinicia juego
function reiniciarJuego() {
    // Reestablece a valores por defecto
    valoresPorDefecto();
}

/**
 * Función para limpiar caja
 * @param {input} elemento 
 */

function limpiarCaja(elemento) {
    // borra el valor del input
    elemento.value = '';

    // Deja el cusor en el input
    elemento.focus();
}

/**
 * Valores predeterminados del programa
 */
function valoresPorDefecto() {
    // Reinicia intento a 1
    intentos = 1;

    // Genera nuevo número secreto
    numeroSecreto = generaNumeroSecreto();
    // Cargamos mensajes iniciales

    // Habilita input
    habilitaElemento(txtValorUsuario, false);

    // limpia caja
    limpiarCaja(txtValorUsuario);

    // deshabilita boton 
    habilitaElemento(btnReiniciar);

    // Habilita bonon start
    habilitaElemento(btnStart, false);

    // Agregamos texto al h1 'titulo'
    asignaTextoElementoId('titulo', 'Juego del número secreto!');

    // Agregamos texto al elemento p 'parrafo'
    asignaTextoElementoId('parrafo', 'Ingrese un número del 1 al 10');
}

/**
 * Genera número secreto
 * @returns int
 */
function generaNumeroSecreto() {
    const min = 1;
    const max = 10;
    return generaNumeroAleatorio(min, max);
}

/**
 * Por defecto op = true
 * 
 * @param {disabled} elemento 
 * @param {boolean} op 
 */
function habilitaElemento(elemento, op = true) {
    (op === true) ? elemento.disabled = true : elemento.disabled = false;
}

valoresPorDefecto();