import { Injectable } from '@angular/core';
import { hero } from '../Interfaces/hero-model';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }


  addCharacter(hero: hero) {
    console.log(hero);
    this.currentHeroList.push(hero);
    console.log(this.currentHeroList);
  }

  onDeleteHero(uuid: string) {
    debugger;
    this.currentHeroList = this.currentHeroList.filter(value => value.UUID != uuid)
  }

  public currentHeroList: hero[] = [{
    UUID: uuidv4(),
    heroName: "SuperMan",
    age: 21,
    identity: "Kal-El",
    photo: "https://cdn.vox-cdn.com/thumbor/TEXaW-u76LZwYGT_VzmuhCoF52s=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22802887/IMG_DE272BF718E8_1.jpeg"
  }, {
    UUID: uuidv4(),
    heroName: "Batman",
    age: 26,
    identity: "Bruce Wayne",
    photo: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/10/batman-131-b.jpg"
  }, {
    UUID: uuidv4(),
    heroName: "Green Lantern",
    age: 20,
    identity: "Hall Jordan",
    photo: "https://i.pinimg.com/564x/91/04/92/910492d42415b1fa36180f1441dcac7f.jpg"
  }];
}
