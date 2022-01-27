import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartera } from '../models/cartera'
import { environment } from 'src/environments/environment';

const  cabecera = {headers: new HttpHeaders({'Content-Type':'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class CarteraService {

  carteraUrl = environment.carteraUrl;

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Cartera[]>{
    return this.httpClient.get<Cartera[]>(this.carteraUrl+'carteras',cabecera);
  }
}
