import { Observer, fromEvent } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next ->' + value),
    error: error => console.log('Error ->' + error),
    complete: () => console.log('Completed')

}

const click$ = fromEvent<MouseEvent>(document,'click');
const keyUp$ = fromEvent<KeyboardEvent>(document,'keyup');

click$.subscribe( ({x, y}) => {

    console.log('x: '+x+' y: '+y);

});

keyUp$.subscribe( (event) => {

    console.log(event);

});
