import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      nombre: 'Krillin',
      poder: 1000
    },
    {
      nombre: 'goky',
      poder: 9000
    },
    {
      nombre: 'vegeta',
      poder: 7500
    }
  ];

  onNewCharacter(character: Character): void {
    // console.log('MainPage', character);
    this.characters.unshift(character);
  }
  onDeleteCharacter(index: number): void {
    // console.log('MainPage', character);
    this.characters.splice(index, 1);
  }
}
