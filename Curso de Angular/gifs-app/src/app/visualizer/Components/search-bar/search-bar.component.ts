import { Component, ElementRef, ViewChild } from '@angular/core';
import { VisualizerService } from '../../services/visualizer.service';

@Component({
  selector: 'visualizer-search-bar',
  styleUrls: ['./search-bar.component.css'],
  template: `<input
                #tagHistory  class="search-bar"
                placeholder="Gif search..."
                (focus)="onSearchTag()"
                (blur)="postSearchTag()"
                (keyup.enter)="searchTag()"
              >
            `
})

export class SearchBarComponent {

  constructor(private visualizerService: VisualizerService) {

  }

  @ViewChild('tagHistory')
  public tagInput!: ElementRef<HTMLInputElement>;

  public onSearchTag(): void {
    this.tagInput.nativeElement.style.width = "40vw"
  }

  public searchTag(): void {
    var tag = this.tagInput.nativeElement.value;
    this.tagInput.nativeElement.value = ""
    this.visualizerService.searchTag(tag);
  }

  public postSearchTag(): void {
    this.tagInput.nativeElement.style.width = "100px"
  }
}
