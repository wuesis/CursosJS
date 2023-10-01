import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'contries-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private contriesService: CountriesService,
    private router: Router
  ) { }

  public country?: Country;

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.contriesService.searchCountryByAlphaCode( id )),
    )
    .subscribe( country => {
      if ( !country ) return this.router.navigateByUrl('');
      return this.country = country;
    });

  }

}
