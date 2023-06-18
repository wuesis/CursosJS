import { Component } from '@angular/core';
import { heroe } from '../../Models/hero-model';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {



  // public get Superman(): heroe {
  //   return this.Superman;
  // }

  // public set Superman(value: heroe) {
  //   this.Superman = value;
  // }

  public get harcodedHeroes(): heroe[] {

    let heroList: heroe[] = [
      {
        heroName: "SuperMan",
        age: 21,
        Identity: "Kal-El",
        photo: "https://static.wikia.nocookie.net/marvel_dc/images/1/14/Superman_0002.jpg/revision/latest?cb=20200524231003"
      },
      {
        heroName: "Batman",
        age: 26,
        Identity: "Bruce Wayne",
        photo: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/10/batman-131-b.jpg"
      }
    ];
    return heroList;
  }




}
