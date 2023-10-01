import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country, Region } from '../../interfaces/country.interface';

@Component({
  selector: 'contries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

  constructor(private countriesService: CountriesService){}

  public country: Country[] = [];

  public search: string = ''

  public onSearchText(search: string): void {
    console.log(search);
    this.search = search;
    this.countriesService.searchByRegion(search as Region)
      .subscribe(contry =>
        this.country = contry
      );

  }

}
