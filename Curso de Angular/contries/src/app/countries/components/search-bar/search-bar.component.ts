import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contries-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Input()
  public placeholder: string = ''

  @Output()
  public searhEmitter: EventEmitter<string> = new EventEmitter();


  public onSearchBarEnterPress(emitValue: string){
    this.searhEmitter.emit(emitValue);
  }
}
