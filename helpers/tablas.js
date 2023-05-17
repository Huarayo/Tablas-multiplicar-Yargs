const fs = require("fs")
const colors = require("colors")
const path = require("path");


//CREAR TABLAS
console.clear();

const crearTabla = (base = 5, listar = false, hasta = 10) => {
    
    //logica de la tabla
    let result= "";
    let resultText= "";

    for(let i = 1 ; i <= hasta ; i++) {
        resultText = resultText + `${base} x ${i} = ${base*i}\n`;
        result += colors.magenta((`${base} ${"x".blue} ${i} ${"=".blue} ${base*i}\n`));
    }

    //si verdadero
    if(listar) {
        console.log("=========================".brightMagenta);
        console.log("       Tabla del ".brightMagenta  + colors.blue(base));
        console.log("=========================".brightMagenta);

        console.log(result);
    }

    //ruta de la creación del archivo txt
    const carpeta = "salida";
    const nombreArchivo = `tabla-${base}.txt`;
    const path = 'C:\\Users\\User\\Desktop\\Leo\\Nodejs\\4-basesDeNode';

    const rutaArchivo = path.join( path, carpeta, nombreArchivo)
    
    //crear new file
    fs.writeFile(rutaArchivo,resultText, err => {
        if (err) throw err;

        console.log("archivo creado".rainbow)
    })
}


module.exports = {crearTabla}