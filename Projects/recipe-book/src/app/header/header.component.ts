import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() selectedMenu = new EventEmitter<string>();
  collapsed = true;

  onSelect(selected: string) {
    this.selectedMenu.emit(selected);
  }
}
