import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() sideBarStatus = new EventEmitter<boolean>()
  sideBar: boolean = false;

  openSideBar() {
    this.sideBar = !this.sideBar;
    this.sideBarStatus.emit(this.sideBar);
  }
}
