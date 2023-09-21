import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
