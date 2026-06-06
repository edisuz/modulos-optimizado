import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListDBZComponent {

  @Input()
  public characterList: Character[] = [{
    nombre: 'Trunk',
    poder: 10
  }]

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeletCharacter(index: number): void {
    // this.characterList.pop()
    // console.log({ index });
    this.onDelete.emit(index)
  }
}
