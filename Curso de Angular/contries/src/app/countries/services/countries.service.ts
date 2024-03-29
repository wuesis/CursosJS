import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, tap, map, of } from 'rxjs'


import { Country } from '../interfaces/country.interface';
import { Region } from '../interfaces/region.type';
import { CacheStore, TermCountries } from '../interfaces/cache-store.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private apiUrl: string = 'https://restcountries.com/v3.1'

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getContriesRequest(url: string): Observable<Country[]> {

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      )
  }

  public searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${alphaCode}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  public searchByContry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getContriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCountries = { term, countries }),
        tap(() => this.saveToLocalStorage())
      );
  }

  public searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.getContriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCapital = { term, countries }),
        tap(() => this.saveToLocalStorage())
      );
  }

  public searchByRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`
    return this.getContriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byRegion = { region, countries }),
        tap(() => this.saveToLocalStorage())
      );
  }

}
