import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad, CanActivate{
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {  
    const LOGGED_USER = this.authService.getLoggedUser();
    console.log("AuthGuard - Load");
    console.log(LOGGED_USER);

    let url: string | undefined = route.path;
    console.log("URL"+ url)

    if (!LOGGED_USER) {
      if (url == 'login') {        
        return true;
      }
      this.router.navigate(['login']);
    } 
    else {
      if (url == 'login') {
        this.router.navigate(['lista-receita']);
      }
    }

    return true;
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    const LOGGED_USER = this.authService.getLoggedUser();
    console.log("AuthGuard - Activate");
    console.log(LOGGED_USER);

    if (!LOGGED_USER) {
      if (state.url.endsWith('login')){
        return true;
      }
      this.router.navigate(['login']);
    } 
    else {
      if (state.url.endsWith('login')) {
        this.router.navigate(['perfil']);
      }
    }

    return true;
  }}
