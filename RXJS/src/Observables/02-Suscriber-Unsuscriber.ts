import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('Next ->' + value),
    error: error => console.log('Error ->' + error),
    complete: () => console.log('Completed')

}


const contador$: Observable<number> = new Observable(subscriber => {

    let counter: number = 0;
    const interval = setInterval(() => {

        counter++;
        subscriber.next(counter);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 3000)

    return () => {
        clearInterval(interval);
        console.log('Interval deleted');
    };

});

const subs1 = contador$.subscribe(observer);
// const subs2 = contador$.subscribe(observer);
// const subs3 = contador$.subscribe(observer);


setTimeout(() => {
    subs1.unsubscribe();
    console.log('Timeout completed');
}, 2000);