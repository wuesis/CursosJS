import { NgModule } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { MainpageComponent } from './Pages/mainpage/main-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [BrowserModule,
           FormsModule],
  exports: [
    MainpageComponent
  ],
  declarations: [
    HeroComponent,
    HeroListComponent,
    AddHeroComponent,
    MainpageComponent
  ],
  providers: [],
})

export class HeroModule {

}
