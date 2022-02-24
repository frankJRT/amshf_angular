import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ComportamientoService } from 'src/app/service/comportamiento.service';
import { NavigationExtras, Router } from '@angular/router';
import { PeriodoProceso } from 'src/app/models/periodo-proceso';
import { MatTableDataSource } from '@angular/material/table';
import { ControlEnvio } from 'src/app/models/control-envio';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetalleArchivo } from './DetalleArchivo/detallearchivo.component';
import { ActionComportamiento } from './ActionComportamiento/actioncomportamiento.component';
import { Periodo } from 'src/app/models/periodo';



@Component({
  selector: 'app-comportamiento',
  templateUrl: './comportamiento.component.html',
  styleUrls: ['./comportamiento.component.scss']
})
export class ComportamientoComponent implements OnInit {
  periodoProcesos!:PeriodoProceso[];
  controlEnvios!:ControlEnvio[];
  displayedColumns: string[] = ['id', 'd_Alta', 'I_Periodo','actions','production'];
  displayedColumnsFile: string[] = ['fileName','claveAdministradorCartera','claveIFCedioCartera','detalle','actions'];


  @Input() idCartera=0; 
  myForm = new FormGroup({
    //primario: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(3)]),
    //periodo: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(6)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient
    , private comportamientoService:ComportamientoService
    ,private router: Router,
    public dialog: MatDialog){

  }

  ngOnInit(): void {

    this.comportamientoService.listbyCartera(this.idCartera).subscribe(
        data => {
          this.periodoProcesos = data;
        }
    );

  }
  
  get f(){
    return this.myForm.controls;
  }

  onFileChange(event:any) {
   
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  } 
  
  submit(){
    const formData = new FormData();
    formData.append('idCartera', this.idCartera.toString());
    //formData.append('primario', this.myForm.get('primario')?.value);
    //formData.append('periodo', this.myForm.get('periodo')?.value);
    formData.append('file', this.myForm.get('fileSource')?.value);
    formData.append('idCarteraControlComisiones', this.idCartera.toString());

   
    console.log(formData);
    this.http.post('http://localhost:8080/comportamiento/upload', formData)
      .subscribe(res => {
        console.log(res); 
        alert(Object.values(res));
      })
  }

  getArchivos(event:Event,periodoProces:PeriodoProceso):void{
    let navigationExtras: NavigationExtras = {
      queryParams: {
        cartera: periodoProces.id
      }
    }; 

    this.comportamientoService.listFilesbyCartera(periodoProces.id).subscribe(
      files => {
        this.controlEnvios = files;
      }
    );
  }

  dataProduction(event:Event,periodoProces:PeriodoProceso):void{

    let id = <Periodo> periodoProces.i_Periodo; 

    this.dialog.open(ActionComportamiento, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion:'Subir Comportamiento'
      },
    });
    
  }

  generateV9(event:Event,periodoProces:PeriodoProceso):void{

    let id = <Periodo> periodoProces.i_Periodo; 

    this.dialog.open(ActionComportamiento, {
      data: {
        idElement: periodoProces.id,
        actionName: id.id,
        descripcion:'Generar V9'
      },
    });
    
  }


  openDialog(event:Event,ce:ControlEnvio) {
    
    this.dialog.open(DetalleArchivo, {
      data: {
        id: ce.id,
        name:ce.fileName
      },
    });
  }

  deleteFiles(event:Event,ce:ControlEnvio) {
    
    this.dialog.open(ActionComportamiento, {
      data: {
        idElement: ce.id,
        actionName:ce.fileName,
        descripcion:'Eliminar Comporamiento'
      },
    });
  }

  
}



