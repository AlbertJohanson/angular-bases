import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { DbzService } from './services/dbz.service';




@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    AddComponentComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
