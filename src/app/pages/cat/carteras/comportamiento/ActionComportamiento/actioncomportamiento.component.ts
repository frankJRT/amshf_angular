import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ComportamientoService } from 'src/app/service/comportamiento.service';
import { DialogData } from '../DetalleArchivo/detallearchivo.component';
import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';

export interface ActionData {
    idElement: 0;
    actionName:'',
    descripcion:''
  }

@Component({
    selector: 'ActionComportamiento',
    templateUrl: 'actioncomportamiento.html',
    styleUrls: ['./actioncomportamiento.component.scss']
})

export class ActionComportamiento implements OnInit{

    actionName:string='';
    descripcion:String='';
    idElement:number=0;

    loading = false;

    constructor(@Inject(MAT_DIALOG_DATA) public data: ActionData
    , private comportamientoService:ComportamientoService,  private router:Router
    , public dialogRef: MatDialogRef<ActionComportamiento>,) {        
        this.idElement = data.idElement;
        this.actionName = data.actionName;
        this.descripcion = data.descripcion;
    }   

    ngOnInit(): void {}

    execueteAction():void{
        this.loading = true;
        console.log(this.descripcion);

        if(this.descripcion =='Eliminar Comporamiento'){
            console.log("entra");
            this.comportamientoService.deleteFile(this.idElement).subscribe(
                data => {
                  console.log('deleted response', data);
                  this.loading = false;
                  this.dialogRef.close();
                  this.router.navigate(['carteras']);
                }
              );
        }

        else if(this.descripcion =='Subir Comportamiento'){
            this.comportamientoService.uploadProdData(this.idElement).subscribe(
                data => {
                  console.log('Subir Comportamiento', data);
                  this.loading = false;
                  alert("Informacion cargada con Exito")
                  this.dialogRef.close();
                }
              );
        }

        else if(this.descripcion, 'Generar V9'){                       
            this.comportamientoService.generaV9(this.idElement,this.actionName).subscribe(response => {
              console.log(response);
              this.dialogRef.close();
              FileSaver.saveAs(response, 'comportamientoV9_' + this.actionName+'.xlsx');
            });
        }

    }
}


