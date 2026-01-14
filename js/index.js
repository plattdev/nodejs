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

// Genera la funcion que muestra dos números aleatorios en los spans correspondientes numIzq y numDer cuando se carga la página (el window)
function generarNumerosAleatorios() {
  const n1 = Math.floor(Math.random() * 101);
  const n2 = Math.floor(Math.random() * 101);
  numIzq.textContent = n1;
  numDer.textContent = n2;
  return { n1, n2 };
}

// Al hacer clic en el botón, generar nuevos números aleatorios
btnNuevosNumeros.addEventListener("click", () => {
  numeros = generarNumerosAleatorios();
  // Limpiar resultados
  resultadoSuma.textContent = "";
  resultadoResta.textContent = "";
  resultadoMulti.textContent = "";
  resultadoDiv.textContent = "";
});

// Inicializar los números cuando el DOM esté listo
let numeros;
document.addEventListener("DOMContentLoaded", () => {
  numeros = generarNumerosAleatorios();

  // Botones de operaciones
  btnSumar.addEventListener("click", () => {
    const resultado = suma(numeros.n1, numeros.n2);
    resultadoSuma.textContent = resultado;
  });

  btnRestar.addEventListener("click", () => {
    const resultado = resta(numeros.n1, numeros.n2);
    resultadoResta.textContent = resultado;
  });

  btnMultiplicar.addEventListener("click", () => {
    const resultado = multiplica(numeros.n1, numeros.n2);
    resultadoMulti.textContent = resultado;
  });

  btnDividir.addEventListener("click", () => {
    try {
      const resultado = divide(numeros.n1, numeros.n2);
      resultadoDiv.textContent = resultado;
    } catch (error) {
      resultadoDiv.textContent = error.message;
    }
  });
});

