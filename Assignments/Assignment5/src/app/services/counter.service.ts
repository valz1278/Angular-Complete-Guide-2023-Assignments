import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  activeToInactiveLogged = new EventEmitter<number>();
  inactiveToActiveLogged = new EventEmitter<number>();

  logActiveToInactive() {
    this.activeToInactiveLogged.emit(++this.activeToInactiveCount);
  }

  logInactiveToActive() {
    this.inactiveToActiveLogged.emit(++this.inactiveToActiveCount);
  }
}
