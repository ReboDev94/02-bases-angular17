import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  deletedHero?: string;
  heroesNames = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

  deleteLastHero(): void {
    const deletedHero = this.heroesNames.pop();
    this.deletedHero = deletedHero;
  }
}
