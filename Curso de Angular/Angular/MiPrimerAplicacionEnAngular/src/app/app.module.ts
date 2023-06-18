import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

import { HeroModule } from './heroes/heroes.module';





@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,

  ],
  imports: [
    BrowserModule,
    HeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
