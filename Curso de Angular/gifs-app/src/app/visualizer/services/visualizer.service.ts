import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisualizerService {

  private tagHistory: string[];

  constructor() {
    this.tagHistory = [];
  }

  getTaghistory(): string[]{
    return [...this.tagHistory];
  }

  addTagToTagHistory(): void {

  }
}
