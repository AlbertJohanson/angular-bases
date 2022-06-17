import { Component } from "@angular/core";


@Component({
    selector: "app-hero",
    templateUrl: 'hero.component.html'
})

export class HeroeComponent {

    name: string = "Spider-man"
    age : number = 18


    get nameCapitalize ():string {
        return this.name.toUpperCase()
    }


    getName():string {
        return  `${this.name} - ${this.age}`
    }


    changeName ():void {
        this.name = "Vincenzo Cassano"
    }

    changeAge ():void {
        this.age = 30
    }
}