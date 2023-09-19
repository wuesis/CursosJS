import { Component, Input } from '@angular/core';
import { VisualizerService } from '../../services/visualizer.service';
import { Gif } from '../../interfaces/giphy.interfaces';

@Component({
  selector: 'visualizer-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  constructor ( private visualizerService: VisualizerService){

  }

  @Input() gifs?: Gif[];

}
