
import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from './../../interfaces/region.type';

@Component({
  selector: 'contries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

  constructor(private countriesService: CountriesService){}

  public country: Country[] = [];

  public regions :Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  public selectedRegion?: Region;

  public search: string = ''

  public onSearchText(region: Region): void {
    console.log(region)
    this.selectedRegion= region
    this.countriesService.searchByRegion(region)
      .subscribe(contry =>
        this.country = contry
      );

  }

}
