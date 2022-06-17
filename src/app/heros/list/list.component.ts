import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent  {

  heroes: string[] = ['Spider-man', 'Goku', 'Vicenzo', 'Maradona']

  heroDeleted: string  = ''

  deleteHero() {
     this.heroDeleted = this.heroes.pop() || '';
  }

}
