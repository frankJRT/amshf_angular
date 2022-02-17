import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ComportamientoService } from 'src/app/service/comportamiento.service';
import { NavigationExtras, Router } from '@angular/router';
import { PeriodoProceso } from 'src/app/models/periodo-proceso';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-comportamiento',
  templateUrl: './comportamiento.component.html',
  styleUrls: ['./comportamiento.component.scss']
})
export class ComportamientoComponent implements OnInit {
  periodoProcesos!:PeriodoProceso[];
  displayedColumns: string[] = ['id', 'd_Alta', 'I_Periodo','I_Cartera_Comportamiento','actions'];
  

  @Input() idCartera=0; 
  myForm = new FormGroup({
    //primario: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(3)]),
    //periodo: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(6)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });




 
  constructor(private http: HttpClient
    , private comportamientoService:ComportamientoService
    ,private router: Router){

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
  }


}
