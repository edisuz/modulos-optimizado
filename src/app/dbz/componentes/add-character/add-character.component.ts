import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',

})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    nombre: 'ABC',
    poder: 123
  }

  emitirCharacter(): void {
    // console.log(this.character);
    if (this.character.nombre.length === 0) return;

    this.onNewCharacter.emit({ ...this.character });
    this.character.nombre = '';
    this.character.poder = 0
  }
}
