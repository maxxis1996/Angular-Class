import { Component } from "@angular/core";


@Component({
    templateUrl: './counter.component.html'
})

export class CounterPageComponent {
    counter:number = 15;

    increase(value: number){
        this.counter += value;
    }

    decrease(value: number){
        this.counter -= value;
    }

    resetcounter(){
        this.counter = 0;
    }

}