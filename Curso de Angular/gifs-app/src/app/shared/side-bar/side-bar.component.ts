import { tick } from '@angular/core/testing';
import { VisualizerService } from './../../visualizer/services/visualizer.service';
import { Component } from '@angular/core';


@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor(private visualizerService: VisualizerService) {

  }


  searchByTagButton(tag: string) {
    this.visualizerService.searchTag(tag);
  }

  get tags(): string[] {

    return this.visualizerService.getTaghistory()
  }

}
