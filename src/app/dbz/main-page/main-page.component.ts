import { Component } from '@angular/core';
import { DbzCharacter } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent  {

 new: DbzCharacter = {
    name: '',
    power: 0,
  }

  // addNewCharacter(arg: DbzCharacter) {
  //   this.characters.push(arg);
  //   this.new = {
  //     name: '',
  //     power: 0,
  //   }
  // }

  constructor (){}
}
