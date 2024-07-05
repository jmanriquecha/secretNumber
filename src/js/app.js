// Declaración de variables


// Declaramos las funciones

// Funcion que asigna texto a un elemento por su ID
function asignaTextoElementoId(id, texto) {
    let elementoId = document.getElementById(id);
    elementoId.innerHTML = texto;
}

// Agregamos texto al h1 'titulo'
asignaTextoElementoId('titulo', 'Juego del número secreto!');

// Agregamos texto al elemento p 'parrafo'
asignaTextoElementoId('parrafo', 'Ingrese un número del 1 al 10');