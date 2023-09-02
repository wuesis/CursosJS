import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './Components/card-list/card-list.component';
import { MainPageComponent } from './pages/main-page/home/main-page.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    CardListComponent,
    MainPageComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardListComponent,
    MainPageComponent
  ]
})
export class VisualizerModule { }
