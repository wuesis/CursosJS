import { Component, Input } from '@angular/core';
import { heroe } from '../../Interfaces/hero-model';

@Component({
  selector: 'app-heroes-hero',
  styleUrls: ['./hero.component.css'],
  templateUrl: './hero.component.html'
})

export class HeroComponent {


  public heroe!: heroe;

  @Input() selector!: string;

  ngOnInit() {
    if(this.selector=="SuperMan"){
      this.heroe = {
        heroName: "SuperMan",
        age: 21,
        Identity: "Kal-El",
        photo: "https://static.wikia.nocookie.net/marvel_dc/images/1/14/Superman_0002.jpg/revision/latest?cb=20200524231003"
      }
    }else {
      this.heroe = {
        heroName: "Batman",
        age: 26,
        Identity: "Bruce Wayne",
        photo: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/10/batman-131-b.jpg"
      }
    }
  }
}
