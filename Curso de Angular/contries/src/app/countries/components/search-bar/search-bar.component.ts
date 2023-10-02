import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Subject, Subscription, debounceTime } from 'rxjs'
@Component({
  selector: 'contries-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Input()
  public placeholder: string = ''

  @Output()
  public debounceEmitter: EventEmitter<string> = new EventEmitter();

  public debouncer: Subject<string> = new Subject<string>();

  public debouncerSuscription?: Subscription;

  ngOnInit() {
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(500)
      ).subscribe((value: string) => {
        this.debounceEmitter.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  public onSearchBarEnterPress(emitValue: string) {
    this.debouncer.next(emitValue);
  }
}
