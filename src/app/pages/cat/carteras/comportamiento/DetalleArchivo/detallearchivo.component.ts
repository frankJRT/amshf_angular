import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ControlEnvioStatic } from 'src/app/models/control-envio-static';
import { ComportamientoService } from 'src/app/service/comportamiento.service';


export interface DialogData {
    id: 0;
    name:''
  }

  @Component({
    selector: 'DetalleArchivo',
    templateUrl: 'dialog.estadistic.html',
  })
  
  
  export class DetalleArchivo implements OnInit{
    name:String='';
    idfile:number=0;
    controlEnvioEstadisticas!:ControlEnvioStatic[];
    displayedColumnsFile: string[] = ['staticName','staticValue'];


    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData
    , private comportamientoService:ComportamientoService) {        
        this.idfile = data.id;
        this.name = data.name;
    }   
    ngOnInit(): void {

        this.comportamientoService.staticsFile(this.idfile).subscribe(
            data => {
              this.controlEnvioEstadisticas = data;
            }
        );
    }
  }