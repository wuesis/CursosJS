const { argv } = require('yargs').option(
    'b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
}).option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    default: false,
    describe: 'Muestra la tabla en la consola'
}).option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Limite de la iteracion'
}).check((argv, options) => {

    if (isNaN(argv.b))
        throw 'La base tiene que ser un numero'
    return true

})


module.exports = argv;
