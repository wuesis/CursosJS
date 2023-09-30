import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Country } from '../interfaces/country.interface';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v3.1'

  public searchByContry(country: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${country}`;
    return this.http.get<Country[]>(url);
  }

  public searchByCapital(capital: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${capital}`
    return this.http.get<Country[]>(url);
  }


}
