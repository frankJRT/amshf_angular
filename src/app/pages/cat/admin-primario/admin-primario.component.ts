import { Component, Input, OnInit } from '@angular/core';
import { Cartera } from 'src/app/models/cartera';

@Component({
  selector: 'app-admin-primario',
  templateUrl: './admin-primario.component.html',
  styleUrls: ['./admin-primario.component.scss']
})
export class AdminPrimarioComponent implements OnInit {
 
  valor: String="";
  @Input() carter!:Cartera;

  constructor() { }

  ngOnInit(): void {
  }

  comer(event:any):void{
    console.log("entrar");
    console.log(event);
  }
}
