import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisualizerService {

  private tagHistory: string[];

  constructor() {
    this.tagHistory = [];
  }

  public getTaghistory(): string[] {
    return [...this.tagHistory];
  }

  public searchTag(tag: string): void {

    if(tag.length==0)
      return;
    this.tagHistory.push(tag);

  }
}
