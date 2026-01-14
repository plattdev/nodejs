import { suma, resta, multiplica, divide } from "./function.mjs";

// Obtener referencias a todos los elementos con id del HTML
const numIzq = document.getElementById("numIzq");
const numDer = document.getElementById("numDer");

const btnNuevosNumeros = document.getElementById("btnNuevosNumeros");

const resultadoSuma = document.getElementById("resultadoSuma");
const resultadoResta = document.getElementById("resultadoResta");

const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");

const resultadoMulti = document.getElementById("resultadoMulti");
const resultadoDiv = document.getElementById("resultadoDiv");

const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");

// Cada vez que un usuario refresque la pestaña (window), cambiarán 2 números aleatorios del 0 al 100  con los cuales se harán operaciones de +-*/ cuando cliquen los 4 botones + - *

// Si no tuvieramos funciones importadas, podríamos hacer una clase calculadora con los métodos de sumar, restar, multiplicar y dividir dentro, pero no hacer así porque ya tenemos las funciones en function.mjs


//funcion de un numero aleatorio entre 0 y 99
function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100);
}

//los dos numeros aleatorios los voy a guardar en variables globales para que se puedan usar en las funciones de los botones
let aleatorioIzq = generarNumeroAleatorio();
let aleatorioDer = generarNumeroAleatorio();

numIzq.textContent = aleatorioIzq;
numDer.textContent = aleatorioDer;

//Evento para el boton de nuevos numeros aleatorios
btnNuevosNumeros.addEventListener("click", () => {
  aleatorioIzq = generarNumeroAleatorio();
  aleatorioDer = generarNumeroAleatorio();
  numIzq.textContent = aleatorioIzq;
  numDer.textContent = aleatorioDer;

  //limpiar resultados anteriores
    resultadoSuma.textContent = "";
    resultadoResta.textContent = "";
    resultadoMulti.textContent = "";
    resultadoDiv.textContent = "";
    });

// Eventos para los botones de operaciones
btnSumar.addEventListener("click", () => {
  const resultado = suma(aleatorioIzq, aleatorioDer);
  resultadoSuma.textContent = resultado;
});

btnRestar.addEventListener("click", () => {
  const resultado = resta(aleatorioIzq, aleatorioDer);
  resultadoResta.textContent = resultado;
});

btnMultiplicar.addEventListener("click", () => {
  const resultado = multiplica(aleatorioIzq, aleatorioDer);
  resultadoMulti.textContent = resultado;
});

btnDividir.addEventListener("click", () => {
  try {
    const resultado = divide(aleatorioIzq, aleatorioDer).toFixed(2);
    resultadoDiv.textContent = resultado;
  } catch (error) {
    resultadoDiv.textContent = error.message;
  }
});


