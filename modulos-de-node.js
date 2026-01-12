//const so = require('os'); //esto está mal, es super antiguo

// importación del módulo os
const so = require("node:os"); //esto está bien, porque le decimos a nodejs

//esto ya está modularizado,viene con node, paquetes de dentr de node, luego hay paquetes externos que se instalan con npm

//que cargue en memoria un modulo ya creado por nodejs
//que sistema operativo estoy usando
//so es como si fuera una clase, y platform es un método de esa clase
console.log("==============================");
console.log("🖥️  INFORMACIÓN DEL SISTEMA OPERATIVO");
console.log("==============================");
console.log("💻 Sistema Operativo: ", so.platform());
console.log("🏗️ Arquitectura: ", so.arch());
console.log("🏠 Directorio home: ", so.homedir());
console.log("");

console.log("==============================");
console.log("🧠 MEMORIA");
console.log("==============================");
console.log("📦 Memoria total (GB): ", (so.totalmem() / 1024 ** 3).toFixed(2));
console.log("🆓 Memoria libre (GB): ", (so.freemem() / 1024 ** 3).toFixed(2));
console.log("");

console.log("==============================");
console.log("🧩 CPU");
console.log("==============================");
console.log("🔢 Cantidad de CPUs: ", so.cpus().length);
console.log("📝 CPU Info: ", so.cpus());
console.log("");

console.log("==============================");
console.log("👤 USUARIO");
console.log("==============================");
console.log("🆔 User Info: ", so.userInfo());
console.log("");

console.log("==============================");
console.log("⏳ TIEMPO DE ACTIVIDAD");
console.log("==============================");
console.log("⏱️ Uptime (segundos): ", so.uptime());
console.log(
  `🕒 El sistema ha estado encendido por ${(so.uptime() / 3600).toFixed(
    2
  )} horas`
);
console.log("");

//informacion de la red, es muy larga, por eso la comento
//console.log('🌐 Network Interfaces: ', so.networkInterfaces());
