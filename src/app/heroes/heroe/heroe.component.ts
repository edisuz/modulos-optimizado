import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public nombre: string = 'Iroman';
  public edad: number = 20;

  get capitalizarNombre(): string {
    return this.nombre.toUpperCase()
  }

  getDescripcionHeroe(): string {
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman'
  }
  cambiarEdad(): void {
    this.edad = 25
  }

  resetForm(): void {
    this.nombre = 'Iroman';
    this.edad = 45;
  }


}
