import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('Next ->' + value),
    error: error => console.log('Error ->' + error),
    complete: () => console.log('Completed')

}

const obs$: Observable<string> = new Observable(subs => {

    subs.next('Hola');
    subs.next('Mundo');
    subs.next('!!!!');

    const object = undefined;

    object.apellido = 'ewfwef'

    subs.complete();
});


obs$.subscribe(observer);







