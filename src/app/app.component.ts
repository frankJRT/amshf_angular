import { Component, OnInit } from '@angular/core';
import { TokenDtoService } from './service/token-dto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'amshf';
  sideBarOpen=false;

  ngOnInit(): void {
    
  }
 
  sideBarToggler(){
    const token = this.tokenService.getToken();

    if(token != null){
      this.sideBarOpen=!this.sideBarOpen;  
    }else
    {
      this.sideBarOpen=false;
    }
    
  }

  closeToggler(){    
    console.log("entra")
      this.sideBarOpen=false; 
  }

  constructor(private tokenService: TokenDtoService
  ) { }

}
