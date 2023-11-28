import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  @Input() counter = 10;

  increseBy(value: number = 1): void {
    this.counter += value;
  }
  reset(): void {
    this.counter = 10;
  }
}
