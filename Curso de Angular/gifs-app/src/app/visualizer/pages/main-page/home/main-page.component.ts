import { Component } from '@angular/core';
import { VisualizerService } from 'src/app/visualizer/services/visualizer.service';
import { Gif } from '../../../interfaces/giphy.interfaces';

@Component({
  selector: 'visualizer-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private visualizerService: VisualizerService){

  }

  public get gifs() : Gif[] {
    return this.visualizerService.gifList;
  }


}
