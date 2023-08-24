import { Component } from '@angular/core';
import { HeroService } from '../../Services/hero.service';
import { hero } from '../../Interfaces/hero-model';

@Component({
  selector: 'Hero-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainpageComponent {


  constructor(private heroService: HeroService) { }


  get heros(): hero[] {
    return [...this.heroService.currentHeroList];
  }

  public addHeroe(hero: hero): void {
    console.log(hero);
    this.heroService.addCharacter(hero)
  }

  onDeleteHEro(Herouuid: string) {
    this.heroService.onDeleteHero(Herouuid)
  }

}
