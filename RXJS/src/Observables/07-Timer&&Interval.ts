import { Observer, interval, timer  } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next ->' + value),
    error: error => console.log('Error ->' + error),
    complete: () => console.log('Completed')

}

const date = new Date()
date.setSeconds(date.getSeconds()+5)

const interval$ = interval(1000);
const timer$ = timer(date);

// interval$.subscribe(observer);
console.log('Inicio');
timer$.subscribe(observer);
console.log('Fin');
