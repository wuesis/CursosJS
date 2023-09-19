import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/giphy.interfaces';

@Injectable({
  providedIn: 'root'
})
export class VisualizerService {

  private GIPHY_API_KEY = '4frZMTAiBZAd44DVMZKgBpl3wfESIx6V'
  private GIPHY_SERVICE_URL = 'https://api.giphy.com/v1/gifs'
  public gifList: Gif[] = [];

  private _tagHistory: string[];

  constructor(private http: HttpClient) {
    this._tagHistory = [];
  }

  public getTaghistory(): string[] {
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if ( this._tagHistory.includes( tag ) ) {
      this._tagHistory = this._tagHistory.filter( (oldTag) => oldTag !== tag )
    }

    this._tagHistory.unshift( tag );
    this._tagHistory = this._tagHistory.splice(0,10);

  }

  public searchTag(tag: string): void {

    if (tag.length == 0)
      return;

      this.organizeHistory(tag);

    const params = new HttpParams()
      .set("api_key", this.GIPHY_API_KEY)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.GIPHY_SERVICE_URL}/search`, { params })
      .subscribe(resp => { this.gifList = resp.data })
  }
}
