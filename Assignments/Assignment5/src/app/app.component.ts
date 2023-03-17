import { Component, OnInit } from '@angular/core';

import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeToInactiveCount: number = 0;
  inactiveToActiveCount: number = 0;

  constructor(
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.counterService.activeToInactiveLogged.subscribe(
      (count: number) => {this.activeToInactiveCount = count},
    );
    this.counterService.inactiveToActiveLogged.subscribe(
      (count: number) => {this.inactiveToActiveCount = count},
    );
  }
}
