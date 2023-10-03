
import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service'

@Component({
  selector: 'contries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit{

  public country: Country[] = [];

  public term: string = ''


  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.country = this.countriesService.cacheStore.byCapital.countries;
    this.term = this.countriesService.cacheStore.byCapital.term;
  }

  public onSearchText(term: string): void {
    console.log(term);
    this.term = term;
    this.countriesService.searchByCapital(term)
      .subscribe(contry =>
        this.country = contry
      );

  }

}
