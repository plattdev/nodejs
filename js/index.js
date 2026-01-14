import { suma , resta , multiplica , divide } from '../function.mjs'

// Obtener referencias a todos los elementos con id del HTML
const numIzq = document.getElementById('numIzq');
const numDer = document.getElementById('numDer');

const btnNuevosNumeros = document.getElementById('btnNuevosNumeros');

const resultadoSuma = document.getElementById('resultadoSuma');
const resultadoResta = document.getElementById('resultadoResta');

const btnSumar = document.getElementById('btnSumar');
const btnRestar = document.getElementById('btnRestar');

const resultadoMulti = document.getElementById('resultadoMulti');
const resultadoDiv = document.getElementById('resultadoDiv');

const btnMultiplicar = document.getElementById('btnMultiplicar');
const btnDividir = document.getElementById('btnDividir');

// Cada vez que un usuario refresque la pestaña (window), cambiarán 2 números aleatorios del 0 al 100  con los cuales se harán operaciones de +-*/ cuando cliquen los 4 botones + - * 

// Si no tuvieramos funciones importadas, podríamos hacer una clase calculadora con los métodos de sumar, restar, multiplicar y dividir dentro, pero no hacer así porque ya tenemos las funciones en function.mjs

//colocación de los números aleatorios en función de su id cuando se carga la página

