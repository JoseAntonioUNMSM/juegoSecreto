let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez.' : 'veces.'}`);
        //Eliminar el disabled del boton
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número es menor.');
        }else {
        asignarTextoElemento('p', 'El número es mayor.');
    }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo + 1); // Genera un número entre 1 y 10

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("Ya se sortearon todos los números posibles.")
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto;
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    // Inicializar el juego
    asignarTextoElemento('h1', 'Juego del número secreto.');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
    //  Limpiar la caja
    limpiarCaja();
    condicionesIniciales();
    // Deshabilitar el boton de nuevo juego
    // Establecer la condición 
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();



