import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  characterList: Character[] = [];

  @Output()
  onDeleteCharacterEvent = new EventEmitter<string>();

  onDeleteCharacter(uuid: string): void {
    this.onDeleteCharacterEvent.emit(uuid);
  }
}
