import { Observer, asyncScheduler, range } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next ->' + value),
    error: error => console.log('Error ->' + error),
    complete: () => console.log('Completed')

}


const range$ = range(1,100,asyncScheduler)

console.log('Inicio');
range$.subscribe(observer);
console.log('Fin');