import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './Components/card-list/card-list.component';
import { MainPageComponent } from './pages/main-page/home/main-page.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { CardComponent } from './Components/card/card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CardListComponent,
    MainPageComponent,
    SearchBarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [

    MainPageComponent
  ]
})
export class VisualizerModule { }
