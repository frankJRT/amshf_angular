import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cartera } from 'src/app/models/cartera';
import { CarteraService } from 'src/app/service/cartera.service';
import { Observable, ReplaySubject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-cartera',
  templateUrl: './list-cartera.component.html',
  styleUrls: ['./list-cartera.component.scss']
})
export class ListCarteraComponent implements OnInit {
  displayedColumns: string[] = ['id', 'd_Alta', 'n_Clave_Cartera','n_Nombre','actions'];

  carteras!:Cartera[];
  dataSource = new MatTableDataSource(this.carteras);
 
  constructor(private carteraService:CarteraService,private router: Router) {
   }

  ngOnInit(): void {
    this.carteraService.lista().subscribe(
      data => {
        this.carteras=data;
        this.dataSource = new MatTableDataSource(this.carteras);
      }
    );
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  getCarteraDetalle(event:Event,car:Cartera):void{
    let navigationExtras: NavigationExtras = {
      queryParams: {
        cartera: car.n_Nombre,
        clave: car.n_Clave_Cartera,
        idcartera:car.id

      }
    };
    this.router.navigate(['detalle-cartera'],  navigationExtras);//['detalle-cartera'],{'cartera':car})
  }
}
