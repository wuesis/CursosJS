import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './shared/Pages/home/home.component';
import { AboutComponent } from './shared/Pages/about/about.component';
import { ContactComponent } from './shared/Pages/contact/contact.component';



const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'countries',
    loadChildren: () =>  import('./countries/countries.module').then((m) => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'countries'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
