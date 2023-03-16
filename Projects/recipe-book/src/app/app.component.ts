import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeFeature: string = 'recipe';

  onMenuSelected(selectedFeature: string) {
    this.activeFeature = selectedFeature;
  }
}
