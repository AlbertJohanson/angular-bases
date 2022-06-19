import { Injectable } from "@angular/core";
import { DbzCharacter } from '../interfaces/dbz.interface';

@Injectable({
    providedIn: 'root'
})

export class DbzService {


    private _characters: DbzCharacter[] = [
        {name: 'Goku', power: 9000},
        {name: 'Vegeta', power: 8000},
        {name: 'Trunks', power: 7000},
        {name: 'Piccolo', power: 6000},
        {name: 'Cell', power: 5000},
        {name: 'Freeza', power: 4000},
        {name: 'Gohan', power: 3000},
        {name: 'Majin Boo', power: 2000},
        {name: 'Goten', power: 1000},
        {name: 'Krillin', power: 0}
      ];


      get characters(): DbzCharacter[] {
        return [...this._characters];
      }


    constructor() {}


    addCharacter(characters: DbzCharacter){
        this._characters.push(characters);
    }
}