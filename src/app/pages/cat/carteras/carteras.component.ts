
import { Component, OnInit } from '@angular/core';
import { Cartera } from 'src/app/models/cartera';


@Component({
  selector: 'app-carteras',
  templateUrl: './carteras.component.html',
  styleUrls: ['./carteras.component.scss']
})
export class CarterasComponent implements OnInit {

  
  
  constructor() { }

  ngOnInit(): void {
    
  }

  addToProcess(cartera:Cartera):void{
    console.log("entra al padre"+ cartera.id)
  }

  addData() {
    
  }

  removeData() {
    
  }
  
}
 

  