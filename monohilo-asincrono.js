//simulacion del comportamiento  de monohilo en nodejs
//Módulo de node.js de lectura y escritura de archivos
//Fileystem (fs) es el módulo nartivo de node.js para trabajar con el sistema de archivos


const fs = require('node:fs');


//Esto nos permite leer un archivo con JS en node.js, de otra manera no podríamos leer un archivo con JS

// ASÍNCRONAS
//mñétodos de trabajo
//callbacks, promesas, async/await
//node acepta las promesas, pero NO acepta async/await de manera nativa, hay que transpilar, MEJOR HACER PROMESAS

//Lectura del primer archivo de manera ASÍNCRONA
console.log('Inicio de la lectura asíncrónica UNO');

//sistema en segundo plano
//cuando se acabe esta ejecucion, te prometo que te voy a enseñar en consola
fs.promises.readFile('archivos/lectura1.txt', 'utf-8') 
.then((datosAsincronosUno) => {
    console.log('Datos leídos asíncronamente UNO: ', datosAsincronosUno);
    console.log('Fin de la lectura asíncrónica UNO');
});

console.log('-----------------------------------');
console.log('\n' + '*'.repeat(50));
console.log('Trabajando en mientras se lee el archivo de manera asíncrona...');

//Lectura del segundo archivo de manera ASÍNCRONA
console.log('Inicio de la lectura asíncrónica DOS');

//cuando se acabe esta ejecucion, te prometo que te voy a enseñar en consola
fs.promises.readFile('archivos/lectura2.txt', 'utf-8')
.then((datosAsincronosDos) => {
    console.log('Datos leídos asíncronamente DOS: ', datosAsincronosDos);
    console.log('Fin de la lectura asíncrónica DOS');
});

console.log('===================================');