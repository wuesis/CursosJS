import { Observer, of } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next ->' + value),
    error: error => console.log('Error ->' + error),
    complete: () => console.log('Completed')

}

const arrayNumbers$ = of(...[1,2.3]);

const numbers$ = of(1,2.3,'Hola',true,{ number: 'Jose', apellido: 'Perez'}, () => console.log('Hola mundo'));

numbers$.subscribe(observer);
arrayNumbers$.subscribe(observer);