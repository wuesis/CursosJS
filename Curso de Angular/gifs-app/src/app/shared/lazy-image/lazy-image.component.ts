import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})

export class LazyImageComponent {


  @Input() url?: string;
  @Input() alt?: string;

  public hasBeenLoaded: boolean = false;

  public onLoad() {
    setTimeout(() => {
      this.hasBeenLoaded = true;
    }, 300)
  }

}
