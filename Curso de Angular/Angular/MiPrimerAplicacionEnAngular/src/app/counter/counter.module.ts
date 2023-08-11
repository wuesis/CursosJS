import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter.component";


@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ],
  imports: [],
  providers: []
})
export class CounterModule { }
