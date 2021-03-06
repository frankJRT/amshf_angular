import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {TokenDto} from '../models/token-dto'
import { environment } from 'src/environments/environment';

const  cabecera = {headers: new HttpHeaders({'Content-Type':'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  oauthUrl = environment.oauthUrl;

  constructor(private httpClient: HttpClient) { }

  public google(tokenDto: TokenDto): Observable<TokenDto>{
    return this.httpClient.post<TokenDto>(this.oauthUrl+'google', tokenDto, cabecera);
  }

}
