import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {Subject, debounceTime} from 'rxjs'
@Component({
  selector: 'contries-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  @Input()
  public placeholder: string = ''

  @Output()
  public debounceEmitter: EventEmitter<string> = new EventEmitter();

  public debouncer: Subject<string> = new Subject<string>();

  ngOnInit(){
    this.debouncer
    .pipe(
      debounceTime(500)
    ).subscribe( (value: string) =>{
      this.debounceEmitter.emit(value);
    });
  }

  public onSearchBarEnterPress(emitValue: string){
    this.debouncer.next(emitValue);
  }
}
