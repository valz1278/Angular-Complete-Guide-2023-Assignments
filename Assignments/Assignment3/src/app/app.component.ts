import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible = false;
  clickLog: number[] = [];

  onClick() {
    this.visible = !this.visible;
    this.clickLog.push(this.clickLog.length + 1);
  }

  setBackgroundColor(click: number) {
    return click >= 5 ? 'blue' : 'transparent';
  }
}
