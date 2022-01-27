import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Cartera } from 'src/app/models/cartera';
import { CarteraService } from 'src/app/service/cartera.service';

@Component({
  selector: 'app-carteras',
  templateUrl: './carteras.component.html',
  styleUrls: ['./carteras.component.scss']
})
export class CarterasComponent implements OnInit {

  displayedColumns: string[] = ['i_Cartera_Comportamiento', 'd_Cartera_Comportamiento',
  'n_Cartera_Comportamiento_Clave','n_Cartera_Comportamiento','actions'];
  carteras!:Cartera[];
  constructor(private carteraService:CarteraService) { }

  ngOnInit(): void {
    this.carteraService.lista().subscribe(
      data => {
        this.carteras=data;
      }
    );
  }

  addToProcess(cartera:Cartera):void{
    console.log("entra al padre"+ cartera.i_Cartera_Comportamiento)
  }

  addData() {
    
  }

  removeData() {
    
  }
  
}
 

  