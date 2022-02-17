import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PeriodoProceso } from '../models/periodo-proceso';

const  cabecera = {headers: new HttpHeaders({'Content-Type':'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ComportamientoService {
  
  comportamientoUrl = environment.comportamientoUrl;

  constructor(private httpClient: HttpClient) { }
  
  public listbyCartera(cartera:number ):Observable<PeriodoProceso[]>{

    let params = new HttpParams().set('id', cartera);
    return this.httpClient.get<PeriodoProceso[]>(this.comportamientoUrl+'listPeriodoProcesos',
      {params:params,
        headers:new HttpHeaders({'Content-Type':'application/json'})});
  }

}