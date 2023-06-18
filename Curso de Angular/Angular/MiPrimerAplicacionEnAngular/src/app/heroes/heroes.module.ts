import { NgModule } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';



@NgModule({
  imports: [],
  exports: [
    HeroListComponent,
    HeroComponent
  ],
  declarations: [
    HeroComponent,
    HeroListComponent
  ],
  providers: [],
})

export class HeroModule {

}
