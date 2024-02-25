import { Observer, asyncScheduler } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next ->' + value),
    error: error => console.log('Error ->' + error),
    complete: () => console.log('Completed')
}


const saludar = () => console.log('Hola mundo');
asyncScheduler.schedule(saludar,1000);

const saludar2 = (nombre) => console.log('Hola'+nombre);
asyncScheduler.schedule(saludar,1000,'Itsvan');

const schedul = asyncScheduler.schedule(function (state) {

    console.log('state: ',state);

    this.schedule(state + 1, 1000)

}, 3000, 0)

setTimeout(() => {
    schedul.unsubscribe();
}, 6000);