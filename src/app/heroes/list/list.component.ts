import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroeNombres: string[] = ['Spiderman', 'Iroman', 'Hulk', 'She Hulk', 'Thor'];
  public heroeEliminado?: string;

  // removerHeroe(): void {
  //   this.heroeEliminado = this.heroeNombres.pop()
  // }

}
