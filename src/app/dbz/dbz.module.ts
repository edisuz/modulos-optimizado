import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainDbzPageComponent } from './pages/main-page.component';
import { ListDBZComponent } from './componentes/list/list.component';
import { AddCharacterComponent } from './componentes/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    mainDbzPageComponent,
    ListDBZComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    mainDbzPageComponent,
  ]
})
export class DbzModule { }
