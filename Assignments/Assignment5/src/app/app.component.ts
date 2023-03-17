import { Component, OnInit } from '@angular/core';

import { UsersService } from './services/users.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  activeToInactiveCount: number = 0;
  inactiveToActiveCount: number = 0;

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.counterService.activeToInactiveLogged.subscribe(
      (count: number) => {this.activeToInactiveCount = count},
    );
    this.counterService.inactiveToActiveLogged.subscribe(
      (count: number) => {this.inactiveToActiveCount = count},
    );
  }
}
