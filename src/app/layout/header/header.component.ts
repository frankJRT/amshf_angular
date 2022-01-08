import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  isAuthenticated = false;
  title = 'amshf'; 

  constructor() { }

  ngOnInit(): void {
  }

  async logout(): Promise<void> {
    // todo
  }
}
