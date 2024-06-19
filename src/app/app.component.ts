import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  sidebar: boolean = false;

  sideBarStatus(status: boolean) {
    this.sidebar = status;
  }
}
