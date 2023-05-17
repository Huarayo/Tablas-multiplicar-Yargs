
//imports
const { crearTabla } = require("./helpers/tablas"); 
const argv = require("./config/yargs");
const colors = require("colors");

//configuraciones

// console.log( process.argv );
console.log( "yargs: ",argv);

crearTabla( argv.b , argv.l, argv.h);