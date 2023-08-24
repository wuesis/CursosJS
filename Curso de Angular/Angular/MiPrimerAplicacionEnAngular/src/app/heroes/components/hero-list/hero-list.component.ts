import { Component, EventEmitter, Input, Output } from '@angular/core';
import { hero } from '../../Interfaces/hero-model';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent {

  @Input() public heroeList?: hero[];
  @Output() idHeroDeleted: EventEmitter<string> = new EventEmitter();


  public clicprueba(hero: hero): void {
    var { heroName, age, identity: identity, photo } = hero;
    console.log(`Haz hecho clic en ${heroName}, el tiene ${age} anios y su identidad secreta es ${identity}`);
  };

  public onDeleteHero = (heroUUID: string): void =>{
    this.idHeroDeleted.emit(heroUUID);
  }


}
