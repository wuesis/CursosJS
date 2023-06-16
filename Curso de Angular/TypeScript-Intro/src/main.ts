import './style.css'
import { total, totalWithTax } from './topics/06-Destructuration-Exercise'
// import { name, author, year } from './topics/05-basic-destructuring'
// import {cost, pasive, objectName} from './topics/01-basic-types.ts'
// import { skills, Veigar } from './topics/02-objects-interfaces.ts'
// import { address } from './topics/04-homework-types.ts'
// import { setupCounter } from './counter.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = 
`Los productos tienen un costo total de ${total}$ de los cuales se paga ${totalWithTax}$ de impuestos lo que da un total de ${total+totalWithTax}$`