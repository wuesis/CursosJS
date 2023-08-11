import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebasComponent } from './Components/1. Pruebas/pruebas.component';



@NgModule({
  declarations: [
    PruebasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PruebasComponent
  ]
})
export class PruebasModule { }
