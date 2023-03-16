import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() emittedEvent = new EventEmitter<number>();
  count = 0;
  interval;

  onStartClick() {
    this.interval = setInterval(() => {
      this.emittedEvent.emit(++this.count);
    }, 1000);
  }

  onStopClick() {
    clearInterval(this.interval);
  }
}
