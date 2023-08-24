import { Component, Input } from '@angular/core';
import { hero } from '../../Interfaces/hero-model';
import { v4 as uuidv4} from 'uuid'

@Component({
  selector: 'app-heroes-hero',
  styleUrls: ['./hero.component.css'],
  templateUrl: './hero.component.html'
})

export class HeroComponent {


  public hero!: hero;

  @Input() selector!: string;

  ngOnInit() {
    if(this.selector=="SuperMan"){
      this.hero = {
        UUID :uuidv4(),
        heroName: "SuperMan",
        age: 21,
        identity: "Kal-El",
        photo: "https://static.wikia.nocookie.net/marvel_dc/images/1/14/Superman_0002.jpg/revision/latest?cb=20200524231003"
      }
    }else {
      this.hero = {
        UUID :uuidv4(),
        heroName: "Batman",
        age: 26,
        identity: "Bruce Wayne",
        photo: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/10/batman-131-b.jpg"
      }
    }
  }
}
