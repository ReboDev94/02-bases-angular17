import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter = new EventEmitter<Character>();

  character: Character = {
    uuid: uuidv4(),
    name: '',
    power: 0,
  };

  emitCharacter() {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit({ ...this.character });
    this.character.uuid = uuidv4();
    this.character.name = '';
    this.character.power = 0;
  }
}
