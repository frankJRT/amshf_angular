import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() closeSideNavFromList = new EventEmitter<void>();
  
  showMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
    this.closeSideNavFromList.emit()
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
