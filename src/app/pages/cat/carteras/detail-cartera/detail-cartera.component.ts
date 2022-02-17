import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cartera } from 'src/app/models/cartera';

@Component({
  selector: 'app-detail-cartera',
  templateUrl: './detail-cartera.component.html',
  styleUrls: ['./detail-cartera.component.scss']
})
export class DetailCarteraComponent implements OnInit {


  cartera:String='';
  clave:String='';
  idcartera:number=0;


  constructor(private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
        this.cartera = params['cartera'];
        this.clave = params['clave'];
        this.idcartera = params['idcartera'];
      });
  }

  ngOnInit(): void {
   
  }


  
}
