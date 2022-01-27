import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenDtoService } from '../service/token-dto.service';

@Injectable({
  providedIn: 'root'
})
export class CarteraGuard implements CanActivate {
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/

  constructor(private tokenService: TokenDtoService,
    private router:Router){
      
  }
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
      if(!this.tokenService.getToken()){
        this.router.navigate(['']);
        return false;
      }
    return true;
  }  
}
