import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Contador: {{counter}}</p>
  <div style="display: grid;grid-gap: 10px; grid-template: 1fr/ 100px 100px 100px;">
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  </div>
  `
})

export class CounterComponent {
  public counter: number = 0;

  increaseBy(value: number) {
    this.counter += value
  }

  reset() {
    this.counter = 0;
  }
}
