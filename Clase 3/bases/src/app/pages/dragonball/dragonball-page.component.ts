import { Component, signal } from "@angular/core";
import { CommonModule } from '@angular/common';

interface Character {
    id: number;
    name: string;
    power:number;
}
@Component({
    templateUrl:'./dragonball-page.component.html',
  imports: [CommonModule]
})
export class DagronballPageComponent {

    name = signal ('Gohan');
    power = signal (6000);

    characters = signal<Character[]>([
        {id: 1, name: 'Goku', power:9001},
        {id: 2, name: 'Vegueta', power:8000},
        {id: 4, name: 'Yamcha', power:1000},
    ])


    addCharacter (){
        if(!this.name() || !this.power() || this.power() <=0 ){
            return;
        }

        const newCharacter:Character ={
            id: this.characters.length+1,
            name: this.name(),
            power: this.power()
        };

        //this.characters().push(newCharacter);
        this.characters.update(
            (list) => [...list, newCharacter]
        );
        this.resetField();
    }

    resetField(){
        this.name.set('');
        this.power.set(0);
    }
}