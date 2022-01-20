import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenDtoService } from '../service/token-dto.service';

@Injectable()
export class CarteraInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenDtoService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request;
    const token = this.tokenService.getToken();

    if(token != null){
      authReq = authReq.clone({headers: request.headers.set('Authorization','Bearer '+token)});
    }

    return next.handle(authReq);
  }
}

export const carteraInterceptor =[{provide: HTTP_INTERCEPTORS, useClass:CarteraInterceptor, multi:true}] 