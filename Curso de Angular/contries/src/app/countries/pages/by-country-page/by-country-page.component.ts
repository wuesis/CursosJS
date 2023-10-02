import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'contries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  constructor(private contrieservice: CountriesService) {

  }

  public isLoading: boolean = false;

  public country: Country[] = [];

  public search: string = ''

  public onSearchText(search: string): void {
    this.isLoading = true;
    this.search = search;
    this.contrieservice.searchByContry(search)
      .subscribe(contry => {
        this.country = contry
        this.isLoading = false
      });

  }

}
