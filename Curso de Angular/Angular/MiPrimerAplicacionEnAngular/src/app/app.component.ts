import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  public title: string = 'Super heroes:';
  public childCount: number = 0;

  public onNotify(number: number) {
    this.childCount+=number;
  }
}
