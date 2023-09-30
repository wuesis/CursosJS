import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ContriesRoutingModule } from './contries-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CountryTableComponent } from './components/country-table/country-table.component';



@NgModule({
  declarations: [
    ByCountryPageComponent,
    ByCapitalPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    SearchBarComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    ContriesRoutingModule
  ]
})
export class CountriesModule { }
