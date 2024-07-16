// Declaración de variables
const btnStart = document.getElementById('btnStart');
const btnReiniciar = document.getElementById('btnReiniciar');
const txtValorUsuario = document.getElementById('valorUsuario');
let intentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = [];
const numMin = 1;
const numMax = 10;

// a la escucha de eventos
btnStart.addEventListener('click', validaIntento);
btnReiniciar.addEventListener('click', reiniciarJuego);

// Declaramos las funciones

// Funcion que asigna texto a un elemento por su ID
function asignaTextoElementoId(id, texto) {
    let elementoId = document.getElementById(id);
    elementoId.innerHTML = texto;
    return;
}

/**
 * 
 * @param {int} min 
 * @param {int} max 
 * @returns int
 */
function generaNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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
    asignaTextoElementoId('parrafo', `Ingrese un número del ${numMin} al ${numMax}`);

    // Genera nuevo número secreto
    numeroSecreto = generaNumeroSecreto();
}

/**
 * Genera número secreto
 * @returns int
 */
function generaNumeroSecreto() {
    let numeroGenerado = generaNumeroAleatorio(numMin, numMax);
    // Si ya sorteamos todos los números
    if ((listaNumerosSorteados.length) === numMax) {
        asignaTextoElementoId('parrafo', 'Ya se sortearon todos los números posibles!');
        // Deshabilita boton
        habilitaElemento(btnStart);
        // Deshabilita input
        habilitaElemento(txtValorUsuario);
    } else {
        // si el número generado no se encuentra en el array
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generaNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
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