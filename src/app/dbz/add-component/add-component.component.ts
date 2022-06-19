import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbzCharacter } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.sass']
})
export class AddComponentComponent {

  // @Output () onNewCharacter = new EventEmitter<DbzCharacter>();


  constructor(private dbzService: DbzService) { }

  @Input() new: DbzCharacter = {
    name: '',
    power: 0,
  }
  
  add( ) {
    if(this.new.name.trim(). length === 0) {
      return;
    }

    // this.onNewCharacter.emit(this.new);

    this.dbzService.addCharacter(this.new);

    this.new = {
      name: '',
      power: 0,
    }
  }
 

}
