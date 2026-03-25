import { Component, signal, input, output } from '@angular/core';
import { Character } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'app-character-add',
  imports: [],
  templateUrl: './character-add.html'
})
export class CharacterAdd {
  characters = input.required<Character[]>();
  characterAdded = output<Character>();
  name = signal('');
  power = signal(0);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
            alert("Parametros invalidos");
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random()*1000),
      name: this.name(),
      power: this.power()
    };

    //this.characters().push(newCharacter);
    /*this.characters.update(
        (list) => [...list, newCharacter]
    );*/
    this.characterAdded.emit(newCharacter);
    this.resetField();
  }

  resetField() {
    this.name.set('');
    this.power.set(0);
  }
}
