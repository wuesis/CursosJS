import { Component, EventEmitter, Output } from '@angular/core';
import { hero } from '../../Interfaces/hero-model';
import { v4 as uuidv4} from 'uuid'

@Component({
  selector: 'hero-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent {

  @Output() notify: EventEmitter<hero> = new EventEmitter();

  public heroe: hero = {
    UUID :uuidv4(),
    heroName: '',
    age: 0,
    identity: '',
    photo: ''
  }

  emitHeroe(): void {
    if (this.heroe.heroName.length == 0 || this.heroe.age == 0 || this.heroe.identity== '') return;
    console.log(this.heroe);
    this.notify.emit(this.heroe);
    this.heroe ={UUID :uuidv4(), heroName: '', age: 0, identity: '', photo: ""}
  }

  clearForm() {

  }
}
