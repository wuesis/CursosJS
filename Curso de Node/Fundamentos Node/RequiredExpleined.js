const fs = require('fs');
const color = require('colors');

const crearArchivo = async (base, listar, hasta) => {

    let salida = '';

    for (var i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}\n`
    }

    try {
        fs.writeFileSync(`tabla-${base}.txt`, salida);

    } catch (e) {
        throw e;
    }

    if (listar)
        console.log(color.rainbow(salida))

    return `Tabla-${base}.txt`;

}



//No asyncrono
// fs.writeFile(`tabla-${base}.txt`, salida, (error) => {

//     (error)
//         ? console.log(error)
//         : console.log(`Tabla del ${base} creada`)

// })


//Syncrono
// fs.writeFileSync(`tabla-${base}.txt`,salida)
// console.log(`Tabla del ${base} creada`)


module.exports = {
    crearArchivo
}


