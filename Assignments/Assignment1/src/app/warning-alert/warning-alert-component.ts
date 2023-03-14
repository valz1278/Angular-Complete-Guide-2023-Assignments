import { Component } from "@angular/core";

@Component({
  selector: 'app-warning-alert',
  template: `
    <div class="warn">Careful!</div>
  `,
  styles: [`
    .warn {
      color: red;
    }
  `]
})
export class WarningAlertComponent {}
