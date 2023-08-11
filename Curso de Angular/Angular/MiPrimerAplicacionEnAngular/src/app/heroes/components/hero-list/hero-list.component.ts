import { Component } from '@angular/core';
import { heroe } from '../../Interfaces/hero-model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent {

  addCharacter(name: string, age: string, identity: string, photo: string) {
    const newHero: heroe = {
      heroName: name,
      age: parseInt(age),
      Identity: identity,
      photo: photo
    };
   this.currentHeroList.push(newHero);
   console.log(this.currentHeroList);
  }

  public currentHeroList: heroe[] = [{
      heroName: "SuperMan",
      age: 21,
      Identity: "Kal-El",
      photo: "https://cdn.vox-cdn.com/thumbor/TEXaW-u76LZwYGT_VzmuhCoF52s=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22802887/IMG_DE272BF718E8_1.jpeg"
    },{
      heroName: "Batman",
      age: 26,
      Identity: "Bruce Wayne",
      photo: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/10/batman-131-b.jpg"
    },{
      heroName: "Green Lantern",
      age: 20,
      Identity: "Hall Jordan",
      photo: "https://i.pinimg.com/564x/91/04/92/910492d42415b1fa36180f1441dcac7f.jpg"
    }];

  public clicprueba(hero: heroe): void{

    var {heroName, age, Identity, photo} = hero;
    console.log(`Haz hecho clic en ${heroName}, el tiene ${age} anios y su identidad secreta es ${Identity}` );
  };
}
