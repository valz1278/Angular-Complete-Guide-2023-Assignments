import { Component } from "@angular/core";

@Component({
  selector: 'app-success-alert',
  template: `
    <div class="success">Success!</div>
  `,
  styles: [`
    .success {
      color: green;
    }
  `]
})
export class SuccessAlertComponent {}
