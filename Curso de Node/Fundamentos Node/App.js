
const { crearArchivo } = require('./RequiredExpleined');
const argv = require('./Config/Yargs');
const color = require('colors');

// console.log(process.argv)

// const [, , arg3 = 'base=4'] = process.argv;
// const [, base = 4] = arg3.split('=');

// console.log(`Base de yargs ${argv.base}`)

crearArchivo(argv.b, argv.l, argv.h)
    .then(result => console.log(color.rainbow(result)))
    .catch(error => console.log(color.red(error)))



