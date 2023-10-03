import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'contries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit{


  public isLoading: boolean = false;

  public country: Country[] = [];

  public term: string = ''

  constructor(private countriesServices: CountriesService) {

  }

  ngOnInit(): void {
    this.country = this.countriesServices.cacheStore.byCountries.countries;
    this.term = this.countriesServices.cacheStore.byCountries.term;
  }

  public onSearchText(term: string): void {
    this.isLoading = true;
    this.term = term;
    this.countriesServices.searchByContry(term)
      .subscribe(contry => {
        this.country = contry
        this.isLoading = false
      });

  }

}
