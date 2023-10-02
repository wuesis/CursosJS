import { Component, Input } from '@angular/core';

@Component({
  selector: 'sheare-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

@Input()
public spinnerPlaceHolder: string='';



}
