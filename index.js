//console.log('Hello, World!')

//console.log(window) //para navegadores
//console.log(global) //para nodejs
//console.log(globalThis) //para ambos - trabajar así

//globalThis.console.log('This works everywhere!')
//globalThis está en el código de node.js y en el del navegador, es el lugar donde viven las variables globales, las funciones console.log, const, function, son creaciones/módulos dentro de globalThis

import { suma , resta , multiplica , divide } from './function.mjs'

console.log(suma(3, 3))

//Pero queremos las cosas de de manera modular, no global
