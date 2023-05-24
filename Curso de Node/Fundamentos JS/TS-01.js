
const Eequipo = {
    nombre: "America",
    copas: 14,
    jugadores: 18,
    getNombre() {

        return `${this.nombre} ${this.Copas} ${this.Jugadores}`
    }
}


const Heroes = ['Daredevil', 'Hulk', 'Capitan America']


const mostrarHeroe = ([,segundoHeroe, tercerHeroe]) => {

    console.log((`${segundoHeroe} ${tercerHeroe}`))
}

mostrarHeroe(Heroes)

// const [ , ,h3] = Heroes;
// console.log(h3)

// const mostrarEquipo = ({ nombre, copas, jugadores, edad }) => {
//     console.log(`${nombre} ${copas} ${jugadores} ${edad}`)
// };
// mostrarEquipo(Eequipo);

// const { nombre, copas, jugadores } = Eequipo;
// console.log(nombre, copas, jugadores)








// const calcularAreaCuadrilatero = (ladoA, ladoB) =>{

//     let result = ladoA+ladoB;
//     console.log(result)
// }

// calcularAreaCuadrilatero(4,5)





