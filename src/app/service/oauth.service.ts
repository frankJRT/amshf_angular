import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {TokenDto} from '../models/token-dto'

const  cabecera = {headers: new HttpHeaders({'Content-Type':'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  oauthUrl ="http://localhost:8080/oauth/";

  constructor(private httpClient: HttpClient) { }

  public google(tokenDto: TokenDto): Observable<TokenDto>{
    return this.httpClient.post<TokenDto>(this.oauthUrl+'google', tokenDto, cabecera);
  }

}
