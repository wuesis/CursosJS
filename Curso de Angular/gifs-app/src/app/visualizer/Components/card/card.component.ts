import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/giphy.interfaces';

@Component({
  selector: 'visualizer-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


  // constructor ( private visualizerService: VisualizerService){

  // }


  @Input() gif?: Gif;

}
