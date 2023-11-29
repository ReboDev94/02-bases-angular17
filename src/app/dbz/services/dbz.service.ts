import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  characters: Character[] = [
    {
      uuid: uuidv4(),
      name: 'Krillin',
      power: 1000,
    },
    {
      uuid: uuidv4(),
      name: 'Goku',
      power: 9500,
    },
    {
      uuid: uuidv4(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }
  onDeleteCharacter(uuidP: string): void {
    this.characters = [...this.characters].filter(({ uuid }) => uuid !== uuidP);
  }
}
