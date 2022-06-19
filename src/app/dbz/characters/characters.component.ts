import { Component, Input } from '@angular/core';
import { DbzCharacter } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent {

  // @Input() characters:DbzCharacter[] = [] ;

  get characters(): DbzCharacter[] {
    return this.dbzService.characters;
  }

  constructor(private dbzService: DbzService) { }
}
