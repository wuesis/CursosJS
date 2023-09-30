
import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service'

@Component({
  selector: 'contries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {


  constructor(private countriesService: CountriesService) { }

  public country: Country[] = [];

  public search: string = ''

  public onSearchText(search: string): void {
    console.log(search);
    this.search = search;
    this.countriesService.searchByCapital(search)
      .subscribe(contry =>
        this.country = contry
      );

  }

}
