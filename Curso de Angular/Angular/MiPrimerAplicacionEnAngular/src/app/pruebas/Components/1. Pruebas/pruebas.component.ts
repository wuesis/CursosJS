import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})


export class PruebasComponent {

  public nombre: String = "";
  @Output() notify = new EventEmitter<number>();

  public funcioncita(params:string): void {
    this.nombre = params;
  };
}
