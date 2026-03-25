import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

const loadFromLocalStorage = ()=>{
  const characters = localStorage.getItem('characters');

  return characters ?  JSON.parse(characters) : [];
}

@Injectable({
  providedIn: 'root',
})
export class DragonballServices {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters',JSON.stringify(this.characters()));
  });

  addCharacter (character:Character){
      if(!character.name|| !character.power || character.power <=0 ){
          alert("Parametros invalidos");
          return;
      }

      this.characters.update(
          (list) => [...list, character]
      );
  }
}
