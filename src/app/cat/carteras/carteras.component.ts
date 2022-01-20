import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Cartera } from 'src/app/models/cartera';
import { CarteraService } from 'src/app/service/cartera.service';


export interface PeriodicElement {
  i_Cartera_Comportamiento:number;
  d_Cartera_Comportamiento: string;
  e_Cartera_Comportamiento_Descripcion: string;
  n_Cartera_Comportamiento_Clave: string;
  n_Cartera_Comportamiento: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {i_Cartera_Comportamiento: 1, d_Cartera_Comportamiento: 'Hydrogen', e_Cartera_Comportamiento_Descripcion: "1.0079", n_Cartera_Comportamiento_Clave: 'H',n_Cartera_Comportamiento: 'H'},
  {i_Cartera_Comportamiento: 2, d_Cartera_Comportamiento: 'Helium', e_Cartera_Comportamiento_Descripcion: "4.0026", n_Cartera_Comportamiento_Clave: 'H',n_Cartera_Comportamiento: 'H'},
  {i_Cartera_Comportamiento: 3, d_Cartera_Comportamiento: 'Lithium', e_Cartera_Comportamiento_Descripcion: "6.941", n_Cartera_Comportamiento_Clave: 'H',n_Cartera_Comportamiento: 'H'},
  {i_Cartera_Comportamiento: 4, d_Cartera_Comportamiento: 'Beryllium', e_Cartera_Comportamiento_Descripcion: "9.0122", n_Cartera_Comportamiento_Clave: 'H',n_Cartera_Comportamiento: 'H'},
  {i_Cartera_Comportamiento: 5, d_Cartera_Comportamiento: 'Boron', e_Cartera_Comportamiento_Descripcion: "10.811", n_Cartera_Comportamiento_Clave: 'H',n_Cartera_Comportamiento: 'H'},
  {i_Cartera_Comportamiento: 6, d_Cartera_Comportamiento: 'Carbon', e_Cartera_Comportamiento_Descripcion: "12.0107", n_Cartera_Comportamiento_Clave: 'H',n_Cartera_Comportamiento: 'H'},
  {i_Cartera_Comportamiento: 7, d_Cartera_Comportamiento: 'Nitrogen', e_Cartera_Comportamiento_Descripcion: "14.0067", n_Cartera_Comportamiento_Clave: 'H',n_Cartera_Comportamiento: 'H'},
  {i_Cartera_Comportamiento: 8, d_Cartera_Comportamiento: 'Oxygen', e_Cartera_Comportamiento_Descripcion: "15.9994", n_Cartera_Comportamiento_Clave: 'H',n_Cartera_Comportamiento: 'H'},
  {i_Cartera_Comportamiento: 9, d_Cartera_Comportamiento: 'Fluorine', e_Cartera_Comportamiento_Descripcion: "18.9984", n_Cartera_Comportamiento_Clave: 'H',n_Cartera_Comportamiento: 'H'},
  {i_Cartera_Comportamiento: 10, d_Cartera_Comportamiento: 'Neon', e_Cartera_Comportamiento_Descripcion: "20.1797", n_Cartera_Comportamiento_Clave: 'H',n_Cartera_Comportamiento: 'H'}
];

@Component({
  selector: 'app-carteras',
  templateUrl: './carteras.component.html',
  styleUrls: ['./carteras.component.scss']
})
export class CarterasComponent implements OnInit {

  displayedColumns: string[] = ['i_Cartera_Comportamiento', 'd_Cartera_Comportamiento','n_Cartera_Comportamiento_Clave'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }

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

}


class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}