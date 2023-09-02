import { Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'visualizer-search-bar',
  template: `<input (click)="onSearchTag()" (blur)="postSearchTag()" #tagHistory style="height: 40px; font-size:20px; transition: width 0.9s ease; " placeholder="Gif search...">`,
})
export class SearchBarComponent {

  constructor(){

  }

  @ViewChild('tagHistory')
  public tagInput!: ElementRef<HTMLInputElement>;

  public onSearchTag(): void {
    console.log("clic");
    this.tagInput.nativeElement.style.width="40vw"
  }

  public postSearchTag(): void {
    console.log("blur");
    this.tagInput.nativeElement.style.width="100px"
  }
}
