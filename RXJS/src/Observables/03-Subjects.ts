import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Next ->' + value),
    error: error => console.log('Error ->' + error),
    complete: () => console.log('Completed')

}


const randomNumber$: Observable<number> = new Observable(subscriber => {
    const interval = setInterval(() => {
        subscriber.next(Math.random());
    }, 1000)

    return () => {
        clearInterval(interval);
        console.log('random destruido');
    }
});


const subject$ = new Subject();
const subscrition = randomNumber$.subscribe(subject$);

const sub1 = subject$.subscribe( rnd=> console.log('sub1: ',rnd));
const sub2 = subject$.subscribe( rnd=> console.log('sub2: ',rnd));

setTimeout(() => {

    subject$.next(14);
    subject$.complete();
    subscrition.unsubscribe();
}, 3500);