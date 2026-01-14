//simulacion del comportamiento  de monohilo en nodejs
//Módulo de node.js de lectura y escritura de archivos
//Fileystem (fs) es el módulo nartivo de node.js para trabajar con el sistema de archivos

const fs = require("node:fs");

//SÍNCRONAS

//Esto nos permite leer un archivo con JS en node.js, de otra manera no podríamos leer un archivo con JS

//Lectura del primer archivo de manera SÍNCRONA
//De manera síncrónica o síncrona: inicio de lectura, te leo , te paso por consola y fin de lectura sincrónica
console.log("Inicio de la lectura sincrónica UNO");
const datosSincronosUno = fs.readFileSync("archivos/lectura1.txt", "utf-8");
console.log("Datos leídos sincrónicamente UNO: ", datosSincronosUno);
console.log("Fin de la lectura sincrónica UNO");
console.log("\n" + "*".repeat(50));
console.log("-----------------------------------");

//Lectura del segundo archivo de manera SÍNCRONA
//De manera síncrónica o síncrona: inicio de lectura, te leo , te paso por consola y fin de lectura sincrónica
console.log("Inicio de la lectura sincrónica DOS");
const datosSincronosDos = fs.readFileSync("archivos/lectura2.txt", "utf-8");
console.log("Datos leídos sincrónicamente DOS: ", datosSincronosDos);
console.log("Fin de la lectura sincrónica DOS");

console.log("===================================");
