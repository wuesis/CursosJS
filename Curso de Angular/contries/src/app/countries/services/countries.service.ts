import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Country, Region } from '../interfaces/country.interface';
import { Observable, catchError, map, of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v3.1'


  public searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {

    const url = `${this.apiUrl}/alpha/${alphaCode}`;

    return this.http.get<Country[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() => of(null))
    );
  }

  public searchByContry(country: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${country}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  public searchByCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    );
  }

  public searchByRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    );
  }

}
